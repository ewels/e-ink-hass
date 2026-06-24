/**
 * The reTerminal E1002 panel can only show six inks (Spectra 6). These must be
 * the EXACT hex values in Puppet's `colors` palette, so solid card colours map
 * 1:1 and render crisp (no dithering). Greys (deliberate, e.g. weather bar fills
 * and icons) are NOT in the palette, so they dither to a black/white halftone
 * that reads as grey on the panel — which is what we want there.
 */
export const INK = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  yellow: "#ffff00",
  blue: "#0000ff",
  green: "#00ff00",
} as const;

/** Price-level → ink, matching the reference price charts. */
export const LEVEL_INK = {
  low: INK.green,
  mid: INK.yellow,
  high: INK.red,
} as const;
