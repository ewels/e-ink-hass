import { LitElement, html, css, unsafeCSS } from "lit";
import type { PropertyValues } from "lit";
import type { HomeAssistant, LovelaceCard } from "../shared/hass.js";
import { registerCard } from "../shared/hass.js";
import { INK } from "../shared/palette.js";

interface CardConfig {
  type?: string;
  [key: string]: unknown;
}

interface PanelCardConfig {
  weather?: CardConfig;
  conditions?: CardConfig;
  price?: CardConfig;
  calendar?: CardConfig;
}

interface SlotSpec {
  slot: string;
  cfg?: CardConfig;
  defaultType: string;
}

/**
 * Composes the dashboard cards into the fixed 800×480 panel layout — weather
 * top-left, an optional conditions strip, price bottom-left, calendar right.
 * The Lovelace view is then just this one card and Puppet screenshots it at
 * panel resolution.
 *
 * Each slot takes a normal card config, so you can drop in community cards
 * (e.g. `custom:clock-weather-card` for weather) as well as the bundled custom
 * cards. Children are built via HA's `loadCardHelpers` (the standard way to
 * nest cards); the dev harness provides a matching shim.
 */
export class EinkPanelCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config: PanelCardConfig = {};
  private _children: LovelaceCard[] = [];
  private _buildToken = 0;

  setConfig(config: PanelCardConfig): void {
    this._config = config ?? {};
  }

  getCardSize(): number {
    return 10;
  }

  updated(changed: PropertyValues): void {
    if (changed.has("_config")) {
      this._buildToken += 1;
      void this._build(this._buildToken);
    } else if (changed.has("hass")) {
      this._forwardHass();
    }
  }

  private async _build(token: number): Promise<void> {
    const specs: SlotSpec[] = [
      { slot: "weather", cfg: this._config.weather, defaultType: "custom:eink-weather-card" },
      { slot: "price", cfg: this._config.price, defaultType: "custom:eink-price-card" },
      { slot: "calendar", cfg: this._config.calendar, defaultType: "custom:eink-calendar-card" },
    ];
    if (this._config.conditions) {
      specs.splice(1, 0, {
        slot: "conditions",
        cfg: this._config.conditions,
        defaultType: "custom:eink-conditions-card",
      });
    }

    const helpers = window.loadCardHelpers ? await window.loadCardHelpers() : null;
    if (token !== this._buildToken) return; // a newer build superseded this one

    this._children = [];
    for (const { slot, cfg, defaultType } of specs) {
      const host = this.renderRoot.querySelector<HTMLElement>(`.${slot}`);
      if (!host) continue;
      const config = { type: defaultType, ...(cfg ?? {}) };
      const el = helpers
        ? helpers.createCardElement(config)
        : this._fallbackCard(config);
      host.replaceChildren(el);
      this._children.push(el);
    }
    this._forwardHass();
  }

  /** Used only if loadCardHelpers is unavailable (it always is in HA). */
  private _fallbackCard(config: CardConfig): LovelaceCard {
    const el = document.createElement(String(config.type).replace(/^custom:/, "")) as LovelaceCard;
    el.setConfig?.(config);
    return el;
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
          <div class="slot conditions"></div>
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
      border-top: 2px solid var(--ink);
    }
    .slot.conditions:empty {
      display: none;
    }
    .slot.conditions:not(:empty) {
      border-top: 2px solid var(--ink);
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
