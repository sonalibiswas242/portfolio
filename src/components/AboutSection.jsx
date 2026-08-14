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

// Bio split into lines so each one can carry a line number, like a real
// file viewer — reinforces the `cat about.md` command shown above it.
const BIO_LINES = [
  "I recently completed my Master's in Computer Science at UC Riverside,",
  "building products end-to-end — from clean interfaces to backend logic",
  "and data-driven systems. I've interned as an AI Agent Developer at",
  "NeuralSeek, building and testing agent-based workflows, and as a",
  "Mobile App Developer at Wecofy, shipping production-facing features.",
  "Right now I'm exploring responsible machine learning through my capstone.",
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
            gap: { xs: 3.5, md: 5 },
            alignItems: "start",
          }}
        >
          {/* LEFT — file-viewer treatment: line numbers + live cursor */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.0, mb: 2.4 }}>
              <Box component="span" sx={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: { xs: "1.4rem", md: "1.7rem" }, color: colors.neonCyan, lineHeight: 1 }}>
                *
              </Box>
              <Typography
                sx={{
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: { xs: "1.32rem", sm: "1.48rem", md: "1.66rem" },
                  color: colors.textPrimary,
                  lineHeight: 1.35,
                  letterSpacing: "0.1px",
                }}
              >
                building things that feel solid, useful, and thoughtful
              </Typography>
            </Box>

            <Box
              sx={{
                borderRadius: "8px",
                border: `1px solid ${colors.border}`,
                background: colors.bgPanelAlt,
                overflow: "hidden",
              }}
            >
              {/* File-viewer chrome strip */}
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
                  opacity: 0.7,
                  letterSpacing: "0.04em",
                }}
              >
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", background: colors.neonCyan, opacity: 0.8 }} />
                about.md
              </Box>

              <Box sx={{ px: { xs: 1.8, md: 2.4 }, py: 2.0 }}>
                {BIO_LINES.map((line, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1.6 }}>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: mono,
                        fontWeight: 600,
                        fontSize: { xs: "0.82rem", md: "0.88rem" },
                        color: colors.textDim,
                        opacity: 0.35,
                        minWidth: "1.4em",
                        textAlign: "right",
                        userSelect: "none",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: mono,
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", md: "0.96rem" },
                        lineHeight: 1.9,
                        color: colors.textDim,
                      }}
                    >
                      {line}
                      {i === BIO_LINES.length - 1 && (
                        <Box
                          component="span"
                          sx={{
                            display: "inline-block",
                            width: "0.55em",
                            height: "1.05em",
                            ml: 0.6,
                            background: colors.neonCyan,
                            verticalAlign: "text-bottom",
                            animation: "blinkCursor 1s steps(2, end) infinite",
                          }}
                        />
                      )}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* RIGHT — structured "about.json"-style output, not a plain
              chip cluster: reads as real data, not decoration */}
          <Box
            sx={{
              borderRadius: "8px",
              background: colors.bgPanelAlt,
              border: `1px solid ${colors.border}`,
              overflow: "hidden",
            }}
          >
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
                opacity: 0.7,
                letterSpacing: "0.04em",
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: "50%", background: colors.neonCyan, opacity: 0.8 }} />
              about.json
            </Box>

            <Box sx={{ p: { xs: 2.0, md: 2.4 } }}>
              <Typography
                component="div"
                sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: colors.textDim, opacity: 0.55 }}
              >
                {"{"}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, pl: 1.8, my: 1.2 }}>
                {GROUPS.map((g, gi) => (
                  <Box key={g.label}>
                    <Typography
                      sx={{
                        fontFamily: mono,
                        fontWeight: 800,
                        fontSize: "0.86rem",
                        color: colors.neonCyan,
                      }}
                    >
                      "{g.label}"{" "}
                      <Box component="span" sx={{ color: colors.textDim, opacity: 0.55, fontWeight: 600 }}>
                        :{" ["}
                      </Box>
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6, pl: 2.2, my: 0.6 }}>
                      {g.items.map((item, ii) => (
                        <Box
                          key={item}
                          sx={{
                            borderRadius: "6px",
                            border: `1px solid ${colors.border}`,
                            background: colors.bgPanel,
                            px: 1.2,
                            py: 0.7,
                            transition: "transform 140ms ease, border-color 140ms ease, box-shadow 160ms ease",
                            "&:hover": {
                              transform: "translateX(2px)",
                              borderColor: colors.neonCyan,
                              boxShadow: glow(colors.neonCyan, 10),
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: mono,
                              fontWeight: 700,
                              fontSize: "0.82rem",
                              color: colors.textPrimary,
                            }}
                          >
                            "{item}"
                            {ii < g.items.length - 1 && (
                              <Box component="span" sx={{ color: colors.textDim, opacity: 0.5 }}>
                                ,
                              </Box>
                            )}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Typography sx={{ fontFamily: mono, fontWeight: 600, fontSize: "0.86rem", color: colors.textDim, opacity: 0.55 }}>
                      {"]"}
                      {gi < GROUPS.length - 1 ? "," : ""}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography
                component="div"
                sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.86rem", color: colors.textDim, opacity: 0.55 }}
              >
                {"}"}
              </Typography>
            </Box>

            <Box
              sx={{
                px: { xs: 2.0, md: 2.4 },
                pb: 2.0,
                pt: 1.2,
                borderTop: `1px dashed ${colors.border}`,
                fontFamily: mono,
                fontWeight: 600,
                fontSize: "0.82rem",
                color: colors.textDim,
                opacity: 0.75,
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