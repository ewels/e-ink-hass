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
}

/** Register a card in HA's "Add card" picker. */
export interface CustomCard {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
}

declare global {
  interface Window {
    customCards?: CustomCard[];
  }
}

export function registerCard(card: CustomCard): void {
  window.customCards = window.customCards ?? [];
  window.customCards.push({ preview: true, ...card });
}
