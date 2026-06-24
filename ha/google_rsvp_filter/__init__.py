"""Filter Google Calendar events that the built-in integration won't.

Two things the stock Home Assistant Google Calendar integration can't do, that
this tiny custom component adds — by monkey-patching
``GoogleCalendarEntity._event_filter`` for the calendars in ``TARGET_ENTITIES``:

1. Hide events you haven't ACCEPTED. The integration only drops events you've
   explicitly *declined* (home-assistant/core PR #128900); tentative / no-reply
   still show. The attendee response status is already fetched (it's in
   ``event.attendees``), the integration just doesn't act on it. Events with no
   attendees (ones you created solo) always pass — there's no "self" to check.

2. Hide "Focus time" and "Out of office" blocks. These have a real Google event
   *type* (``event.event_type``), so filtering by type catches them even when
   you've given them a custom title (e.g. a focus block named "Slack / email") —
   something a title-based card blocklist can't do. The built-in filter only
   auto-drops BIRTHDAY and WORKING_LOCATION, not these.

Other calendars are untouched. See ha/google_rsvp_filter/README.md for install.
"""

import logging

from gcal_sync.model import EventTypeEnum, ResponseStatus

from homeassistant.components.google.calendar import GoogleCalendarEntity
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

_LOGGER = logging.getLogger(__name__)

DOMAIN = "google_rsvp_filter"

# Apply the extra filtering to these calendar entities only. Replace with your
# own — find them under Settings -> Devices & Services -> Entities (e.g.
# "calendar.work").
TARGET_ENTITIES = {"calendar.work"}

# Google event types to hide outright (by type, not title).
HIDE_EVENT_TYPES = {EventTypeEnum.OUT_OF_OFFICE, EventTypeEnum.FOCUS_TIME}

_original_event_filter = GoogleCalendarEntity._event_filter


def _event_filter(self: GoogleCalendarEntity, event) -> bool:
    """Drop focus-time/OOO and un-accepted events on the targeted calendars."""
    if getattr(self, "entity_id", None) in TARGET_ENTITIES:
        # 1. Hide focus-time / out-of-office by Google event type.
        if event.event_type in HIDE_EVENT_TYPES:
            return False
        # 2. Hide events you're invited to but haven't accepted.
        self_attendee = next((a for a in event.attendees if a.is_self), None)
        if (
            self_attendee is not None
            and self_attendee.response_status != ResponseStatus.ACCEPTED
        ):
            return False
    return _original_event_filter(self, event)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Patch the Google calendar event filter at startup."""
    GoogleCalendarEntity._event_filter = _event_filter
    _LOGGER.info(
        "Google RSVP/type filter active for: %s", ", ".join(sorted(TARGET_ENTITIES))
    )
    return True
