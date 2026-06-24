"""Sensors that turn a Schedule helper into 'current dashboard' + 'seconds to the
next scheduled refresh', for e-ink dashboard scheduling.

The device wakes at every event *start* (each is a data refresh) and shows the
event's dashboard; it ignores block end-times, so 30-minute "switch-point" events
work just like contiguous blocks. Reading the schedule directly (rather than the
helper's `next_event`) lets us wake on starts only — `next_event` would also fire
on every block *end*."""

from __future__ import annotations

from datetime import datetime, timedelta
import logging

import voluptuous as vol

from homeassistant.components.schedule.const import (
    CONF_DATA,
    CONF_FROM,
    WEEKDAY_TO_CONF,
)
from homeassistant.components.sensor import (
    PLATFORM_SCHEMA as SENSOR_PLATFORM_SCHEMA,
    SensorDeviceClass,
    SensorEntity,
)
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.entity_component import DATA_INSTANCES
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType
import homeassistant.util.dt as dt_util

_LOGGER = logging.getLogger(__name__)

CONF_SCHEDULE_ENTITY = "schedule_entity"
CONF_DEFAULT_DASHBOARD = "default_dashboard"
DASHBOARD_KEY = "dashboard"  # the custom-data key set on each schedule block

# 6h fallback if the schedule can't be read or never changes dashboard.
FALLBACK_SECONDS = 21600

SCAN_INTERVAL = timedelta(seconds=30)

PLATFORM_SCHEMA = SENSOR_PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_SCHEDULE_ENTITY): cv.entity_id,
        vol.Optional(CONF_DEFAULT_DASHBOARD, default="panel"): cv.string,
    }
)


def _block_starts(schedule: dict, now: datetime) -> list[tuple[datetime, str | None]]:
    """Every (start_datetime, dashboard) over [now-7d, now+8d], chronological.

    Only block *starts* matter: the display holds the last view until the next
    start, so block end-times and gaps never trigger a wake.
    """
    out: list[tuple[datetime, str | None]] = []
    base = now.date()
    for offset in range(-7, 9):
        day = base + timedelta(days=offset)
        for time_range in schedule.get(WEEKDAY_TO_CONF[day.weekday()], []):
            start = datetime.combine(day, time_range[CONF_FROM], tzinfo=now.tzinfo)
            dashboard = (time_range.get(CONF_DATA) or {}).get(DASHBOARD_KEY)
            out.append((start, dashboard))
    out.sort(key=lambda item: item[0])
    return out


def _resolve(schedule: dict, now: datetime, default: str) -> tuple[str, int]:
    """Return (dashboard_to_show_now, seconds_until_next_dashboard_change)."""
    starts = _block_starts(schedule, now)

    # Current dashboard = the most recent block start at or before now (we keep
    # showing it across any gap until the next start).
    current = default
    for start, dashboard in starts:
        if start <= now:
            current = dashboard or default
        else:
            break

    # Wake at the next event *start* — every scheduled event is a refresh, even
    # if the dashboard doesn't change (the view's data — prices, weather,
    # calendar — does). Block ends/durations are ignored; only starts wake the
    # device, and gaps hold the last view. Don't place an event you don't want to
    # wake for (e.g. at midnight).
    next_start = next((start for start, _dashboard in starts if start > now), None)
    if next_start is None:
        return current, FALLBACK_SECONDS
    return current, max(1, int((next_start - now).total_seconds()))


def _read_schedule(hass: HomeAssistant, entity_id: str) -> dict | None:
    """Read a Schedule helper's full weekly block list, or None if unavailable."""
    component = hass.data.get(DATA_INSTANCES, {}).get("schedule")
    entity = component.get_entity(entity_id) if component else None
    return entity.get_schedule() if entity is not None else None


async def async_setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    add_entities: AddEntitiesCallback,
    discovery_info: DiscoveryInfoType | None = None,
) -> None:
    """Set up the e-ink schedule sensors."""
    schedule_entity = config[CONF_SCHEDULE_ENTITY]
    default = config[CONF_DEFAULT_DASHBOARD]
    add_entities(
        [
            EinkDashboardSensor(hass, schedule_entity, default),
            EinkSecondsSensor(hass, schedule_entity, default),
        ],
        True,
    )


class _EinkScheduleSensor(SensorEntity):
    """Shared base: recompute from the Schedule helper on each poll."""

    _attr_should_poll = True

    def __init__(self, hass: HomeAssistant, schedule_entity: str, default: str) -> None:
        self._hass = hass
        self._schedule_entity = schedule_entity
        self._default = default

    def _resolve(self) -> tuple[str, int]:
        schedule = _read_schedule(self._hass, self._schedule_entity)
        if not schedule:
            _LOGGER.warning("Schedule %s not readable yet", self._schedule_entity)
            return self._default, FALLBACK_SECONDS
        return _resolve(schedule, dt_util.now(), self._default)


class EinkDashboardSensor(_EinkScheduleSensor):
    """The dashboard view path to show right now."""

    _attr_name = "Eink dashboard"
    _attr_unique_id = "eink_dashboard"
    _attr_icon = "mdi:view-dashboard"

    async def async_update(self) -> None:
        self._attr_native_value, _ = self._resolve()


class EinkSecondsSensor(_EinkScheduleSensor):
    """Seconds until the dashboard next changes (what the device sleeps for)."""

    _attr_name = "Eink seconds until refresh"
    _attr_unique_id = "eink_seconds_until_refresh"
    _attr_native_unit_of_measurement = "s"
    _attr_device_class = SensorDeviceClass.DURATION

    async def async_update(self) -> None:
        dashboard, seconds = self._resolve()
        self._attr_native_value = seconds
        self._attr_extra_state_attributes = {"dashboard": dashboard}
