# `google_rsvp_filter` — smarter Google Calendar filtering

A ~40-line Home Assistant **custom component** that filters Google Calendar
events the built-in integration won't, by monkey-patching one method
(`GoogleCalendarEntity._event_filter`). Optional — only needed if a work calendar
clutters the dashboard with focus blocks, out-of-office, or meetings you haven't
accepted.

## Why this exists

HA's Google Calendar integration deliberately exposes very little per event —
just `summary / start / end / description / location / uid / recurrence_id /
rrule`. It is **not** available downstream (calendar-card-pro only gets that
list), so you can't filter on it in the card. Two gaps:

- **Response status** isn't exposed. The integration only drops events you've
  *declined* ([home-assistant/core PR #128900]); tentative / no-reply still show.
  PRs to expose attendees stalled ([#119457]).
- **Focus time / Out of office** aren't dropped. The built-in filter only auto-
  removes `BIRTHDAY` and `WORKING_LOCATION` event types.

The data needed for both is *already fetched* by the `gcal_sync` library
(`event.attendees`, `event.event_type`) — the integration just doesn't act on
it. This component does, for the calendars you list.

## What it does (for `TARGET_ENTITIES` only)

1. **Hides Focus time / Out of office by event _type_.** Because it matches the
   Google event type (not the title), it catches focus blocks even when you've
   renamed them (e.g. a focus block titled "Slack / email"). A title-based card
   blocklist can't do this — so this **replaces** those blocklist entries.
2. **Hides events you haven't accepted** (declined / tentative / needs-action).
   Events with no attendees (ones you created solo) always pass — there's no
   "self" attendee to check.

Other calendars are untouched.

## Install (HA OS, no SSH needed)

1. Copy this folder to `/config/custom_components/google_rsvp_filter/` on your HA
   box. Easiest without SSH: the **Studio Code Server** (or File Editor) add-on —
   its terminal/explorer reaches `/config`.
2. Edit `__init__.py` → set `TARGET_ENTITIES` to your calendar entity id(s)
   (Settings → Devices & Services → Entities, e.g. `calendar.work`).
3. Enable it: add a bare key to `configuration.yaml`:
   ```yaml
   google_rsvp_filter:
   ```
4. **Restart Home Assistant.**

To also hide more event types, add them to `HIDE_EVENT_TYPES` (options:
`OUT_OF_OFFICE`, `FOCUS_TIME`, `FROM_GMAIL`, `BIRTHDAY`, `WORKING_LOCATION`).

## Verify

`GET /api/calendars/<entity>?start=…&end=…` (or just look at the dashboard) — the
focus/OOO and un-accepted events should be gone. Compare event counts before/
after a restart.

## Caveats

- **Custom integration**, so HA logs a "not tested by Home Assistant" warning,
  and it overrides nothing else — it only wraps that one method.
- It depends on the method name `GoogleCalendarEntity._event_filter` staying put.
  If a future HA release renames it, the component will log an Import/Attribute
  error on startup and you'll see the unfiltered events again — harmless, just
  update the patch. Verified against **HA 2026.5**.
- It's a workaround, not a fork of core. The "right" long-term fix is an upstream
  config option; see [#119457] for the (stalled) discussion.

[home-assistant/core PR #128900]: https://github.com/home-assistant/core/pull/128900
[#119457]: https://github.com/home-assistant/core/pull/119457
