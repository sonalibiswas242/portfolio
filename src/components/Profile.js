// src/components/Profile.js
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardContent, IconButton, Button } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import MoreSection from "./MoreSection";
import ContactSection from "./ContactSection";

const Profile = () => {
  const helloText = "HELLO! I AM SONALI";
  const helloRef = useRef(null);
  const [helloWidth, setHelloWidth] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // ✅ Fix: measure pixel width so "SONALI" never gets cut
  useLayoutEffect(() => {
    const el = helloRef.current;
    if (!el) return;

    const measure = () => setHelloWidth(el.scrollWidth);
    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ✅ Keep old skills + add new ones (smaller chips so they fit)
  const SKILLS = [
    "Data Structures & Algorithms",
    "JavaScript (ES6+)",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "REST APIs",
    "Firebase",
    "MongoDB",
    "Python",
    "Machine Learning",

    "Java",
    "Kotlin",
    "Android",
    "Spring Boot",
    "Maven",
    "Kafka",
    "GraphQL",
    "Apache",
    "PostgreSQL",
    "Docker",
    "TypeScript",
    "SQL",
    "JWT/Auth",
    "CI/CD Basics",
    "System Design (Basics)",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 5, md: 7 },
      }}
    >
      {/* =========================
          HERO / PROFILE CARD
         ========================= */}
      <Box
        id="home"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 2, md: 3 },
          scrollMarginTop: "130px",
        }}
      >
        <Card
          data-aos="fade-up"
          sx={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: "22px",
            background: "linear-gradient(180deg, rgba(255,252,242,0.98), rgba(248,246,238,0.98))",
            border: "2px solid rgba(45,42,38,0.18)",
            boxShadow: "12px 12px 0 rgba(45,42,38,0.10)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* subtle pixel texture */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "repeating-linear-gradient(0deg, rgba(20,120,80,0.05) 0px, rgba(20,120,80,0.05) 1px, transparent 1px, transparent 26px)," +
                "repeating-linear-gradient(90deg, rgba(20,120,80,0.05) 0px, rgba(20,120,80,0.05) 1px, transparent 1px, transparent 26px)",
              opacity: 0.8,
            }}
          />

          <CardContent sx={{ position: "relative", zIndex: 1, p: { xs: 2.6, sm: 3.6, md: 4.2 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.75fr" },
                gap: { xs: 3, md: 4 },
                alignItems: "start",
              }}
            >
              {/* LEFT */}
              <Box sx={{ minWidth: 0 }}>
                {/* ✅ BIG + BLACK + typing without clipping */}
                <Typography
                  ref={helloRef}
                  sx={{
                    fontFamily: '"Press Start 2P", system-ui',
                    fontSize: { xs: "18px", sm: "22px", md: "28px" },
                    lineHeight: 1.45,
                    letterSpacing: "1px",
                    fontWeight: 900,
                    color: "#111",
                    textShadow:
                      "0px 2px 0px rgba(255,255,255,0.95), 0px 14px 40px rgba(0,0,0,0.12)",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: helloWidth ? `${helloWidth}px` : "auto",
                    maxWidth: "100%",
                    borderRight: "4px solid rgba(17,17,17,0.9)",
                    animation: helloWidth
                      ? `typewriterPx 1.9s steps(26, end) forwards, caret 850ms steps(2, end) infinite`
                      : "none",
                  }}
                >
                  {helloText}
                </Typography>

                {/* ✅ lighter than HELLO */}
                <Typography
                  sx={{
                    mt: 2.2,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontWeight: 700,
                    fontSize: { xs: "1.02rem", sm: "1.12rem", md: "1.18rem" },
                    color: "rgba(45,42,38,0.68)",
                    lineHeight: 1.75,
                  }}
                >
                  Student · Developer
                </Typography>

                {/* ✅ updated line (more natural + less “generic”) */}
                <Typography
                  sx={{
                    mt: 1.1,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontWeight: 600,
                    fontSize: { xs: "0.92rem", md: "0.98rem" },
                    color: "rgba(45,42,38,0.58)",
                    lineHeight: 1.9,
                    maxWidth: 680,
                  }}
                >
                  I enjoy turning ideas into well-designed products that feel intuitive, fast, and reliable.
                </Typography>

                <Box sx={{ mt: 2.4, display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                  <Button href="#projects" sx={primaryBtn}>
                    View Projects
                  </Button>

                  <Box sx={openToRolesPill}>
                    <Box sx={blinkDot} />
                    Open to roles
                  </Box>
                </Box>
              </Box>

              {/* RIGHT (image + icons under it) */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-end" },
                  gap: 1.8,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 170, sm: 190, md: 210 },
                    height: { xs: 170, sm: 190, md: 210 },
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "2px solid rgba(20,120,80,0.30)",
                    boxShadow: "10px 10px 0 rgba(20,120,80,0.08)",
                    background:
                      "linear-gradient(135deg, rgba(20,120,80,0.10), rgba(255,252,242,0.40))",
                    "& img": { width: "100%", height: "100%", objectFit: "cover" },
                  }}
                >
                  <img src={require("../assets/images/profile.jpg")} alt="Sonali" />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.2,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-end" },
                  }}
                >
                  <IconButton href="mailto: biswas.sonali2402@gmail.com" target="_blank" sx={socialBtn}>
                    <Email sx={{ fontSize: 30 }} />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/sonalibiswas242/"
                    target="_blank"
                    sx={socialBtn}
                  >
                    <LinkedIn sx={{ fontSize: 30 }} />
                  </IconButton>
                  <IconButton href="https://github.com/sonalibiswas242" target="_blank" sx={socialBtn}>
                    <GitHub sx={{ fontSize: 30 }} />
                  </IconButton>
                  <IconButton href="https://x.com/Shonaaaliii" target="_blank" sx={socialBtn}>
                    <Twitter sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* SKILLS */}
            <Box
              sx={{
                mt: { xs: 3, md: 4 },
                pt: { xs: 2.2, md: 2.6 },
                borderTop: "1px dashed rgba(45,42,38,0.18)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Press Start 2P", system-ui',
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: "rgba(20,120,80,0.90)",
                  mb: 1.4,
                }}
              >
                SKILLS
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.85 }}>
                {SKILLS.map((s) => (
                  <Box key={s} sx={skillChip}>
                    {s}
                  </Box>
                ))}
              </Box>
            </Box>

            <style>{`
              @keyframes typewriterPx {
                from { width: 0px; }
                to { width: ${helloWidth}px; }
              }
              @keyframes caret {
                0%, 48% { border-right-color: rgba(17,17,17,0.9); }
                50%, 100% { border-right-color: transparent; }
              }
              @keyframes dotBlink {
                0%, 45% { opacity: 1; transform: scale(1); }
                55%, 100% { opacity: 0.25; transform: scale(0.9); }
              }
            `}</style>
          </CardContent>
        </Card>
      </Box>

      {/* =========================
          OTHER SECTIONS (keeps scroll working)
         ========================= */}
      <Box sx={{ width: "100%" }} id="about">
        <AboutSection />
      </Box>

      <Box sx={{ width: "100%" }} id="projects">
        <ProjectsSection />
      </Box>

      <Box sx={{ width: "100%" }} id="projects">
        <MoreSection />
      </Box>

      <Box sx={{ width: "100%" }} id="contact">
        <ContactSection />
      </Box>
    </Box>
  );
};

const primaryBtn = {
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: 900,
  textTransform: "none",
  borderRadius: "999px",
  px: 2.2,
  py: 1.1,
  border: "1px solid rgba(20,120,80,0.28)",
  background: "rgba(255,252,242,0.95)",
  color: "rgba(20,120,80,0.92)",
  boxShadow: "4px 4px 0 rgba(20,120,80,0.08)",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "6px 6px 0 rgba(20,120,80,0.10)",
  },
};

const openToRolesPill = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  px: 2,
  py: 1.05,
  borderRadius: "999px",
  border: "1px solid rgba(45,42,38,0.16)",
  background: "rgba(255,252,242,0.95)",
  boxShadow: "4px 4px 0 rgba(45,42,38,0.06)",
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: 900,
  color: "rgba(45,42,38,0.74)",
};

const blinkDot = {
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: "rgba(20,120,80,0.95)",
  boxShadow: "0 0 0 3px rgba(20,120,80,0.10)",
  animation: "dotBlink 1.1s ease-in-out infinite",
};

const socialBtn = {
  color: "rgba(20,120,80,0.95)",
  borderRadius: "12px",
  border: "1px solid rgba(20,120,80,0.20)",
  background: "rgba(255,252,242,0.75)",
  boxShadow: "3px 3px 0 rgba(20,120,80,0.06)",
  transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
  "&:hover": {
    transform: "translateY(-1px)",
    borderColor: "rgba(20,120,80,0.32)",
    boxShadow: "5px 5px 0 rgba(20,120,80,0.08)",
    background: "rgba(255,252,242,0.95)",
  },
};

const skillChip = {
  px: 1.0,
  py: 0.52,
  borderRadius: "999px",
  border: "1px solid rgba(20,120,80,0.20)",
  background: "rgba(255,252,242,0.95)",
  boxShadow: "2px 2px 0 rgba(20,120,80,0.05)",
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: 850,
  fontSize: { xs: "0.76rem", md: "0.82rem" },
  color: "rgba(45,42,38,0.74)",
  transition: "transform 140ms ease, border-color 140ms ease",
  "&:hover": { transform: "translateY(-1px)", borderColor: "rgba(20,120,80,0.32)" },
};

export default Profile;
