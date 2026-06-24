// Dump real Home Assistant state into dev/hass-snapshot.json so the dev harness
// can render cards against live data. Dev-only; not used at runtime.
//
// Captures: entity states, the daily weather forecast (which lives behind a
// service call, not attributes), and calendar events for the dashboard's
// calendars — the same data the cards fetch at runtime via hass.callApi.
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
try {
  process.loadEnvFile(resolve(ROOT, ".env"));
} catch {
  /* fall through to the check below */
}

const base = process.env.HA_BASE_URL?.replace(/\/$/, "");
const token = process.env.HA_TOKEN;
if (!base || !token) {
  console.error("Set HA_BASE_URL and HA_TOKEN in .env (see .env.example).");
  process.exit(1);
}

const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
const CALENDARS = [
  "calendar.personal",
  "calendar.family",
  "calendar.holidays_in_sweden",
];

const states = await (await fetch(`${base}/api/states`, { headers })).json();
const byId = Object.fromEntries(states.map((s) => [s.entity_id, s]));

// Daily weather forecast (behind a service, not attributes).
const weatherEntity = Object.keys(byId).find((id) => id.startsWith("weather."));
let forecasts = {};
if (weatherEntity) {
  try {
    const resp = await fetch(
      `${base}/api/services/weather/get_forecasts?return_response=true`,
      { method: "POST", headers, body: JSON.stringify({ entity_id: weatherEntity, type: "daily" }) },
    ).then((r) => r.json());
    forecasts = resp?.service_response ?? {};
  } catch {
    /* optional */
  }
}

// Calendar events for the next few days.
const start = new Date();
start.setHours(0, 0, 0, 0);
const end = new Date(start.getTime() + 4 * 86400000);
const qs = `start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`;
const calendars = {};
for (const id of CALENDARS) {
  try {
    const events = await fetch(`${base}/api/calendars/${id}?${qs}`, { headers }).then((r) => r.json());
    if (Array.isArray(events)) calendars[id] = events;
  } catch {
    /* skip a calendar that isn't present */
  }
}

const out = resolve(ROOT, "dev/hass-snapshot.json");
writeFileSync(out, JSON.stringify({ states: byId, forecasts, calendars }, null, 2));
console.log(
  `Wrote ${out} (${states.length} entities, ${Object.keys(forecasts).length} forecast, ` +
    `${Object.values(calendars).reduce((a, e) => a + e.length, 0)} events)`,
);
