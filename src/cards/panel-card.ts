import { LitElement, html, css, unsafeCSS } from "lit";
import type { PropertyValues } from "lit";
import type { HomeAssistant } from "../shared/hass.js";
import { registerCard } from "../shared/hass.js";
import { INK } from "../shared/palette.js";

interface PanelCardConfig {
  weather?: Record<string, unknown>;
  price?: Record<string, unknown>;
  calendar?: Record<string, unknown>;
}

interface ConfigurableCard extends HTMLElement {
  setConfig(config: unknown): void;
  hass?: HomeAssistant;
}

/**
 * Composes the three e-ink cards into the fixed 800×480 panel layout — weather
 * top-left, price bottom-left, calendar right — with the column/row dividers.
 * The Lovelace view is then just this one card, and Puppet screenshots it at
 * exactly panel resolution. Child cards are created imperatively so their
 * setConfig()/hass plumbing matches how Home Assistant drives them.
 */
export class EinkPanelCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config: PanelCardConfig = {};
  private _children: ConfigurableCard[] = [];

  setConfig(config: PanelCardConfig): void {
    this._config = config ?? {};
  }

  getCardSize(): number {
    return 10;
  }

  // Rebuild children when the config changes (it may arrive after the first
  // render), then keep forwarding hass. Children are created imperatively so
  // their setConfig()/hass plumbing matches how Home Assistant drives them.
  updated(changed: PropertyValues): void {
    if (changed.has("_config")) this._build();
    if (this.hass) this._forwardHass();
  }

  private _build(): void {
    const specs: Array<[string, string, unknown]> = [
      ["eink-weather-card", "weather", this._config.weather],
      ["eink-price-card", "price", { title: "Electricity", ...this._config.price }],
      ["eink-calendar-card", "calendar", this._config.calendar],
    ];
    this._children = [];
    for (const [tag, slot, cfg] of specs) {
      const host = this.renderRoot.querySelector<HTMLElement>(`.${slot}`);
      if (!host) return; // slots not rendered yet
      host.replaceChildren();
      const el = document.createElement(tag) as ConfigurableCard;
      el.setConfig(cfg ?? {});
      host.appendChild(el);
      this._children.push(el);
    }
  }

  private _forwardHass(): void {
    if (!this.hass) return;
    for (const child of this._children) child.hass = this.hass;
  }

  render() {
    return html`
      <div class="panel">
        <div class="left">
          <div class="slot weather"></div>
          <div class="slot price"></div>
        </div>
        <div class="right">
          <div class="slot calendar"></div>
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
    .panel {
      width: 800px;
      height: 480px;
      background: var(--paper);
      display: flex;
      overflow: hidden;
    }
    .left {
      flex: 0 0 57%;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .left .price {
      margin-top: auto; /* pin the price chart to the bottom */
    }
    .right {
      flex: 1 1 auto;
      min-width: 0;
      border-left: 2px solid var(--ink);
    }
    .slot {
      min-width: 0;
    }
  `;
}

registerCard({
  type: "eink-panel-card",
  name: "E-ink Panel",
  description: "Composes the weather, price and calendar cards into the 800×480 e-ink layout.",
});
