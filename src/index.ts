import { EinkPriceCard } from "./cards/price-chart-card.js";
import { EinkWeatherCard } from "./cards/weather-card.js";
import { EinkCalendarCard } from "./cards/calendar-card.js";
import { EinkConditionsCard } from "./cards/conditions-card.js";
import { EinkPanelCard } from "./cards/panel-card.js";

const CARDS: Array<[string, CustomElementConstructor]> = [
  ["eink-price-card", EinkPriceCard],
  ["eink-weather-card", EinkWeatherCard],
  ["eink-calendar-card", EinkCalendarCard],
  ["eink-conditions-card", EinkConditionsCard],
  ["eink-panel-card", EinkPanelCard],
];

for (const [tag, ctor] of CARDS) {
  if (!customElements.get(tag)) customElements.define(tag, ctor);
}

console.info(
  "%c eink-dashboard-cards %c 0.1.0 ",
  "background:#0000ff;color:#fff;font-weight:700",
  "background:#008000;color:#fff",
);
