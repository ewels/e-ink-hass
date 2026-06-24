/** Minimal shape of the Home Assistant object passed to a Lovelace card. */
export interface HassEntity {
  entity_id?: string;
  state: string;
  attributes: Record<string, any>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  /** Locale/clock info HA provides; optional here. */
  locale?: { language: string };
  /** REST passthrough HA's frontend provides; also stubbed by the dev harness. */
  callApi?: (method: string, path: string, parameters?: unknown) => Promise<any>;
}

/** A daily weather forecast entry (from weather.get_forecasts). */
export interface WeatherDay {
  date: string; // ISO datetime
  condition: string;
  tempHigh: number;
  tempLow: number;
  precipitation?: number;
  precipProbability?: number;
}

/** A calendar event as returned by GET /api/calendars/<id>. */
export interface CalendarEvent {
  start: string; // ISO
  end?: string;
  title: string;
  allDay: boolean;
  location?: string;
  color: string; // assigned from the card's calendar config
}

/** Register a card in HA's "Add card" picker. */
export interface CustomCard {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
}

/** An embeddable card element (custom or built-in). */
export interface LovelaceCard extends HTMLElement {
  setConfig?: (config: unknown) => void;
  hass?: HomeAssistant;
}

declare global {
  interface Window {
    customCards?: CustomCard[];
    /** HA frontend helper for building card elements by config (incl. `custom:`). */
    loadCardHelpers?: () => Promise<{ createCardElement: (config: unknown) => LovelaceCard }>;
  }
}

export function registerCard(card: CustomCard): void {
  window.customCards = window.customCards ?? [];
  window.customCards.push({ preview: true, ...card });
}
