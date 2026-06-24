# `eink_schedule` — scheduled dashboard switching for e-ink

A small Home Assistant **custom component** that turns a **Schedule** helper into
two sensors, so the e-ink device can show a different dashboard at different times
of the week and wake at each scheduled point to refresh:

- **`sensor.eink_dashboard`** — the view path to show now (from the active block's
  `dashboard` custom-data, else `default_dashboard`).
- **`sensor.eink_seconds_until_refresh`** — seconds until the next event *start*
  (what the device deep-sleeps for).

Each scheduled event is a **wake = a refresh**, even if the dashboard doesn't
change — the view's *data* (prices, weather, calendar) still moves, so re-fetching
`panel` at 19:00 is meaningful, not wasted.

## Why not just a template + the Schedule helper's `next_event`?

The Schedule helper exposes `next_event` (the next block *edge*) + the current
block's data to templates, but `next_event` fires on every block **end** as well
as start. With 30-minute "switch-point" events that means a spurious second wake
when each event ends.

This component reads the helper's full weekly schedule (`get_schedule()`) and
wakes on **event starts only**, holding the last view across gaps (block ends and
durations are ignored). So you place one short event at each time you want the
screen to refresh/switch, and that's exactly when the device wakes.

E.g. events at `05:30 panel`, `11:30 photo`, `15:30 panel`, `19:00 panel`
⇒ wakes at those four times (three `panel` refreshes + the `photo`), and sleeps
straight through the night to the next morning — **no midnight wake, because
there's no midnight event.**

## Setup

1. Create a **Schedule helper** (Settings → Devices & Services → Helpers →
   Schedule), e.g. `schedule.eink_wake`. Add a short event at **each time you want
   the screen to refresh/switch**, tagged with custom data `dashboard: <view-path>`
   (e.g. `panel`, `photo`). Event length doesn't matter — only the start time.
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

- **Event starts are the only wake points** — the display holds the last view
  until the next start, so end-times and durations are ignored. One short event
  per refresh/switch time; don't place an event at a time you don't want to wake.
- Polls every 30 s, so schedule edits apply within ~30 s; no restart needed to
  change times (just edit the Schedule helper in the UI).
- Reads `homeassistant.components.schedule` internals (`get_schedule()` +
  `WEEKDAY_TO_CONF`). Stable across 2026.5; if a future release changes them the
  sensors log a warning and fall back to a fixed 6 h sleep. Verified on HA 2026.5.
