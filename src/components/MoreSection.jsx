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
        px: 1.2,
        py: 0.9,
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        background: colors.bgPanelAlt,
        fontFamily: mono,
        fontWeight: 600,
        fontSize: { xs: "0.86rem", md: "0.9rem" },
        color: colors.textPrimary,
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        gap: 0.9,
        transition: "border-color 140ms ease, transform 140ms ease",
        "&:hover": { borderColor: colors.neonGreen, transform: "translateX(3px)" },
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

        <Typography
          sx={{
            mt: 1.2,
            fontFamily: display,
            fontWeight: 700,
            fontSize: { xs: "1.3rem", md: "1.7rem" },
            color: colors.textPrimary,
          }}
        >
          What I’m working on right now
        </Typography>

        <Typography
          sx={{
            mt: 1.0,
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

        {/* Two-column content */}
        <Box
          sx={{
            mt: 2.6,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2.4,
          }}
        >
          {/* Currently Building */}
          <Box>
            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 900,
                fontSize: "0.96rem",
                color: colors.neonGreen,
                mb: 1.4,
              }}
            >
              Currently Building
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Item text="Portfolio UI with pixel-inspired design system" />
              <Item text="Systems projects: ER-Flow, Shortly, GoShield" />
              <Item text="Full-stack features with clean API contracts" />
              <Item text="Mobile apps using React Native + Firebase" />
            </Box>
          </Box>

          {/* Currently Learning */}
          <Box>
            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 900,
                fontSize: "0.96rem",
                color: colors.neonCyan,
                mb: 1.4,
              }}
            >
              Currently Learning
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Item text="Improving DSA problem-solving for interviews" />
              <Item text="Writing cleaner, testable backend code" />
              <Item text="Understanding ML bias & evaluation deeply" />
              <Item text="Designing scalable front-end architectures" />
            </Box>
          </Box>
        </Box>
      </TerminalWindow>
    </Box>
  );
}
