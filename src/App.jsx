import React from "react";
import { Container } from "@mui/material";
import Profile from "./components/Profile";
import PixelHeader from "./components/PixelHeader";

// Deterministic pseudo-random so the accent cells are stable across renders.
const hash = (n) => {
  const x = Math.sin(n * 999.7) * 43758.5453;
  return x - Math.floor(x);
};

const PURPLE = "#7c5cff";
const CYAN = "#22d3ee";
const MAGENTA = "#ff4d8d";
const AMBER = "#ffb020";
const GREEN = "#2ee6a6";
const ACCENT_POOL = [PURPLE, PURPLE, PURPLE, CYAN, MAGENTA, AMBER, GREEN]; // weighted toward violet

function GridAccents() {
  // "Server rack" static blocks — randomly colored across the full accent
  // palette, weighted toward violet so it still reads as one coherent
  // wash rather than confetti. Cells in the upper ~55% of the page
  // twinkle gently (randomized duration/delay so nothing syncs up);
  // cells lower down settle into a fixed, more-faded opacity — the
  // animation itself fades out toward the bottom, same as the color mask.
  const cells = Array.from({ length: 34 }).map((_, i) => {
    const top = hash(i * 11.3) * 100;
    const twinkles = top < 55;
    return {
      left: `${(hash(i * 7.7) * 100).toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
      color: ACCENT_POOL[Math.floor(hash(i * 8.8) * ACCENT_POOL.length)],
      opacity: 0.03 + hash(i * 2.9) * 0.1,
      twinkles,
      dur: (3.5 + hash(i * 4.1) * 4.5).toFixed(2), // 3.5s–8s, varied per cell
      delay: (hash(i * 6.3) * 5).toFixed(2), // 0–5s, so cells don't sync
    };
  });

  return (
    <div className="gridAccents" aria-hidden>
      {cells.map((c, i) => (
        <span
          key={i}
          className={c.twinkles ? "gridCell gridCell--twinkle" : "gridCell gridCell--static"}
          style={{
            left: c.left,
            top: c.top,
            background: `radial-gradient(circle, ${c.color}cc 0%, ${c.color}44 45%, transparent 75%)`,
            "--cellOpacity": c.opacity,
            "--twinkleDur": `${c.dur}s`,
            "--twinkleDelay": `${c.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="appRoot">
      <div className="gridFade" aria-hidden />
      <GridAccents />
      <div className="vignette" aria-hidden />
      <div className="grainLayer" aria-hidden />
      <div className="crtScanlines" aria-hidden />

      {/* ✅ Use PixelHeader */}
      <PixelHeader />

      <Container maxWidth="xl" className="pageWrap">
        <Profile />
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600;700&family=Press+Start+2P&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; }

        /* =====================================================
           Unified animation system — every pulse, blink, hover,
           and ambient motion across the site pulls from this same
           easing curve and duration scale, so nothing feels like
           it's moving on its own clock.
           ===================================================== */
        :root {
          --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
          --ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);
          --dur-fast: 140ms;
          --dur-med: 220ms;
          --dur-pulse: 1.8s;
          --dur-blink: 1s;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }

        html, body {
          margin: 0;
          padding: 0;
          min-height: 100%;
          height: auto;
          overflow-x: hidden;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: #f1f3fb;
          background: #05070a;
          background-image:
            radial-gradient(900px 500px at 50% -10%, rgba(124,92,255,0.10), transparent 65%),
            radial-gradient(700px 500px at 85% 55%, rgba(34,211,238,0.05), transparent 70%),
            radial-gradient(800px 550px at 10% 85%, rgba(255,77,141,0.05), transparent 70%),
            radial-gradient(650px 480px at 92% 12%, rgba(255,176,32,0.045), transparent 68%);
          background-repeat: no-repeat;
        }

        #root { min-height: 100vh; }

        .appRoot {
          min-height: 100vh;
          position: relative;
        }

        /* Grid that's brightest near the top and fades out as you
           scroll down the page. Static — no pulse. */
        .gridFade {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(124,92,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,92,255,0.09) 1px, transparent 1px);
          background-size: 32px 32px;
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 15%, transparent 70%);
          mask-image: linear-gradient(to bottom, black 0%, black 15%, transparent 70%);
          opacity: 0.65;
        }

        /* Scattered colored grid cells — same fade mask as .gridFade
           so they dim toward the bottom too. Static, fixed opacity. */
        .gridAccents {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 15%, transparent 70%);
          mask-image: linear-gradient(to bottom, black 0%, black 15%, transparent 70%);
        }
        .gridCell {
          position: absolute;
          width: 64px;
          height: 64px;
          transform: translate(-50%, -50%);
          filter: blur(1px);
        }
        /* Upper-page cells: gentle opacity breathing, randomized per-cell
           duration/delay (set inline) so nothing pulses in sync. */
        .gridCell--twinkle {
          opacity: var(--cellOpacity, 0.1);
          animation: gridTwinkle var(--twinkleDur, 5s) var(--twinkleDelay, 0s) var(--ease-standard) infinite;
        }
        /* Lower-page cells: no animation, settled into a fixed, more-faded
           opacity — the twinkle effect itself fades out toward the bottom,
           matching the existing color/grid fade mask. */
        .gridCell--static {
          opacity: calc(var(--cellOpacity, 0.1) * 0.5);
        }
        @keyframes gridTwinkle {
          0%, 100% { opacity: calc(var(--cellOpacity) * 0.3); }
          50% { opacity: var(--cellOpacity); }
        }

        /* Soft vignette — darkens the corners so attention pulls toward
           the terminal windows in the center of the page rather than
           the ambient background competing for focus. Fixed to the
           viewport, static, very low intensity. */
        .vignette {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(120% 90% at 50% 42%, transparent 55%, rgba(0,0,0,0.35) 100%);
        }

        /* Film-grain texture — the detail that actually sells the CRT
           terminal feel; flat gradients alone read as a generic dark
           web app. Extremely low opacity, static, no animation. */
        .grainLayer {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>\
<rect width='100%' height='100%' filter='url(%23n)'/>\
</svg>");
          background-size: 140px 140px;
        }

        /* CRT scanlines, fixed to the viewport (not the page) so it
           reads as glass over the screen rather than part of the
           content. Static — no flicker. */
        .crtScanlines {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.14) 0px,
            rgba(0,0,0,0.14) 1px,
            transparent 1px,
            transparent 3px
          );
          mix-blend-mode: overlay;
          opacity: 0.55;
        }

        .pageWrap {
          position: relative;
          z-index: 1;
          padding-top: 90px; /* ✅ room for the nav bar */
          padding-bottom: 90px;
          min-height: 100vh;
        }

        ::selection {
          background: rgba(124,92,255,0.35);
          color: #f1f3fb;
        }
      `}</style>
    </div>
  );
}