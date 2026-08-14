// src/components/MoreSection.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { fonts, colors } from "../theme";
import TerminalWindow from "./TerminalWindow";

const { mono, display } = fonts;

function Item({ text }) {
  return (
    <Box
      sx={{
        px: 1.3,
        py: 1.0,
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        background: colors.bgPanelAlt,
        fontFamily: mono,
        fontWeight: 600,
        fontSize: { xs: "0.86rem", md: "0.9rem" },
        color: colors.textPrimary,
        opacity: 0.92,
        display: "flex",
        alignItems: "center",
        gap: 0.9,
        transition: "border-color 160ms ease, transform 160ms ease, background 160ms ease",
        "&:hover": { borderColor: colors.neonGreen, transform: "translateX(3px)", background: colors.bgPanel },
        "& .bullet": { transition: "transform 140ms ease" },
        "&:hover .bullet": { transform: "translateX(2px)" },
      }}
    >
      <Box component="span" className="bullet" sx={{ color: colors.neonGreen, fontWeight: 900 }}>
        ▸
      </Box>
      {text}
    </Box>
  );
}

// Small "file panel" wrapper, matching the about.md/about.json chrome
// pattern used elsewhere — each column reads as its own log stream.
function LogPanel({ filename, accent, children }) {
  return (
    <Box sx={{ borderRadius: "8px", border: `1px solid ${colors.border}`, background: colors.bgPanelAlt, overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          px: 1.6,
          py: 0.9,
          borderBottom: `1px solid ${colors.border}`,
          fontFamily: mono,
          fontWeight: 700,
          fontSize: "0.72rem",
          color: colors.textDim,
          opacity: 0.75,
          letterSpacing: "0.03em",
        }}
      >
        <Box sx={{ width: 7, height: 7, borderRadius: "50%", background: accent, opacity: 0.85 }} />
        {filename}
      </Box>
      <Box sx={{ p: { xs: 1.6, md: 1.8 }, display: "flex", flexDirection: "column", gap: 1.1 }}>{children}</Box>
    </Box>
  );
}

export default function MoreSection() {
  return (
    <Box
      id="more"
      sx={{
        width: "100%",
        padding: { xs: "70px 20px 20px", md: "90px 20px 40px" },
        display: "flex",
        justifyContent: "center",
        scrollMarginTop: "80px",
      }}
    >
      <TerminalWindow title="~/status.log" command="tail -f status.log" accent={colors.neonAmber} dataAos="zoom-in">
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.0 }}>
          <Box component="span" sx={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: { xs: "1.4rem", md: "1.7rem" }, color: colors.neonAmber, lineHeight: 1 }}>
            *
          </Box>
          <Typography
            sx={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: { xs: "1.3rem", md: "1.7rem" },
              color: colors.textPrimary,
            }}
          >
            What I’m working on right now
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 1.2,
            fontFamily: mono,
            fontWeight: 500,
            fontSize: { xs: "0.88rem", md: "0.94rem" },
            color: colors.textDim,
            lineHeight: 1.9,
            maxWidth: 900,
          }}
        >
          A snapshot of what I’m actively building and improving — this changes as I grow.
        </Typography>

        {/* Two-column log panels */}
        <Box
          sx={{
            mt: 3.0,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2.2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 900,
                fontSize: "0.9rem",
                color: colors.neonGreen,
                mb: 1.2,
                letterSpacing: "0.02em",
              }}
            >
              {"// building"}
            </Typography>
            <LogPanel filename="building.log" accent={colors.neonGreen}>
              <Item text="Portfolio UI with pixel-inspired design system" />
              <Item text="Systems projects: Batchgate, ER-Flow, Shortly, GoShield" />
              <Item text="Full-stack features with clean API contracts" />
              <Item text="Mobile apps using React Native + Firebase" />
            </LogPanel>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 900,
                fontSize: "0.9rem",
                color: colors.neonCyan,
                mb: 1.2,
                letterSpacing: "0.02em",
              }}
            >
              {"// learning"}
            </Typography>
            <LogPanel filename="learning.log" accent={colors.neonCyan}>
              <Item text="Improving DSA problem-solving for interviews" />
              <Item text="Writing cleaner, testable backend code" />
              <Item text="Understanding ML bias & evaluation deeply" />
              <Item text="Designing scalable front-end architectures" />
            </LogPanel>
          </Box>
        </Box>

        {/* Live-log flavor line — ties to the `tail -f` command shown above,
            reinforces "this is a stream that's still running" */}
        <Box
          sx={{
            mt: 2.4,
            display: "flex",
            alignItems: "center",
            gap: 0.8,
            fontFamily: mono,
            fontWeight: 600,
            fontSize: "0.78rem",
            color: colors.textDim,
            opacity: 0.6,
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: colors.neonAmber,
              boxShadow: `0 0 5px 1px ${colors.neonAmber}88`,
              animation: "statusLivePulse 1.7s ease-in-out infinite",
              "@keyframes statusLivePulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0.3 },
              },
            }}
          />
          watching for changes...
        </Box>
      </TerminalWindow>
    </Box>
  );
}