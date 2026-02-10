// src/components/AboutSection.js
import React from "react";
import { Box, Typography } from "@mui/material";

const GROUPS = [
  {
    label: "education",
    items: ["Grad Student @ UCR", "MS Computer Science"],
  },
  {
    label: "experience",
    items: ["AI Intern @NeuralSeek", "Software Developer Intern @Wecofy"],
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
        scrollMarginTop: "110px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          borderRadius: "22px",

          // Pixel-paper (no glass)
          background:
            "linear-gradient(180deg, rgba(255,252,242,0.98), rgba(248,246,238,0.98))",
          border: "2px solid rgba(45,42,38,0.18)",
          boxShadow: "10px 10px 0 rgba(45,42,38,0.10)",
          position: "relative",
          overflow: "hidden",
          p: { xs: 2.5, sm: 3, md: 4 },

          // subtle pixel texture behind content
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(0deg, rgba(20,120,80,0.04) 0px, rgba(20,120,80,0.04) 1px, transparent 1px, transparent 26px)," +
              "repeating-linear-gradient(90deg, rgba(20,120,80,0.04) 0px, rgba(20,120,80,0.04) 1px, transparent 1px, transparent 26px)",
            opacity: 0.8,
            pointerEvents: "none",
          },

          // micro-interaction on hover: slight lift + tighter shadow
          transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            borderColor: "rgba(45,42,38,0.22)",
            boxShadow: "12px 12px 0 rgba(45,42,38,0.10)",
          },
        }}
      >
        {/* Keyframes */}
        <style>{`
          @keyframes blinkCursor {
            0%, 48% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}</style>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* LEFT: Keep your text */}
          <Box>
            {/* ABOUT + blinking cursor */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: '"Press Start 2P", system-ui',
                  fontSize: "14px",
                  letterSpacing: "0.18em",
                  color: "rgba(20,120,80,0.95)",
                }}
              >
                ABOUT
              </Typography>

              <Box
                component="span"
                sx={{
                  fontFamily: '"Press Start 2P", system-ui',
                  color: "rgba(20,120,80,0.95)",
                  fontSize: "14px",
                  lineHeight: 1,
                  animation: "blinkCursor 1.15s steps(2, end) infinite",
                  transform: "translateY(-1px)",
                  userSelect: "none",
                }}
              >
                ▮
              </Box>
            </Box>

            {/* Subheading (mono, matches theme better than regular Poppins) */}
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
                fontWeight: 800,
                fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.55rem" },
                color: "#2d2a26",
                mb: 1.8,
                letterSpacing: "0.2px",
              }}
            >
              building things that feel solid, useful, and thoughtful
            </Typography>

            {/* Main paragraph (keep text; natural flow) */}
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
                fontWeight: 600,
                fontSize: { xs: "0.95rem", md: "1.02rem" },
                lineHeight: 1.9,
                color: "rgba(45,42,38,0.78)",
                maxWidth: 820,
              }}
            >
              I’m a Master’s student in Computer Science at UC Riverside, and I enjoy
              building products end-to-end from clean interfaces to backend logic
              and data-driven systems. I’ve worked on production-facing mobile
              features through my internship at Wecofy, and last summer I also worked
              as an AI Agent Developer, where I built and tested agent-based workflows
              and automation. Right now, I’m exploring responsible machine learning
              through my capstone work.
            </Typography>
          </Box>

          {/* RIGHT: Contextual keyword blocks (Option 3), with micro interactions (Option 1) */}
          <Box
            sx={{
              borderRadius: "18px",
              background: "rgba(255,252,242,0.96)",
              border: "2px solid rgba(45,42,38,0.14)",
              boxShadow: "8px 8px 0 rgba(45,42,38,0.08)",
              p: { xs: 2.2, md: 2.6 },
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
                fontWeight: 900,
                fontSize: "0.95rem",
                color: "rgba(45,42,38,0.82)",
                mb: 1.6,
              }}
            >
              // keywords
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
              {GROUPS.map((g) => (
                <Box
                  key={g.label}
                  sx={{
                    borderRadius: "14px",
                    border: "1px solid rgba(20,120,80,0.18)",
                    background: "rgba(255,252,242,0.92)",
                    p: 1.4,

                    transition: "transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      borderColor: "rgba(20,120,80,0.28)",
                      boxShadow: "6px 6px 0 rgba(20,120,80,0.06)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
                      fontWeight: 900,
                      fontSize: "0.92rem",
                      color: "rgba(20,120,80,0.90)",
                      mb: 1,
                    }}
                  >
                    {"// " + g.label}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {g.items.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          px: 1.2,
                          py: 0.65,
                          borderRadius: "999px",
                          border: "1px solid rgba(45,42,38,0.14)",
                          background: "rgba(255,252,242,0.95)",
                          fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
                          fontWeight: 800,
                          fontSize: "0.86rem",
                          color: "rgba(45,42,38,0.78)",
                          opacity: 0.92,

                          // micro interaction on chip hover
                          transition: "transform 140ms ease, opacity 140ms ease, border-color 140ms ease",
                          "&:hover": {
                            transform: "translateX(1px)",
                            opacity: 1,
                            borderColor: "rgba(20,120,80,0.28)",
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

            {/* subtle dashed divider accent at bottom */}
            <Box
              sx={{
                mt: 2.2,
                pt: 1.6,
                borderTop: "1px dashed rgba(45,42,38,0.18)",
                fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace',
                fontWeight: 700,
                fontSize: "0.92rem",
                color: "rgba(45,42,38,0.68)",
              }}
            >
              I like shipping clean features and polishing the details.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
