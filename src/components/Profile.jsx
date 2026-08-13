// src/components/Profile.js
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import { fonts, colors, glow, textGlow, neonBox } from "../theme";
import TerminalWindow from "./TerminalWindow";
import profileImg from "../assets/images/profile.jpg";

import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import MoreSection from "./MoreSection";
import ContactSection from "./ContactSection";

const { mono, pixel } = fonts;

const Profile = () => {
  const helloText = "HELLO! I AM SONALI";
  const helloRef = useRef(null);
  const [helloWidth, setHelloWidth] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // ✅ Measure pixel width so "SONALI" never gets cut.
  // Re-measures once the Press Start 2P web font actually finishes
  // loading — otherwise this races the font swap: it locks in the
  // narrower fallback-font width, and the real (wider) pixel-font
  // text gets clipped mid-word once the font arrives.
  useLayoutEffect(() => {
    const el = helloRef.current;
    if (!el) return;

    const measure = () => setHelloWidth(el.scrollWidth);
    measure();

    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Grouped for scanning, not a flat wall of 25 pills — but every
  // skill renders with the same weight, no bolded "featured" subset.
  const SKILL_GROUPS = [
    {
      label: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "Kotlin", "SQL"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React", "React Native", "Node.js", "Express", "Spring Boot"],
    },
    {
      label: "Tools & Platforms",
      items: ["Firebase", "MongoDB", "PostgreSQL", "Docker", "Android", "Maven", "Kafka", "Apache", "GraphQL"],
    },
    {
      label: "Concepts",
      items: [
        "Data Structures & Algorithms",
        "REST APIs",
        "Machine Learning",
        "JWT/Auth",
        "CI/CD Basics",
        "System Design (Basics)",
        "Advanced Operating Systems",
        "Advanced Computer Vision",
        "Computer Security",
        "Software Security",
        "Web & Information Retrieval",
      ],
    },
  ];

  const [bootTime] = useState(() => {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(now);
    const get = (type) => parts.find((p) => p.type === type)?.value;
    return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")} PT`;
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 7, md: 10 },
      }}
    >
      {/* =========================
          HERO / TERMINAL WINDOW
         ========================= */}
      <Box
        id="home"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 2, md: 3 },
          scrollMarginTop: "90px",
        }}
      >
        <TerminalWindow title="~/home.sh" command="whoami" accent={colors.neonGreen}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.75fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <Box sx={{ minWidth: 0, pt: 0.5 }}>
              <Typography
                sx={{
                  fontFamily: mono,
                  fontWeight: 500,
                  fontSize: "0.72rem",
                  color: colors.textDim,
                  opacity: 0.55,
                  mb: 1.2,
                }}
              >
                {`[${bootTime}] loading profile...`}
              </Typography>

              <Typography
                ref={helloRef}
                sx={{
                  fontFamily: pixel,
                  fontSize: { xs: "16px", sm: "20px", md: "26px" },
                  lineHeight: 1.45,
                  letterSpacing: "1px",
                  fontWeight: 900,
                  color: colors.neonGreen,
                  textShadow: textGlow(colors.neonGreen, 5),
                  animation: helloWidth
                    ? "typewriterPx 1.9s steps(26, end) forwards, caret 850ms steps(2, end) infinite"
                    : "none",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: helloWidth ? `${helloWidth}px` : "auto",
                  maxWidth: "100%",
                  borderRight: `4px solid ${colors.neonGreen}`,
                }}
              >
                {helloText}
              </Typography>

              {/* Plain, high-contrast — the one sentence a recruiter needs, no wordplay */}
              <Typography
                sx={{
                  mt: 2.2,
                  fontFamily: mono,
                  fontWeight: 700,
                  fontSize: { xs: "1.0rem", sm: "1.08rem", md: "1.15rem" },
                  color: colors.textPrimary,
                  lineHeight: 1.75,
                  maxWidth: 680,
                }}
              >
                CS Grad — Open to Software Engineering Roles
              </Typography>

              <Box sx={{ mt: 2.4, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.2 }}>
                <Box component="a" href="#projects" sx={heroPill(true)}>
                  ▶ VIEW PROJECTS
                </Box>

                <Box sx={heroPill(false)}>
                  <Box sx={spinDiamond} />
                  {"OPEN TO WORK"}
                </Box>
              </Box>
            </Box>

            {/* RIGHT (image + icons under it) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-end" },
                gap: 2.2,
              }}
            >
              {/* "Character select" portrait frame */}
              <Box
                sx={{
                  position: "relative",
                  p: 1.6,
                  animation: "floatY 4.5s ease-in-out infinite",
                  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                }}
              >
                {/* Corner brackets */}
                {[
                  { top: 0, left: 0, borderWidth: "3px 0 0 3px" },
                  { top: 0, right: 0, borderWidth: "3px 3px 0 0" },
                  { bottom: 0, left: 0, borderWidth: "0 0 3px 3px" },
                  { bottom: 0, right: 0, borderWidth: "0 3px 3px 0" },
                ].map((pos, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: "absolute",
                      width: 20,
                      height: 20,
                      borderStyle: "solid",
                      borderColor: colors.neonGreen,
                      filter: `drop-shadow(0 0 4px ${colors.neonGreen}aa)`,
                      ...pos,
                    }}
                  />
                ))}

                <Box
                  sx={{
                    width: { xs: 160, sm: 180, md: 200 },
                    height: { xs: 160, sm: 180, md: 200 },
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: `2px solid ${colors.border}`,
                    boxShadow: neonBox(colors.neonGreen, 16, 20),
                    background: colors.bgPanelAlt,
                    "& img": { width: "100%", height: "100%", objectFit: "cover", display: "block" },
                  }}
                >
                  <img src={profileImg} alt="Sonali" />

                  {/* Scanline sweep */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: `linear-gradient(180deg, transparent 0%, ${colors.neonGreen}22 45%, ${colors.neonGreen}55 50%, ${colors.neonGreen}22 55%, transparent 100%)`,
                      backgroundSize: "100% 300%",
                      animation: "scanSweep 3.4s linear infinite",
                      mixBlendMode: "screen",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 1.2,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <IconButton href="mailto: sonalibiswas.codes@gmail.com" target="_blank" sx={socialBtn}>
                  <Email sx={{ fontSize: 26 }} />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/sonalibiswas242/" target="_blank" sx={socialBtn}>
                  <LinkedIn sx={{ fontSize: 26 }} />
                </IconButton>
                <IconButton href="https://github.com/sonalibiswas242" target="_blank" sx={socialBtn}>
                  <GitHub sx={{ fontSize: 26 }} />
                </IconButton>
                <IconButton href="https://x.com/Shonaaaliii" target="_blank" sx={socialBtn}>
                  <Twitter sx={{ fontSize: 26 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* SKILLS */}
          <Box
            sx={{
              mt: { xs: 1.4, md: 1.8 },
            }}
          >
            <Typography
              sx={{
                fontFamily: pixel,
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: colors.neonCyan,
                textShadow: textGlow(colors.neonCyan, 6),
                mb: 2.0,
              }}
            >
              SKILLS
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
              {SKILL_GROUPS.map((group) => (
                <Box key={group.label}>
                  <Typography
                    sx={{
                      mb: 0.8,
                      fontFamily: mono,
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: colors.textDim,
                      opacity: 0.7,
                    }}
                  >
                    {group.label}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                    {group.items.map((s) => (
                      <Box key={s} sx={skillChip}>
                        {s}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* One quirky aside — kept quiet, out of the recruiter's scan path */}
            <Typography
              sx={{
                mt: 2.2,
                fontFamily: mono,
                fontWeight: 500,
                fontSize: "0.74rem",
                color: colors.textDim,
                opacity: 0.4,
              }}
            >
              {"// currently: 60% coffee, 40% stack traces"}
            </Typography>
          </Box>

          <style>{`
            @keyframes typewriterPx {
              from { width: 0px; }
              to { width: ${helloWidth}px; }
            }
            @keyframes caret {
              0%, 48% { border-right-color: ${colors.neonGreen}; }
              50%, 100% { border-right-color: transparent; }
            }
            @keyframes neonPulse {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.35); }
            }
            @keyframes floatY {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            @keyframes gemSpin {
              0%   { transform: rotate(45deg) scaleX(1); }
              50%  { transform: rotate(45deg) scaleX(0.12); }
              100% { transform: rotate(45deg) scaleX(1); }
            }
            @keyframes dotBlink {
              0%, 45% { opacity: 1; transform: scale(1); }
              55%, 100% { opacity: 0.25; transform: scale(0.9); }
            }
            @keyframes scanSweep {
              0% { background-position: 0 -100%; }
              100% { background-position: 0 200%; }
            }
          `}</style>
        </TerminalWindow>
      </Box>

      {/* =========================
          OTHER SECTIONS (keeps scroll working)
         ========================= */}
      <Box sx={{ width: "100%" }}>
        <AboutSection />
      </Box>

      <Box sx={{ width: "100%" }}>
        <ProjectsSection />
      </Box>

      <Box sx={{ width: "100%" }}>
        <MoreSection />
      </Box>

      <Box sx={{ width: "100%" }}>
        <ContactSection />
      </Box>
    </Box>
  );
};

// Matched pair with openToRolesPill below — same shape, size, font,
// border color, and shadow/hover behavior. Filled vs. bordered is the
// only intentional difference (primary action vs. status badge).
// One style, shared by both hero pills (same Box element type, same
// sx keys, same values) — `filled` is the only thing that changes,
// so VIEW PROJECTS and open_to_work.sh are pixel-identical in size.
const heroPill = (filled) => ({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 44,
  gap: 1,
  px: 2.4,
  py: 0,
  m: 0,
  borderRadius: "4px",
  border: `2px solid ${colors.neonGreen}`,
  background: filled ? colors.neonGreen : colors.bgPanelAlt,
  fontFamily: mono,
  fontWeight: 800,
  fontSize: "0.86rem",
  lineHeight: 1,
  color: filled ? "#fff8f4" : colors.textPrimary,
  textDecoration: "none",
  cursor: "pointer",
  boxShadow: neonBox(colors.neonGreen, 12, 16),
  transition: "transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease",
  "&:hover": {
    transform: "translate(-2px, -2px)",
    background: filled ? colors.neonGreenDim : colors.bgPanelAlt,
    borderColor: colors.neonGreenDim,
    boxShadow: neonBox(colors.neonGreen, 18, 24),
  },
  "&:active": {
    transform: "translate(0, 0) scale(0.97)",
    boxShadow: glow(colors.neonGreen, 8),
  },
});

// Bordered diamond that flips around its vertical axis (scaleX
// oscillates to fake the 3D spin) — an outline gem, not a filled
// dot, in the same accent as everything else.
const spinDiamond = {
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: colors.neonGreen,
  boxShadow: `0 0 6px 1px ${colors.neonGreen}66`,
  animation: "dotBlink 1.1s ease-in-out infinite",
};

const socialBtn = {
  color: colors.neonGreen,
  borderRadius: "8px",
  border: `1px solid ${colors.border}`,
  background: colors.bgPanelAlt,
  transition: "transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 160ms ease, border-color 160ms ease",
  "&:hover": {
    transform: "translateY(-4px) scale(1.1)",
    borderColor: colors.neonGreen,
    boxShadow: neonBox(colors.neonGreen, 14, 18),
  },
  "&:active": {
    transform: "translateY(-1px) scale(0.95)",
  },
};

// Every skill renders with the same weight — no featured subset.
const skillChip = {
  px: 1.1,
  py: 0.56,
  borderRadius: "6px",
  border: `1px solid ${colors.border}`,
  background: colors.bgPanelAlt,
  fontFamily: mono,
  fontWeight: 750,
  fontSize: { xs: "0.74rem", md: "0.8rem" },
  color: colors.textDim,
  cursor: "default",
  transition: "background 140ms ease, color 140ms ease, border-color 140ms ease, transform 140ms ease, box-shadow 200ms ease",
  "&:hover": {
    background: colors.neonGreen,
    borderColor: colors.neonGreen,
    color: "#0b0e14",
    transform: "translateY(-2px) scale(1.04)",
    boxShadow: neonBox(colors.neonGreen, 12, 22),
  },
};

export default Profile;
