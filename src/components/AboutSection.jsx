// src/components/AboutSection.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { fonts, colors, glow } from "../theme";
import TerminalWindow from "./TerminalWindow";

const { mono, display } = fonts;

const GROUPS = [
  {
    label: "education",
    items: ["M.S. Computer Science, UCR — Mar 2026"],
  },
  {
    label: "experience",
    items: ["AI Agent Developer @ NeuralSeek", "Mobile App Developer @ Wecofy"],
  },
];

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 7, md: 10 },
        scrollMarginTop: "80px",
      }}
    >
      <TerminalWindow title="~/about.sh" command="cat about.md" accent={colors.neonCyan} dataAos="fade-right">
        <style>{`
          @keyframes blinkCursor {
            0%, 48% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}</style>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: { xs: "1.3rem", sm: "1.45rem", md: "1.6rem" },
                color: colors.textPrimary,
                mb: 1.8,
                letterSpacing: "0.1px",
              }}
            >
              building things that feel solid, useful, and thoughtful
            </Typography>

            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 600,
                fontSize: { xs: "0.92rem", md: "0.98rem" },
                lineHeight: 1.9,
                color: colors.textDim,
                maxWidth: 820,
              }}
            >
              I recently completed my Master’s in Computer Science at UC Riverside,
              building products end-to-end — from clean interfaces to backend logic
              and data-driven systems. I’ve interned as an AI Agent Developer at
              NeuralSeek, building and testing agent-based workflows, and as a
              Mobile App Developer at Wecofy, shipping production-facing features.
              Right now I’m exploring responsible machine learning through my
              capstone.
            </Typography>
          </Box>

          {/* RIGHT: keyword blocks */}
          <Box
            sx={{
              borderRadius: "8px",
              background: colors.bgPanelAlt,
              border: `1px solid ${colors.border}`,
              p: { xs: 2.2, md: 2.6 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
              {GROUPS.map((g) => (
                <Box
                  key={g.label}
                  sx={{
                    borderRadius: "8px",
                    border: `1px solid ${colors.border}`,
                    background: colors.bgPanel,
                    p: 1.4,
                    transition: "border-color 160ms ease, box-shadow 160ms ease",
                    "&:hover": {
                      borderColor: colors.neonCyan,
                      boxShadow: glow(colors.neonCyan, 12),
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: mono,
                      fontWeight: 900,
                      fontSize: "0.88rem",
                      color: colors.neonCyan,
                      mb: 1,
                    }}
                  >
                    {"// " + g.label}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {g.items.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 1.2,
                          py: 0.65,
                          borderRadius: "6px",
                          border: `1px solid ${colors.border}`,
                          background: colors.bgPanelAlt,
                          fontFamily: mono,
                          fontWeight: 700,
                          fontSize: "0.84rem",
                          color: colors.textPrimary,
                          opacity: 0.9,
                          transition: "transform 140ms ease, border-color 140ms ease",
                          "&:hover": {
                            transform: "translateX(1px)",
                            borderColor: colors.neonCyan,
                          },
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                mt: 2.2,
                pt: 1.6,
                borderTop: `1px dashed ${colors.border}`,
                fontFamily: mono,
                fontWeight: 600,
                fontSize: "0.86rem",
                color: colors.textDim,
              }}
            >
              {"// I like shipping clean features and polishing the details."}
            </Box>
          </Box>
        </Box>
      </TerminalWindow>
    </Box>
  );
};

export default AboutSection;
