import { LitElement, html, css, nothing, unsafeCSS } from "lit";
import type { PropertyValues } from "lit";
import type { HomeAssistant, CalendarEvent } from "../shared/hass.js";
import { registerCard } from "../shared/hass.js";
import { INK } from "../shared/palette.js";

interface CalendarSource {
  entity: string;
  color?: string; // CSS colour (palette ink); defaults to ink
}

interface CalendarCardConfig {
  entities?: Array<string | CalendarSource>;
  title?: string;
  days?: number;
}

const startOfDay = (d: Date): Date => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const fmtTime = (iso: string): string =>
  new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

/**
 * Day-grouped calendar agenda for the e-ink panel, modelled on the reference:
 * a date block per day with a coloured side bar per event (coloured by source
 * calendar). Reads events at runtime via HA's calendars REST endpoint.
 */
export class EinkCalendarCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _events: { state: true },
  };

  hass?: HomeAssistant;
  private _config: CalendarCardConfig = {};
  private _events: CalendarEvent[] = [];
  private _loaded = false;

  setConfig(config: CalendarCardConfig): void {
    this._config = { title: "Calendar", days: 3, entities: [], ...config };
  }

  getCardSize(): number {
    return 6;
  }

  private sources(): CalendarSource[] {
    return (this._config.entities ?? []).map((e) =>
      typeof e === "string" ? { entity: e } : e,
    );
  }

  willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass && !this._loaded) {
      this._loaded = true;
      void this._loadEvents();
    }
  }

  private async _loadEvents(): Promise<void> {
    const start = startOfDay(new Date());
    const end = new Date(start.getTime() + (this._config.days ?? 3) * 86400000);
    const qs = `start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`;
    try {
      const lists = await Promise.all(
        this.sources().map(async (src) => {
          const raw: any[] = (await this.hass!.callApi!("GET", `calendars/${src.entity}?${qs}`)) ?? [];
          return raw.map((e): CalendarEvent => ({
            start: e.start?.dateTime ?? e.start?.date,
            end: e.end?.dateTime ?? e.end?.date,
            title: e.summary ?? "(busy)",
            location: e.location,
            allDay: Boolean(e.start?.date),
            color: src.color ?? "var(--ink)",
          }));
        }),
      );
      this._events = lists.flat().sort((a, b) => a.start.localeCompare(b.start));
    } catch {
      /* leave empty */
    }
  }

  render() {
    const days = this._config.days ?? 3;
    const today = startOfDay(new Date());

    return html`
      <div class="card">
        <div class="title">${this._config.title}</div>
        <div class="days">
          ${Array.from({ length: days }, (_, i) => {
            const day = new Date(today.getTime() + i * 86400000);
            const dayEvents = this._events.filter(
              (e) => startOfDay(new Date(e.start)).getTime() === day.getTime(),
            );
            return this.renderDay(day, dayEvents);
          })}
        </div>
      </div>
    `;
  }

  private renderDay(day: Date, events: CalendarEvent[]) {
    return html`
      <div class="day">
        <div class="date">
          <span class="dow">${day.toLocaleDateString("en-GB", { weekday: "short" })}</span>
          <span class="num">${day.getDate()}</span>
          <span class="mon">${day.toLocaleDateString("en-GB", { month: "short" })}</span>
        </div>
        <div class="events">
          ${events.length === 0
            ? html`<div class="event empty"><span class="txt muted">No events</span></div>`
            : events.map(
                (e) => html`
                  <div class="event">
                    <span class="rail" style="background:${e.color}"></span>
                    <span class="txt">
                      <span class="etitle">${e.title}</span>
                      ${e.allDay
                        ? nothing
                        : html`<span class="etime">${fmtTime(e.start)}</span>`}
                      ${e.location
                        ? html`<span class="eloc">${e.location}</span>`
                        : nothing}
                    </span>
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
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px 16px;
    }
    .title {
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .days {
      display: flex;
      flex-direction: column;
    }
    .day {
      display: flex;
      gap: 14px;
      padding: 10px 0;
      border-top: 2px solid var(--ink);
    }
    .day:first-child {
      border-top: none;
    }
    .date {
      width: 46px;
      flex: 0 0 46px;
      text-align: center;
      line-height: 1.05;
    }
    .date .dow {
      display: block;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .date .num {
      display: block;
      font-size: 30px;
      font-weight: 800;
    }
    .date .mon {
      display: block;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .events {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 7px;
      justify-content: center;
    }
    .event {
      display: flex;
      gap: 9px;
      align-items: stretch;
    }
    .rail {
      flex: 0 0 4px;
      border-radius: 2px;
    }
    .event.empty .rail {
      display: none;
    }
    .txt {
      display: flex;
      flex-direction: column;
    }
    .etitle {
      font-size: 18px;
      font-weight: 700;
    }
    .etime,
    .eloc {
      font-size: 13px;
      font-weight: 700;
    }
    .eloc {
      color: var(--ink);
      opacity: 0.85;
    }
    .muted {
      font-size: 16px;
      font-style: italic;
    }
  `;
}

registerCard({
  type: "eink-calendar-card",
  name: "E-ink Calendar Card",
  description: "Day-grouped calendar agenda with colour-coded events, for the e-ink panel.",
});
