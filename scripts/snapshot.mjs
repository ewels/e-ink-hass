// Dump real Home Assistant state into dev/hass-snapshot.json so the dev harness
// can render cards against live data. Dev-only; not used at runtime.
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

const auth = { headers: { Authorization: `Bearer ${token}` } };

const states = await (await fetch(`${base}/api/states`, auth)).json();
const byId = Object.fromEntries(states.map((s) => [s.entity_id, s]));

// Also pull the daily weather forecast (lives behind a service, not attributes).
const weatherEntity = Object.keys(byId).find((id) => id.startsWith("weather."));
let forecasts = {};
if (weatherEntity) {
  try {
    const resp = await fetch(
      `${base}/api/services/weather/get_forecasts?return_response=true`,
      {
        method: "POST",
        headers: { ...auth.headers, "Content-Type": "application/json" },
        body: JSON.stringify({ entity_id: weatherEntity, type: "daily" }),
      },
    ).then((r) => r.json());
    forecasts = resp?.service_response ?? {};
  } catch {
    /* optional */
  }
}

const out = resolve(ROOT, "dev/hass-snapshot.json");
writeFileSync(out, JSON.stringify({ states: byId, forecasts }, null, 2));
console.log(`Wrote ${out} (${states.length} entities)`);
