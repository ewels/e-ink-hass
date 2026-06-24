import { EinkPriceCard } from "./cards/price-chart-card.js";

const CARDS: Array<[string, CustomElementConstructor]> = [["eink-price-card", EinkPriceCard]];

for (const [tag, ctor] of CARDS) {
  if (!customElements.get(tag)) customElements.define(tag, ctor);
}

console.info(
  "%c eink-dashboard-cards %c 0.1.0 ",
  "background:#0000ff;color:#fff;font-weight:700",
  "background:#008000;color:#fff",
);
