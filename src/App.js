import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Profile from "./components/Profile";
import PixelHeader from "./components/PixelHeader";

/* =========================================================
   GREEN PIXEL HEATMAP BACKGROUND (VISIBLE + SCROLL SAFE)
   ========================================================= */
function GreenPixelHeatmap() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const CELL = 26;
    const GRID_ALPHA = 0.035;
    const ENERGY_DENSITY = 0.06;

    const BASE_ALPHA = 0.12;
    const PULSE_ALPHA = 0.14;

    const GREENS = [
      [14, 92, 62],
      [20, 120, 78],
      [38, 160, 105],
      [70, 200, 145],
    ];

    const pick = (v) =>
      v < 0.35 ? GREENS[0] : v < 0.6 ? GREENS[1] : v < 0.85 ? GREENS[2] : GREENS[3];

    const hash = (x, y) => {
      let n = x * 374761393 + y * 668265263;
      n = (n ^ (n >> 13)) * 1274126177;
      return ((n ^ (n >> 16)) >>> 0) / 4294967296;
    };

    let W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      dpr = 1;

    let energy = [];

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = window.innerWidth;
      H = window.innerHeight;

      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(W / CELL);
      rows = Math.ceil(H / CELL);

      energy = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (hash(x, y) < ENERGY_DENSITY) {
            energy.push({
              x,
              y,
              color: pick(hash(x + 7, y + 11)),
              speed: 0.55 + hash(x + 19, y + 23) * 1.1,
              phase: hash(x + 31, y + 41) * Math.PI * 2,
            });
          }
        }
      }
    };

    const drawGrid = () => {
      ctx.save();
      ctx.globalAlpha = GRID_ALPHA;
      ctx.strokeStyle = "rgba(45,42,38,1)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * CELL + 0.5, 0);
        ctx.lineTo(x * CELL + 0.5, H);
        ctx.stroke();
      }

      for (let y = 0; y <= rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * CELL + 0.5);
        ctx.lineTo(W, y * CELL + 0.5);
        ctx.stroke();
      }
      ctx.restore();
    };

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    const frame = (t) => {
      const time = t / 1000;

      ctx.fillStyle = "rgba(255,252,242,0.55)";
      ctx.fillRect(0, 0, W, H);

      drawGrid();

      for (let i = 0; i < energy.length; i++) {
        const e = energy[i];
        const pulse = 0.5 + 0.5 * Math.sin(time * e.speed + e.phase);
        const a = BASE_ALPHA + pulse * PULSE_ALPHA;
        const [r, g, b] = e.color;

        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillRect(e.x * CELL, e.y * CELL, CELL, CELL);
      }

      requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduce?.matches) {
      ctx.fillStyle = "rgba(255,252,242,0.55)";
      ctx.fillRect(0, 0, W, H);
      drawGrid();
      for (let i = 0; i < energy.length; i++) {
        const e = energy[i];
        const [r, g, b] = e.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${BASE_ALPHA})`;
        ctx.fillRect(e.x * CELL, e.y * CELL, CELL, CELL);
      }
    } else {
      requestAnimationFrame(frame);
    }

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default function App() {
  return (
    <div className="appRoot">
      <GreenPixelHeatmap />

      {/* ✅ Use PixelHeader */}
      <PixelHeader />

      <Container maxWidth="lg" className="pageWrap">
        <Profile />
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Press+Start+2P&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

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
          font-family: 'Poppins', sans-serif;
          color: #2d2a26;
          background:
            radial-gradient(1200px 700px at 12% -10%, rgba(20,120,80,0.12), transparent 60%),
            radial-gradient(900px 600px at 92% 12%, rgba(70,200,145,0.10), transparent 60%),
            radial-gradient(800px 600px at 55% 110%, rgba(20,120,80,0.08), transparent 65%),
            linear-gradient(180deg, #fffcf4 0%, #f3f1ea 100%);
        }

        #root { min-height: 100vh; }

        .appRoot {
          min-height: 100vh;
          position: relative;
          overflow: visible;
        }

        .pageWrap {
          position: relative;
          z-index: 1;
          padding-top: 110px; /* ✅ room for PixelHeader */
          padding-bottom: 90px;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
