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

  const SKILL_GROUPS = [
    {
      label: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++", "Go", "Kotlin", "SQL"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React", "React Native", "Node.js", "Express", "Spring Boot", "FastAPI", "scikit-learn"],
    },
    {
      label: "Tools & Platforms",
      items: ["Firebase", "MongoDB", "PostgreSQL", "Redis", "Docker", "Android", "Maven", "Kafka", "Apache", "GraphQL", "AWS", "Apache Spark", "Prometheus", "CMake"],
    },
    {
      label: "Concepts",
      items: [
        "Data Structures & Algorithms",
        "REST APIs",
        "Machine Learning",
        "JWT/Auth",
        "TLS",
        "CI/CD Basics",
        "System Design (Basics)",
        "Big Data",
        "Advanced Operating Systems",
        "Advanced Computer Vision",
        "Computer Networks & Security",
        "Software Security",
        "Web & Information Retrieval",
        "GenAI Workflows",
      ],
    },
  ];

  const STATUS_LINES = [
    { k: "status", v: "OPEN_TO_WORK", accent: true },
    { k: "role", v: "Software Engineer" },
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
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(${colors.border} 1px, transparent 1px)`,
                backgroundSize: "22px 22px",
                opacity: 0.35,
                pointerEvents: "none",
                zIndex: 0,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.3fr 0.7fr" },
                gap: { xs: 4, md: 5 },
                alignItems: "start",
              }}
            >
              <Box sx={{ minWidth: 0, pt: 0.5 }}>
                <Typography
                  sx={{
                    fontFamily: mono,
                    fontWeight: 500,
                    fontSize: "0.7rem",
                    color: colors.textDim,
                    opacity: 0.5,
                    mb: 1.6,
                    letterSpacing: "0.02em",
                  }}
                >
                  {`[${bootTime}] loading profile...`}
                </Typography>

                <Typography
                  ref={helloRef}
                  sx={{
                    fontFamily: pixel,
                    fontSize: { xs: "16px", sm: "20px", md: "27px" },
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

                <Typography
                  sx={{
                    mt: 2.8,
                    fontFamily: mono,
                    fontWeight: 700,
                    fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.28rem" },
                    color: colors.textPrimary,
                    lineHeight: 1.6,
                    maxWidth: 640,
                  }}
                >
                  CS Grad — Open to Software Engineering Roles
                </Typography>

                <Typography
                  sx={{
                    mt: 1.0,
                    fontFamily: mono,
                    fontWeight: 500,
                    fontSize: "0.86rem",
                    color: colors.textDim,
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  Systems-minded engineer who ships — from raw sockets to distributed
                  caches to production ML pipelines.
                </Typography>

                <Box sx={{ mt: 3.0, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.2 }}>
                  <Box component="a" href="#projects" sx={heroPill(true)}>
                    ▶ VIEW PROJECTS
                  </Box>
                  <Box component="a" href="#contact" sx={heroPill(false)}>
                    CONTACT
                  </Box>
                </Box>

                <Box sx={{ mt: 4.4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.7, mb: 2.2 }}>
                    <Typography
                      sx={{
                        fontFamily: pixel,
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        color: colors.neonCyan,
                        textShadow: textGlow(colors.neonCyan, 6),
                      }}
                    >
                      SKILLS
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2.0 }}>
                    {SKILL_GROUPS.map((group) => (
                      <Box key={group.label} sx={{ display: "flex", gap: 1.6, alignItems: "flex-start" }}>
                        <Box
                          sx={{
                            width: { xs: 84, sm: 118 },
                            flexShrink: 0,
                            pt: 0.5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            textAlign: "right",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: mono,
                              fontWeight: 700,
                              fontSize: "0.68rem",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: colors.textDim,
                              opacity: 0.75,
                              lineHeight: 1.3,
                            }}
                          >
                            {group.label}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "2px",
                            alignSelf: "stretch",
                            background: colors.border,
                            opacity: 0.6,
                            flexShrink: 0,
                          }}
                        />
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, flex: 1 }}>
                          {group.items.map((s) => (
                            <Box key={s} sx={skillChip}>
                              {s}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-end" },
                  gap: 2.0,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    p: 1.6,
                    animation: "floatY 5s ease-in-out infinite",
                    "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                  }}
                >
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
                      width: { xs: 172, sm: 190, md: 210 },
                      height: { xs: 172, sm: 190, md: 210 },
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
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        background: `linear-gradient(180deg, transparent 0%, ${colors.neonGreen}22 45%, ${colors.neonGreen}55 50%, ${colors.neonGreen}22 55%, transparent 100%)`,
                        backgroundSize: "100% 300%",
                        animation: "scanSweep 3.6s linear infinite",
                        mixBlendMode: "screen",
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { xs: 172, sm: 190, md: 210 },
                    border: `1px solid ${colors.border}`,
                    borderRadius: "8px",
                    background: colors.bgPanelAlt,
                    px: 1.4,
                    py: 1.2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.65,
                  }}
                >
                  {STATUS_LINES.map((line) => (
                    <Box key={line.k} sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: mono,
                          fontWeight: 600,
                          fontSize: "0.66rem",
                          color: colors.textDim,
                          opacity: 0.6,
                        }}
                      >
                        {line.k}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: mono,
                          fontWeight: 800,
                          fontSize: "0.66rem",
                          color: line.accent ? colors.neonGreen : colors.textPrimary,
                          textShadow: line.accent ? textGlow(colors.neonGreen, 4) : "none",
                          textAlign: "right",
                        }}
                      >
                        {line.accent ? (
                          <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                            <Box sx={statusDot} />
                            {line.v}
                          </Box>
                        ) : (
                          line.v
                        )}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.1,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-end" },
                  }}
                >
                  <IconButton href="mailto: sonalibiswas.codes@gmail.com" target="_blank" sx={socialBtn}>
                    <Email sx={{ fontSize: 24 }} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/sonalibiswas242/" target="_blank" sx={socialBtn}>
                    <LinkedIn sx={{ fontSize: 24 }} />
                  </IconButton>
                  <IconButton href="https://github.com/sonalibiswas242" target="_blank" sx={socialBtn}>
                    <GitHub sx={{ fontSize: 24 }} />
                  </IconButton>
                  <IconButton href="https://x.com/Shonaaaliii" target="_blank" sx={socialBtn}>
                    <Twitter sx={{ fontSize: 24 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
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
            @keyframes floatY {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            @keyframes scanSweep {
              0% { background-position: 0 -100%; }
              100% { background-position: 0 200%; }
            }
            @keyframes statusPulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.35; }
            }
          `}</style>
        </TerminalWindow>
      </Box>

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

const statusDot = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: colors.neonGreen,
  boxShadow: `0 0 5px 1px ${colors.neonGreen}88`,
  animation: "statusPulse 1.6s ease-in-out infinite",
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

const skillChip = {
  px: 1.0,
  py: 0.5,
  borderRadius: "6px",
  border: `1px solid ${colors.border}`,
  background: colors.bgPanelAlt,
  fontFamily: mono,
  fontWeight: 750,
  fontSize: { xs: "0.7rem", md: "0.76rem" },
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