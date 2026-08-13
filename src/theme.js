// src/theme.js
// Dark arcade theme tokens — deep navy panels, one disciplined
// primary accent (violet) for structure, secondary neons used only
// as small badge colors. Flat "comic panel" offset shadows, no blur.

export const fonts = {
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  pixel: '"Press Start 2P", system-ui',
  // Headings/subheadings across every section — a sharper, more
  // deliberate monospace than JetBrains Mono, still code-native so it
  // doesn't fight the terminal theme the way a humanist sans would.
  display: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace',
};

export const colors = {
  bgDeep: "#0b0e14", // page background base
  bgPanel: "#12161f", // card background
  bgPanelAlt: "#1a1f2b", // nested panel tone
  border: "#2c3446", // ink outline (visible on dark)
  borderBright: "#4a5670", // stronger outline (modal)
  neonGreen: "#7c5cff", // PRIMARY accent — violet (structure, CTAs, nav)
  neonGreenDim: "#6647e0",
  neonCyan: "#22d3ee", // secondary accent (badges only)
  neonMagenta: "#ff4d8d", // secondary accent (badges only)
  neonAmber: "#ffb648", // secondary accent (badges only)
  textPrimary: "#f1f3fb", // main text
  textDim: "#8a93a8", // secondary text
};

// Flat "comic panel" offset shadow — no blur. Use for boxShadow
// (cards, buttons) where an offset duplicate reads as a shadow.
export const glow = (color, spread = 10) => {
  const px = Math.max(2, Math.round(spread * 0.35));
  return `${px}px ${px}px 0 ${color}`;
};

// True blurred neon glow, centered (no offset) — use for textShadow.
// An offset shadow on text just duplicates the glyph and looks broken;
// this reads as an actual glowing-sign halo instead.
export const textGlow = (color, blur = 8) =>
  `0 0 ${blur}px ${color}, 0 0 ${blur * 2}px ${color}99`;

export const hardShadow = (px, color) => `${px}px ${px}px 0 ${color}`;

// Comic-panel offset shadow + a soft colored halo behind it —
// crisp card edge plus an actual neon glow, for the elements that
// should read as "lit up" (primary CTAs, the hero portrait, cards).
export const neonBox = (color, spread = 10, blur = 16) =>
  `${glow(color, spread)}, 0 0 ${blur}px ${color}55`;
