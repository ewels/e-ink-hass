import { svg, type SVGTemplateResult } from "lit";

/**
 * Minimal weather icons for the e-ink panel — solid shapes in the panel inks
 * (black cloud/moon, yellow sun, blue rain/snow) so they survive dithering.
 * Drawn in a 64×48 viewBox; size is set by the host via width/height.
 */

const cloud = (fill = "var(--ink)") => svg`
  <g fill=${fill}>
    <circle cx="24" cy="32" r="11" />
    <circle cx="37" cy="24" r="14" />
    <circle cx="49" cy="32" r="10" />
    <rect x="22" y="30" width="29" height="12" rx="3" />
  </g>`;

const sun = (cx = 32, cy = 22, r = 11) => svg`
  <g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const rad = (a * Math.PI) / 180;
      return svg`<line
        x1=${cx + Math.cos(rad) * (r + 4)} y1=${cy + Math.sin(rad) * (r + 4)}
        x2=${cx + Math.cos(rad) * (r + 9)} y2=${cy + Math.sin(rad) * (r + 9)} />`;
    })}
  </g>
  <circle cx=${cx} cy=${cy} r=${r} fill="var(--sun)" />`;

const rainLines = svg`
  <g stroke="var(--rain)" stroke-width="3" stroke-linecap="round">
    <line x1="24" y1="42" x2="20" y2="48" />
    <line x1="34" y1="42" x2="30" y2="48" />
    <line x1="44" y1="42" x2="40" y2="48" />
  </g>`;

const snowDots = svg`
  <g fill="var(--rain)">
    <circle cx="24" cy="45" r="2.5" />
    <circle cx="34" cy="46" r="2.5" />
    <circle cx="44" cy="45" r="2.5" />
  </g>`;

const ICONS: Record<string, () => SVGTemplateResult> = {
  sunny: () => sun(32, 24, 13),
  "clear-night": () => svg`<path
      d="M44 24a16 16 0 1 1-16-16 13 13 0 0 0 16 16z" fill="var(--ink)" />`,
  partlycloudy: () => svg`${sun(22, 16, 9)}${cloud()}`,
  cloudy: () => cloud(),
  fog: () => svg`
    ${cloud("var(--ink)")}
    <g stroke="var(--paper)" stroke-width="2.5">
      <line x1="26" y1="30" x2="48" y2="30" /><line x1="26" y1="36" x2="48" y2="36" />
    </g>`,
  rainy: () => svg`${cloud()}${rainLines}`,
  pouring: () => svg`${cloud()}${rainLines}`,
  snowy: () => svg`${cloud()}${snowDots}`,
  "snowy-rainy": () => svg`${cloud()}${snowDots}`,
  lightning: () => svg`${cloud()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,
  "lightning-rainy": () =>
    svg`${cloud()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,
  windy: () => svg`
    <g stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M10 20h30a6 6 0 1 0-6-6" /><path d="M10 30h40a6 6 0 1 1-6 6" />
    </g>`,
};

/** Return the icon for a HA weather condition slug (falls back to cloud). */
export function weatherIcon(condition: string): SVGTemplateResult {
  return (ICONS[condition] ?? cloud)();
}
