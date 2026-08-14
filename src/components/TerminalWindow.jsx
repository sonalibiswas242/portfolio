// src/components/TerminalWindow.js
// Hacker-terminal window: classic macOS-style traffic-light title
// bar, dark panel, neon accent border glow, optional "$ command"
// flavor line with a live blinking cursor.
import React from "react";
import { Box, Typography } from "@mui/material";
import { fonts, colors, textGlow, neonBox } from "../theme";

const { mono } = fonts;

export default function TerminalWindow({
  title,
  command,
  accent = colors.neonGreen,
  maxWidth = 1300,
  dataAos = "fade-up",
  bordered = true,
  children,
  id,
}) {
  return (
    <Box
      id={id}
      data-aos={dataAos}
      sx={{
        width: "100%",
        maxWidth,
        mx: "auto",
        borderRadius: "12px",
        background: colors.bgPanel,
        overflow: "hidden",
        transition: "box-shadow 220ms ease, transform 220ms ease",
        ...(bordered
          ? {
              border: `1px solid ${accent}40`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 14px 34px rgba(0,0,0,0.5), ${neonBox(accent, 14, 20)}`,
              "&:hover": {
                transform: "translateY(-2px)",
                borderColor: `${accent}70`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.5), ${neonBox(accent, 18, 28)}`,
              },
            }
          : { border: "none", boxShadow: "none" }),
      }}
    >
      {/* Title bar */}
      <Box
        sx={{
          height: 40,
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.6,
          background: colors.bgPanelAlt,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Box sx={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56" }} />
        <Box sx={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e" }} />
        <Box sx={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f" }} />

        {title ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.7, ml: 1.2 }}>
            <Box
              component="span"
              sx={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: accent,
                opacity: 0.85,
                lineHeight: 1,
              }}
            >
              *
            </Box>
            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 700,
                fontSize: "0.78rem",
                color: colors.textDim,
                letterSpacing: "0.02em",
              }}
            >
              {title}
            </Typography>
          </Box>
        ) : null}

        <Box sx={{ flex: 1 }} />

        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: accent,
            boxShadow: `0 0 6px 2px ${accent}88`,
            animation: "termWindowLed var(--dur-pulse, 1.8s) var(--ease-standard, ease-in-out) infinite",
            "@keyframes termWindowLed": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.35 },
            },
          }}
        />
      </Box>

      <Box sx={{ p: { xs: 2.4, sm: 3, md: 4 } }}>
        {command ? (
          <Typography
            sx={{
              mb: 1.8,
              fontFamily: mono,
              fontWeight: 600,
              fontSize: "0.82rem",
              color: colors.textDim,
              display: "flex",
              alignItems: "center",
              gap: 0.7,
            }}
          >
            <Box component="span" sx={{ color: accent, fontWeight: 900, textShadow: textGlow(accent, 5) }}>
              $
            </Box>
            {command}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: "0.5em",
                height: "0.95em",
                background: accent,
                animation: "termCursorBlink var(--dur-blink, 1s) steps(2, end) infinite",
                "@keyframes termCursorBlink": {
                  "0%, 48%": { opacity: 1 },
                  "50%, 100%": { opacity: 0 },
                },
              }}
            />
          </Typography>
        ) : null}
        {children}
      </Box>
    </Box>
  );
}