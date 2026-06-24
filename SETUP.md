# Setup walkthrough — reTerminal E1002 e-ink dashboard

End-to-end guide to get this running on a **Seeed reTerminal E1002**. Roughly
30–45 minutes, most of it waiting on installs.

**You need:**
- Home Assistant on **HA OS** or **Supervised** (the Puppet add-on needs the Supervisor)
- **HACS** installed
- A **Seeed reTerminal E1002** + USB-C cable

See the [README](README.md) for how the pieces fit together. The flow is:
Lovelace view → Puppet add-on screenshots it → device fetches the image on wake → deep-sleep.

---

## 1. Install the cards (HACS)

In **HACS → ⋮ → Custom repositories**, add this repo with category **Dashboard**:

```
https://github.com/ewels/e-ink-hass
```

Then **download** it, and also install these community cards (HACS → search → download):

| Card | Why |
|------|-----|
| `clock-weather-card` | weather block |
| `card-mod` | restyles the weather to the monochrome e-ink look |
| `calendar-card-pro` | calendar |

**Reload your browser** (Cmd/Ctrl-Shift-R) so the new Lovelace resources load.

## 2. Create the dashboard

1. **Settings → Dashboards → Add dashboard → New dashboard from scratch** — title `E-ink`, icon `mdi:tablet-dashboard`.
2. Open it → **⋮ → Edit dashboard → ⋮ → Raw configuration editor**.
3. Paste the contents of [`dashboards/reterminal.yaml`](dashboards/reterminal.yaml).
4. **Swap the entity IDs for your own** — the weather entity, your electricity-price
   sensor, and the calendars (`calendar.personal` / `calendar.family` are placeholders).
5. **Save.**

Open the dashboard — it should render at panel size. (Tabs in this dashboard become
the different screens the device can show.)

## 3. Add the wake-time sensor

The device reads one sensor to know how long to sleep. Add
[`ha/seconds-until-wake.yaml`](ha/seconds-until-wake.yaml) to your
`configuration.yaml` (under `template:`) or a package, edit the `times` list to your
schedule (default `05:30 / 15:30 / 19:00`), and **restart HA**. This creates
`sensor.eink_seconds_until_refresh`.

> Without this sensor the display still works, but falls back to a fixed ~6-hour sleep.

## 4. Install + configure the Puppet add-on

Puppet screenshots your Lovelace view into an image the device can fetch.

1. **Settings → Add-ons → Store → ⋮ → Repositories**, add:
   ```
   https://github.com/balloob/home-assistant-addons
   ```
   then install **Puppet**. ⏳ This is **slow** — it builds Chromium on the Pi
   (several minutes, sometimes 10–15). The download isn't the bottleneck; unpacking
   onto the Pi's storage is.

2. **Use a dedicated HA user for Puppet.** Puppet renders in light mode and HA
   *persists that theme to the token's user* — so if you use your own token, your UI
   flips to light. Avoid it:
   - **Settings → People → Users → Add User** → `puppet`, **non-admin**.
   - Log in as `puppet` in a **private/incognito window** → its **Security** tab →
     **create a long-lived access token** → copy.
3. **Puppet → Configuration** → set `access_token` to that token → **Save** → **Start**
   (enable **Watchdog** and **Start on boot**).
4. **Verify** from any browser on your LAN (use your HA's IP):
   ```
   http://<HA-IP>:10000/e-ink/panel?viewport=800x480&colors=000000,FFFFFF,FF0000,FFFF00,0000FF,008000
   ```
   You should get a dithered 800×480 PNG. `colors` reduces to the panel's six Spectra inks.

## 5. Flash the device (ESPHome)

1. Install the **ESPHome Device Builder** add-on (**ESPHome ≥ 2025.11** — needed for the
   `Seeed-reTerminal-E1002` display model). Add your WiFi to ESPHome's **secrets editor**:
   ```yaml
   wifi_ssid: "Your network"
   wifi_password: "Your password"
   ```
2. **+ New Device → (Advanced) Empty Configuration** → name `reterminal-eink` → paste
   [`device/reterminal-e1002.yaml`](device/reterminal-e1002.yaml).
3. Set `substitutions.image_url` to use your **HA IP** (mDNS `.local` is flaky on the
   ESP32), keeping the port/path/colors:
   ```
   http://<HA-IP>:10000/e-ink/panel?viewport=800x480&colors=000000,FFFFFF,FF0000,FFFF00,0000FF,008000
   ```
4. **Flash (first time over USB-C):**
   - Power switch **ON** (side), plug in **USB-C**.
   - The **BOOT/RESET buttons are internal** on the E1002 — you don't need them; the
     ESP32-S3's native USB enters download mode by itself.
   - If it isn't detected, it's **asleep** → **press the green button on top to wake it**, then retry.
   - ESPHome → **Install → Plug into this computer**. After the first wired flash, updates go OTA.
5. After it boots and joins WiFi, **add it to HA's ESPHome integration**
   (Settings → Devices & Services → ESPHome) so it can read
   `sensor.eink_seconds_until_refresh`.

## 6. How it runs

On each scheduled time the device wakes, reads the wake-time sensor, fetches the Puppet
image, draws it, and deep-sleeps until the next slot — ~3 wakes/day, so multi-month
battery. Press the right-hand button (GPIO4) to force an on-demand refresh.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Your HA UI flipped to light mode | Use the dedicated `puppet` user (§4.2); revert your own theme in Profile → Theme |
| Cards show "Custom element doesn't exist" | Resources didn't load — hard-reload the browser; confirm the HACS downloads |
| Device can't fetch the image | Use the HA **IP**, not `.local`; confirm Puppet is running and reachable on `:10000` |
| Colours look off / banded | Tune the `colors` palette in the image URL |
| Can't re-flash (device asleep) | Wake with the green top button, or catch it during its brief awake window |

## Customising

- **Schedule:** the `times` list in `ha/seconds-until-wake.yaml`
- **Layout / cards / entities:** the dashboard's raw config (from `dashboards/reterminal.yaml`)
- **Price thresholds, calendars, weather styling:** the card options in that config
- **Develop cards:** `npm run dev` for the 800×480 browser harness (see [README](README.md#develop-a-card))

> The ESPHome config in `device/` is a solid starting point but **not yet validated on
> hardware** — expect to adjust pin numbers or the deep-sleep flow on the first flash.
