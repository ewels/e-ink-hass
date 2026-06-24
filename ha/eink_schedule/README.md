# `eink_schedule` — minimal-wake dashboard scheduling

A small Home Assistant **custom component** that turns a **Schedule** helper into
two sensors, so the e-ink device can show a different dashboard at different times
of the week while waking **only when the dashboard actually changes**:

- **`sensor.eink_dashboard`** — the view path to show now (from the active block's
  `dashboard` custom-data, else `default_dashboard`).
- **`sensor.eink_seconds_until_refresh`** — seconds until the next dashboard
  *change* (what the device deep-sleeps for).

## Why not just a template + the Schedule helper's `next_event`?

The Schedule helper only exposes `next_event` (the next block *edge*) and the
*current* block's data to templates — not the full block list. So a template
wakes at **every** edge: block ends, gaps, and the **midnight split** (a block
can't cross midnight, so an overnight period is two blocks → a wake at 00:00).

This component reads the helper's full weekly schedule (`get_schedule()`) and
looks ahead to the next *dashboard change*, so:
- block ends / gaps don't wake the device (the e-ink holds the last image),
- consecutive same-dashboard blocks collapse — **including across midnight**.

E.g. `photo` 19:00→07:00 (stored as 19:00–24:00 + 00:00–07:00) + `panel`
07:00–19:00 ⇒ exactly **2 wakes/day** (07:00, 19:00), no 00:00 wake.

## Setup

1. Create a **Schedule helper** (Settings → Devices & Services → Helpers →
   Schedule), e.g. `schedule.eink_wake`. Tile each day contiguously and tag each
   block with custom data `dashboard: <view-path>` (e.g. `panel`, `photo`).
2. Copy this folder to `/config/custom_components/eink_schedule/`.
3. In `configuration.yaml`:
   ```yaml
   sensor:
     - platform: eink_schedule
       schedule_entity: schedule.eink_wake
       default_dashboard: panel    # shown if a block has no dashboard tag
   ```
   (Remove the old `template:` `eink_seconds_until_refresh` sensor — this replaces it.)
4. Restart Home Assistant.

The device reads `sensor.eink_seconds_until_refresh` (sleep duration) and
`sensor.eink_dashboard` (which view to fetch) — see `device/reterminal-e1002.yaml`.

## Notes / caveats

- **Block starts are the only switch points** — the display holds the last view
  until the next start, so end-times/gaps are ignored. Tile contiguously for
  intuitive behaviour.
- Polls every 30 s, so schedule edits apply within ~30 s; no restart needed to
  change times (just edit the Schedule helper in the UI).
- Reads `homeassistant.components.schedule` internals (`get_schedule()` +
  `WEEKDAY_TO_CONF`). Stable across 2026.5; if a future release changes them the
  sensors log a warning and fall back to a fixed 6 h sleep. Verified on HA 2026.5.
