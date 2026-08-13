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

function GridAccents() {
  // "Server rack" static blocks — narrow violet range with a rare
  // cyan fleck, opacity kept low (0.03–0.12) so it reads as texture
  // behind the terminal windows, not noise. Spread across the full
  // width via percentages.
  const cells = Array.from({ length: 30 }).map((_, i) => ({
    left: `${(hash(i * 7.7) * 100).toFixed(2)}%`,
    top: `${(hash(i * 11.3) * 100).toFixed(2)}%`,
    color: hash(i * 8.8) < 0.85 ? PURPLE : CYAN,
    opacity: 0.03 + hash(i * 2.9) * 0.09,
  }));

  return (
    <div className="gridAccents" aria-hidden>
      {cells.map((c, i) => (
        <span
          key={i}
          className="gridCell"
          style={{
            left: c.left,
            top: c.top,
            background: `radial-gradient(circle, ${c.color}cc 0%, ${c.color}44 45%, transparent 75%)`,
            "--cellOpacity": c.opacity,
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
      <div className="crtScanlines" aria-hidden />

      {/* ✅ Use PixelHeader */}
      <PixelHeader />

      <Container maxWidth="xl" className="pageWrap">
        <Profile />
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600;700&family=Press+Start+2P&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; }

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
            radial-gradient(800px 550px at 10% 85%, rgba(255,77,141,0.05), transparent 70%);
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
          opacity: var(--cellOpacity, 0.12);
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
            rgba(0,0,0,0.12) 0px,
            rgba(0,0,0,0.12) 1px,
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
