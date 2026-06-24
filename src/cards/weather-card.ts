import { LitElement, html, css, unsafeCSS } from "lit";
import type { PropertyValues } from "lit";
import type { HomeAssistant, WeatherDay } from "../shared/hass.js";
import { registerCard } from "../shared/hass.js";
import { INK } from "../shared/palette.js";
import { weatherIcon } from "../shared/weather-icons.js";

interface WeatherCardConfig {
  entity?: string;
  title?: string;
  days?: number;
}

const weekday = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-GB", { weekday: "short" });

const humanize = (condition: string): string =>
  condition.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

/**
 * Current conditions + daily forecast for the e-ink panel. Big icon and
 * temperature, then a row per day with a min–max temperature range bar (scaled
 * across the whole forecast window), modelled on the reference design.
 */
export class EinkWeatherCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _forecast: { state: true },
  };

  hass?: HomeAssistant;
  private _config: WeatherCardConfig = {};
  private _forecast: WeatherDay[] = [];
  private _loaded = false;

  setConfig(config: WeatherCardConfig): void {
    this._config = { entity: "weather.forecast_home", days: 4, ...config };
  }

  getCardSize(): number {
    return 4;
  }

  willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass && !this._loaded) {
      this._loaded = true;
      void this._loadForecast();
    }
  }

  private async _loadForecast(): Promise<void> {
    const entity = this._config.entity!;
    try {
      const resp = await this.hass!.callApi!(
        "POST",
        "services/weather/get_forecasts?return_response=true",
        { entity_id: entity, type: "daily" },
      );
      const raw: any[] = resp?.service_response?.[entity]?.forecast ?? [];
      this._forecast = raw.map((f) => ({
        date: f.datetime,
        condition: f.condition,
        tempHigh: f.temperature,
        tempLow: f.templow,
        precipitation: f.precipitation,
        precipProbability: f.precipitation_probability,
      }));
    } catch {
      /* leave forecast empty; current conditions still render */
    }
  }

  render() {
    const ent = this.hass?.states[this._config.entity!];
    if (!ent) return html`<div class="card empty">No weather (${this._config.entity})</div>`;

    const days = this._forecast.slice(0, this._config.days);
    const lows = days.map((d) => d.tempLow);
    const highs = days.map((d) => d.tempHigh);
    const lo = Math.min(...lows, ent.attributes["temperature"] ?? Infinity);
    const hi = Math.max(...highs, ent.attributes["temperature"] ?? -Infinity);
    const span = Math.max(1, hi - lo);
    const frac = (t: number) => ((t - lo) / span) * 100;

    return html`
      <div class="card">
        <div class="current">
          <div class="icon-lg">
            <svg viewBox="0 0 64 48">${weatherIcon(ent.state)}</svg>
          </div>
          <div class="cur-text">
            <div class="cond">${humanize(ent.state)}</div>
            <div class="temp">${Math.round(ent.attributes["temperature"])}°</div>
          </div>
        </div>
        <div class="forecast">
          ${days.map(
            (d) => html`
              <div class="row">
                <span class="dow">${weekday(d.date)}</span>
                <svg class="icon-sm" viewBox="0 0 64 48">${weatherIcon(d.condition)}</svg>
                <span class="lo">${Math.round(d.tempLow)}°</span>
                <span class="bar">
                  <span
                    class="fill"
                    style="left:${frac(d.tempLow)}%;right:${100 - frac(d.tempHigh)}%"
                  ></span>
                </span>
                <span class="hi">${Math.round(d.tempHigh)}°</span>
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      --ink: ${unsafeCSS(INK.black)};
      --paper: ${unsafeCSS(INK.white)};
      --sun: ${unsafeCSS(INK.yellow)};
      --rain: ${unsafeCSS(INK.blue)};
      --track: #c8c8c8;
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px 16px;
    }
    .empty {
      padding: 24px;
      font-weight: 700;
    }
    .current {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-lg svg {
      width: 96px;
      height: 72px;
      display: block;
    }
    .cur-text {
      margin-left: auto;
      text-align: right;
    }
    .cond {
      font-size: 16px;
      font-weight: 700;
    }
    .temp {
      font-size: 54px;
      font-weight: 800;
      line-height: 1;
    }
    .forecast {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
    }
    .dow {
      width: 42px;
    }
    .icon-sm {
      width: 30px;
      height: 24px;
      flex: 0 0 auto;
    }
    .lo {
      width: 38px;
      text-align: right;
    }
    .hi {
      width: 38px;
      text-align: right;
    }
    .bar {
      position: relative;
      flex: 1 1 auto;
      height: 10px;
      background: var(--track);
      border-radius: 5px;
    }
    .fill {
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--ink);
      border-radius: 5px;
    }
  `;
}

registerCard({
  type: "eink-weather-card",
  name: "E-ink Weather Card",
  description: "Current conditions + daily forecast with temperature range bars, for the e-ink panel.",
});
