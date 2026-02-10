// src/components/MoreSection.js
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const SECTION_MAX = 1100; // ✅ match Profile/About

const panelBg = "#fffaf0";
const borderDark = "rgba(45,42,38,0.22)";
const green = "rgba(20,120,80,0.92)";
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
const pixel = '"Press Start 2P", system-ui';

function Item({ text }) {
  return (
    <Box
      sx={{
        px: 1.2,
        py: 0.9,
        borderRadius: "14px",
        border: "2px solid rgba(45,42,38,0.16)",
        background: "#fffdf7",
        fontFamily: mono,
        fontWeight: 750,
        fontSize: { xs: "0.88rem", md: "0.92rem" },
        color: "rgba(45,42,38,0.78)",
        boxShadow: "3px 3px 0 rgba(45,42,38,0.12)",
      }}
    >
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
        scrollMarginTop: "120px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: SECTION_MAX, // ✅ aligned with Profile/About
          borderRadius: "22px",
          position: "relative",
          background: panelBg,
          border: `2px solid ${borderDark}`,
          boxShadow: `10px 10px 0 rgba(45,42,38,0.14)`,
          overflow: "hidden",

          // subtle pixel grid texture (not too strong)
          backgroundImage:
            "linear-gradient(rgba(45,42,38,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(45,42,38,0.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",

          "&:before": {
            content: '""',
            position: "absolute",
            inset: 12,
            borderRadius: "16px",
            border: `2px dashed rgba(20,120,80,0.22)`,
            pointerEvents: "none",
            opacity: 0.9,
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2.2, md: 3.0 } }}>
          {/* Header */}
          <Typography
            sx={{
              fontFamily: pixel,
              fontWeight: 900,
              fontSize: { xs: "14px", sm: "16px" },
              color: green,
              letterSpacing: "1px",
            }}
          >
            STATUS
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              fontFamily: mono,
              fontWeight: 900,
              fontSize: { xs: "1.25rem", md: "1.7rem" },
              color: "rgba(45,42,38,0.92)",
            }}
          >
            What I’m working on right now
          </Typography>

          <Typography
            sx={{
              mt: 1.0,
              fontFamily: mono,
              fontWeight: 650,
              fontSize: { xs: "0.92rem", md: "0.98rem" },
              color: "rgba(45,42,38,0.70)",
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
                  fontSize: "1.0rem",
                  color: "rgba(45,42,38,0.88)",
                  mb: 1.4,
                }}
              >
                Currently Building
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                <Item text="Portfolio UI with pixel-inspired design system" />
                <Item text="Full-stack features with clean API contracts" />
                <Item text="Mobile apps using React Native + Firebase" />
                <Item text="Capstone project on responsible ML systems" />
              </Box>
            </Box>

            {/* Currently Learning */}
            <Box>
              <Typography
                sx={{
                  fontFamily: mono,
                  fontWeight: 900,
                  fontSize: "1.0rem",
                  color: "rgba(45,42,38,0.88)",
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
        </CardContent>
      </Card>
    </Box>
  );
}
