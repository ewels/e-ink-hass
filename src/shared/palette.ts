/**
 * The reTerminal E1002 panel can only show six inks (Spectra 6). Puppet dithers
 * the screenshot down to these, so pin card colours to them — anything else
 * becomes a halftone approximation. Greys are fine: they dither to a black/white
 * halftone that reads as grey on the panel (as in the reference designs).
 */
export const INK = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  yellow: "#ffd400", // slightly deepened so it survives dithering as "yellow", not near-white
  blue: "#0000ff",
  green: "#008000",
} as const;

/** Price-level → ink, matching the reference price charts. */
export const LEVEL_INK = {
  low: INK.green,
  mid: INK.yellow,
  high: INK.red,
} as const;
