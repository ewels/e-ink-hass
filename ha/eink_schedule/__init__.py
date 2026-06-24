"""E-ink Schedule.

Derives two sensors from a Home Assistant **Schedule** helper so the e-ink device
can show a different dashboard at different times of day/week with the *fewest
possible wakes*:

- ``sensor.eink_dashboard`` — the dashboard to show right now (the active block's
  ``dashboard`` custom-data value, or the default).
- ``sensor.eink_seconds_until_refresh`` — seconds until the next time the
  dashboard actually *changes*.

Why a custom component instead of a template? The Schedule helper only exposes
its `next_event` (the next block edge) and the current block's data to templates —
not its full block list. By reading the helper's blocks directly
(`get_schedule()`), we can look ahead and sleep straight to the next *change*,
collapsing same-dashboard adjacencies and the midnight block-split (a block can't
cross midnight) — so an overnight "photo" period is one sleep, not two.

This is a YAML sensor platform; see ha/eink_schedule/README.md.
"""
