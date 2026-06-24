import { LitElement, html, css, unsafeCSS } from "lit";
import type { HomeAssistant } from "../shared/hass.js";
import { registerCard } from "../shared/hass.js";
import { INK } from "../shared/palette.js";

interface ConditionItem {
  entity: string;
  label: string;
  /** Decimal places for numeric states (default 0). */
  decimals?: number;
}

interface ConditionsCardConfig {
  items?: ConditionItem[];
}

/**
 * A compact strip of sensor tiles (e.g. indoor/outdoor temperature, CO₂) for
 * the e-ink panel — fills the space between the weather and price sections.
 */
export class EinkConditionsCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config: ConditionsCardConfig = {};

  setConfig(config: ConditionsCardConfig): void {
    this._config = { items: [], ...config };
  }

  getCardSize(): number {
    return 1;
  }

  private value(item: ConditionItem): { value: string; unit: string } {
    const ent = this.hass?.states[item.entity];
    if (!ent || ent.state === "unavailable" || ent.state === "unknown") {
      return { value: "—", unit: "" };
    }
    const num = Number(ent.state);
    const value = Number.isFinite(num) ? num.toFixed(item.decimals ?? 0) : ent.state;
    return { value, unit: ent.attributes["unit_of_measurement"] ?? "" };
  }

  render() {
    const items = this._config.items ?? [];
    return html`
      <div class="card">
        ${items.map((item) => {
          const { value, unit } = this.value(item);
          return html`
            <div class="tile">
              <div class="val">${value}<span class="unit">${unit}</span></div>
              <div class="lbl">${item.label}</div>
            </div>
          `;
        })}
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
      display: flex;
      justify-content: space-between;
      gap: 8px;
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 10px 16px;
    }
    .tile {
      flex: 1 1 0;
      min-width: 0;
    }
    .val {
      font-size: 30px;
      font-weight: 800;
      line-height: 1;
    }
    .unit {
      font-size: 13px;
      font-weight: 700;
      margin-left: 2px;
    }
    .lbl {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-top: 4px;
    }
  `;
}

registerCard({
  type: "eink-conditions-card",
  name: "E-ink Conditions Card",
  description: "Compact strip of sensor tiles (temperature, CO₂, …) for the e-ink panel.",
});
