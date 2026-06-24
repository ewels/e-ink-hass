import { LitElement, html, css, nothing, unsafeCSS } from "lit";
import type { HomeAssistant } from "../shared/hass.js";
import { registerCard } from "../shared/hass.js";
import { INK, LEVEL_INK } from "../shared/palette.js";

interface RawPoint {
  start?: string;
  date: string;
  time: string;
  price: number; // SEK/kWh (kr) as Greenely reports it
}

interface Point {
  ms: number;
  hour: number;
  minute: number;
  date: string;
  ore: number; // price in öre/kWh
  day: 0 | 1; // 0 = today, 1 = tomorrow
  level: "low" | "mid" | "high";
}

interface PriceCardConfig {
  entity?: string;
  title?: string;
  /** Fixed colour thresholds in öre/kWh. */
  low_threshold?: number; // green below this
  high_threshold?: number; // red above this
  /** Length (in data points) of the "cheapest window" to highlight; 0 disables. */
  cheapest_window?: number;
}

const BARS_PX = 132;

const isoOf = (p: RawPoint): number =>
  (p.start ? new Date(p.start) : new Date(`${p.date} ${p.time}`)).getTime();

const weekday = (date: string): string =>
  new Date(date).toLocaleDateString("en-GB", { weekday: "short" });

/**
 * Electricity price chart for the e-ink panel. Shows today and — once Nordpool
 * publishes it (~13:00) — tomorrow, as one continuous chart split by a divider.
 * Bars are coloured by fixed öre/kWh thresholds, the current interval is marked
 * with a line above it, and the cheapest contiguous window is underlined. Reads
 * Greenely's 15-minute `*_quarterly` attributes when present, else the hourly ones.
 */
export class EinkPriceCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config: PriceCardConfig = {};

  setConfig(config: PriceCardConfig): void {
    if (!config?.entity) throw new Error("eink-price-card: 'entity' is required");
    this._config = { title: "Electricity", low_threshold: 50, high_threshold: 200, ...config };
  }

  getCardSize(): number {
    return 3;
  }

  private series(): { points: Point[]; todayCount: number; max: number } | null {
    const ent = this.hass?.states[this._config.entity!];
    if (!ent) return null;

    const pick = (q: string, h: string): RawPoint[] => {
      const quarterly = ent.attributes[q] as RawPoint[] | undefined;
      const hourly = ent.attributes[h] as RawPoint[] | undefined;
      return quarterly?.length ? quarterly : (hourly ?? []);
    };
    const today = pick("current_day_quarterly", "current_day");
    const tomorrow = pick("next_day_quarterly", "next_day");
    if (!today.length) return null;

    const lowT = this._config.low_threshold!;
    const highT = this._config.high_threshold!;
    const toPoint = (p: RawPoint, day: 0 | 1): Point => {
      const d = new Date(isoOf(p));
      const ore = Math.round(Number(p.price) * 100);
      return {
        ms: d.getTime(),
        hour: d.getHours(),
        minute: d.getMinutes(),
        date: p.date,
        ore,
        day,
        level: ore < lowT ? "low" : ore > highT ? "high" : "mid",
      };
    };

    const points = [
      ...today.map((p) => toPoint(p, 0)),
      ...tomorrow.map((p) => toPoint(p, 1)),
    ];
    return { points, todayCount: today.length, max: Math.max(...points.map((p) => p.ore)) };
  }

  /** Start index of the cheapest contiguous window of length w (or -1). */
  private cheapestWindow(points: Point[], w: number): number {
    if (w <= 0 || w > points.length) return -1;
    let sum = points.slice(0, w).reduce((a, p) => a + p.ore, 0);
    let best = sum;
    let bestAt = 0;
    for (let i = w; i < points.length; i++) {
      sum += points[i]!.ore - points[i - w]!.ore;
      if (sum < best) {
        best = sum;
        bestAt = i - w + 1;
      }
    }
    return bestAt;
  }

  render() {
    const data = this.series();
    if (!data) {
      return html`<div class="card empty">No price data (${this._config.entity})</div>`;
    }
    const { points, todayCount, max } = data;
    const n = points.length;
    const quarter = todayCount >= 96;
    const pct = (i: number) => (i / (n - 1)) * 100;

    // Bars scale to the actual max (tallest fills the plot). Y labels are the
    // round values that fall below the max — none at the very top.
    const step = max <= 200 ? 50 : 100;
    const yticks: number[] = [];
    for (let v = 0; v < max; v += step) yticks.push(v);

    const now = Date.now();
    let nowIdx = 0;
    points.forEach((p, i) => {
      if (p.day === 0 && p.ms <= now) nowIdx = i;
    });

    const w = this._config.cheapest_window ?? (quarter ? 8 : 2);
    const cheapAt = this.cheapestWindow(points, w);

    const xticks = points
      .map((p, i) => ({ i, p }))
      .filter(({ p }) => p.minute === 0 && p.hour % 6 === 0);

    // "Now" marker: vertical line in the gap above the current bar.
    const nowBarPx = (Math.max(2, (points[nowIdx]!.ore / max) * 100) / 100) * BARS_PX;
    const nowLineH = Math.max(0, BARS_PX - nowBarPx - 5);

    return html`
      <div class="card">
        <div class="head">
          <span class="title">${this._config.title}</span>
          <span class="now">
            <span class="now-label">Now</span>${points[nowIdx]!.ore}
            <small>öre/kWh</small>
          </span>
        </div>
        <div class="chart">
          <div class="row">
            <div class="plot">
              <div class="bars">
                ${points.map(
                  (p) =>
                    html`<div class="bar ${p.level}" style="height:${Math.max(2, (p.ore / max) * 100)}%"></div>`,
                )}
              </div>
              <div class="now-line" style="left:${pct(nowIdx)}%;height:${nowLineH}px"></div>
              ${todayCount < n
                ? html`<div class="divider" style="left:${pct(todayCount - 0.5)}%"></div>`
                : nothing}
            </div>
            <div class="yaxis">
              ${yticks.map(
                (v) => html`<span class="ylabel" style="bottom:${(v / max) * 100}%">${v}</span>`,
              )}
            </div>
          </div>
          <div class="marks">
            ${cheapAt >= 0
              ? html`<div
                  class="window"
                  style="left:${pct(cheapAt)}%;width:${((w - 1) / (n - 1)) * 100}%"
                ></div>`
              : nothing}
          </div>
          <div class="axis">
            ${xticks.map(
              ({ i, p }) =>
                html`<span class="${p.hour === 0 ? "day" : ""}" style="left:${pct(i)}%"
                  >${p.hour === 0 ? weekday(p.date) : String(p.hour).padStart(2, "0")}</span
                >`,
            )}
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      --ink: ${unsafeCSS(INK.black)};
      --paper: ${unsafeCSS(INK.white)};
      --low: ${unsafeCSS(LEVEL_INK.low)};
      --mid: ${unsafeCSS(LEVEL_INK.mid)};
      --high: ${unsafeCSS(LEVEL_INK.high)};
      --accent: ${unsafeCSS(INK.blue)};
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 10px 14px 6px;
    }
    .empty {
      padding: 24px;
      font-weight: 700;
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;
    }
    .title,
    .now-label {
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .now {
      font-size: 26px;
      font-weight: 800;
      line-height: 1;
    }
    .now-label {
      margin-right: 8px;
    }
    .now small {
      font-size: 12px;
      font-weight: 700;
    }
    .chart {
      position: relative;
    }
    .row {
      display: flex;
      align-items: stretch;
    }
    .plot {
      position: relative;
      flex: 1 1 auto;
      height: ${BARS_PX}px;
      border-bottom: 2px solid var(--ink);
    }
    .bars {
      display: flex;
      align-items: flex-end;
      gap: 1px;
      height: 100%;
    }
    .bar {
      flex: 1 1 0;
      min-width: 0;
      border-radius: 2px 2px 0 0;
    }
    .bar.low {
      background: var(--low);
    }
    .bar.mid {
      background: var(--mid);
    }
    .bar.high {
      background: var(--high);
    }
    /* "Now" marker: vertical line above the current bar. */
    .now-line {
      position: absolute;
      top: 0;
      width: 0;
      border-left: 2px solid var(--ink);
      transform: translateX(-50%);
    }
    /* Today | tomorrow split. */
    .divider {
      position: absolute;
      top: 0;
      height: 100%;
      border-left: 2px dashed var(--ink);
    }
    /* Cheapest-window marker, in its own strip just below the bars. */
    .marks {
      position: relative;
      height: 6px;
      margin-top: 3px;
      margin-right: 32px; /* align 0–100% with .plot, not .yaxis */
    }
    .window {
      position: absolute;
      top: 0;
      height: 5px;
      background: var(--accent);
      border-radius: 3px;
    }
    .yaxis {
      position: relative;
      width: 32px;
      flex: 0 0 32px;
    }
    .ylabel {
      position: absolute;
      left: 5px;
      transform: translateY(50%);
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
    }
    .axis {
      position: relative;
      height: 16px;
      margin-top: 2px;
      margin-right: 32px; /* align the 0–100% range with .plot, not .yaxis */
    }
    .axis span {
      position: absolute;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
    }
    .axis span.day {
      font-weight: 800;
      text-transform: uppercase;
    }
  `;
}

registerCard({
  type: "eink-price-card",
  name: "E-ink Price Card",
  description: "Electricity price bars (öre/kWh) coloured by fixed thresholds, for the e-ink panel.",
});
