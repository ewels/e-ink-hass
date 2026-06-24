"""E-ink Schedule.

Derives two sensors from a Home Assistant **Schedule** helper so the e-ink device
can show a different dashboard at different times of day/week with the *fewest
possible wakes*:

- ``sensor.eink_dashboard`` — the dashboard to show right now (the active block's
  ``dashboard`` custom-data value, or the default).
- ``sensor.eink_seconds_until_refresh`` — seconds until the next event *start*
  (every scheduled event is a wake = a data refresh, even if the dashboard is
  unchanged — prices/weather/calendar still move).

Why a custom component instead of a template? The Schedule helper exposes
`next_event` (the next block edge) and the current block's data to templates, but
`next_event` fires on every block *end* too — so 30-minute "switch-point" events
would each cause a spurious wake when they end. By reading the helper's blocks
directly (`get_schedule()`) we wake on event *starts only* and hold the last view
across gaps; block durations are ignored.

This is a YAML sensor platform; see ha/eink_schedule/README.md.
"""
