// src/components/ProjectsSection.js
import React, { useMemo, useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { fonts, colors, glow, neonBox } from "../theme";
import TerminalWindow from "./TerminalWindow";

// Existing images
import resfeber1 from "../assets/projects/resfeber1.png";
import resfeber2 from "../assets/projects/resfeber2.png";
import resfeber3 from "../assets/projects/resfeber3.png";
import resfeber4 from "../assets/projects/resfeber4.png";
import resfeber5 from "../assets/projects/resfeber5.png";

import bookstore1 from "../assets/projects/bookstore1.jpg";
import bookstore2 from "../assets/projects/bookstore2.jpg";
import bookstore3 from "../assets/projects/bookstore3.jpg";
import bookstore4 from "../assets/projects/bookstore4.jpg";

import gallery1 from "../assets/projects/gallery1.jpg";
import gallery2 from "../assets/projects/gallery2.jpg";
import gallery3 from "../assets/projects/gallery3.jpg";
import gallery4 from "../assets/projects/gallery4.jpg";

import nourish1 from "../assets/projects/nourish1.jpg";
import nourish2 from "../assets/projects/nourish2.jpg";
import nourish3 from "../assets/projects/nourish3.jpg";
import nourish4 from "../assets/projects/nourish4.jpg";
import nourish5 from "../assets/projects/nourish5.jpg";
import nourish6 from "../assets/projects/nourish6.jpg";

import student1 from "../assets/projects/student1.jpg";
import student2 from "../assets/projects/student2.jpg";
import student3 from "../assets/projects/student3.jpg";
import student4 from "../assets/projects/student4.jpg";

/* =========================================================
   Theme tokens (match Profile/About/Status)
   ========================================================= */
const { mono, display } = fonts;

const btnBase = {
  borderRadius: "4px",
  px: 2.0,
  py: 1.0,
  fontWeight: 800,
  textTransform: "none",
  fontFamily: mono,
  letterSpacing: "0.2px",
  border: `2px solid ${colors.border}`,
  background: colors.bgPanelAlt,
  color: colors.textPrimary,
  boxShadow: glow(colors.border, 8),
  transition: "transform 140ms ease, box-shadow 140ms ease, background 140ms ease",
  "&:hover": {
    transform: "translate(-2px, -2px)",
    borderColor: colors.neonGreen,
    boxShadow: glow(colors.border, 14),
  },
  "&:active": {
    transform: "translate(0, 0) scale(0.97)",
    boxShadow: glow(colors.border, 6),
  },
};

const btnPrimary = {
  ...btnBase,
  background: colors.neonGreen,
  color: "#fff8f4",
  boxShadow: glow(colors.border, 10),
  "&:hover": {
    transform: "translate(-2px, -2px)",
    background: colors.neonGreenDim,
    boxShadow: glow(colors.border, 16),
  },
  "&:active": {
    transform: "translate(0, 0) scale(0.97)",
    boxShadow: glow(colors.border, 6),
  },
};

const TYPE_COLORS = {
  SYSTEMS: colors.neonCyan,
  ML: "#a855f7",
  MOBILE: colors.neonAmber,
  DATA: "#0d9488",
  WEB: colors.neonMagenta,
};

// Faux unix permission string per type — SYSTEMS gets executable bits,
// data/web/mobile get read-only — a small, coherent nod to `ls -la`
// rather than decoration with no meaning.
const TYPE_PERMS = {
  SYSTEMS: "-rwxr-xr-x",
  ML: "-rw-r--r--",
  MOBILE: "-rw-r--r--",
  DATA: "-rw-r--r--",
  WEB: "-rwxr-xr-x",
};

function Tag({ text }) {
  return (
    <Box
      sx={{
        px: 1.1,
        py: 0.6,
        borderRadius: "6px",
        border: `1px solid ${colors.border}`,
        background: colors.bgPanelAlt,
        fontFamily: mono,
        fontWeight: 700,
        fontSize: "0.76rem",
        color: colors.textDim,
        whiteSpace: "nowrap",
        transition: "background 100ms ease, color 100ms ease, border-color 100ms ease",
        "&:hover": {
          background: colors.neonGreen,
          borderColor: colors.neonGreen,
          color: "#0b0e14",
        },
      }}
    >
      {text}
    </Box>
  );
}

function ProjectTile({ project, onOpen, index = 0 }) {
  const accent = TYPE_COLORS[project.type] || colors.neonGreen;
  const perms = TYPE_PERMS[project.type] || "-rw-r--r--";
  return (
    <Box
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 80}
      data-aos-duration="500"
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: "10px",
        background: colors.bgPanel,
        border: `1px solid ${colors.border}`,
        borderTop: `3px solid ${accent}`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 180ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 180ms ease, border-color 180ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: accent,
          boxShadow: neonBox(accent, 20, 24),
        },
      }}
    >
      {/* Faux `ls -la` row — ties the tile directly to the command shown
          in the terminal header above, instead of being pure decoration */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.6,
          py: 0.7,
          borderBottom: `1px solid ${colors.border}`,
          background: colors.bgPanelAlt,
          fontFamily: mono,
          fontWeight: 600,
          fontSize: "0.66rem",
          color: colors.textDim,
          opacity: 0.55,
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {perms}
      </Box>

      <Box sx={{ p: 2.0, display: "flex", flexDirection: "column", gap: 1.2, flex: 1 }}>
        {project.type ? (
          <Box
            sx={{
              alignSelf: "flex-start",
              px: 1.0,
              py: 0.4,
              borderRadius: "6px",
              border: `1px solid ${accent}`,
              background: colors.bgPanelAlt,
              fontFamily: mono,
              fontWeight: 900,
              fontSize: "0.66rem",
              letterSpacing: "0.08em",
              color: accent,
            }}
          >
            {project.type}
          </Box>
        ) : null}

        <Typography sx={{ fontFamily: mono, fontWeight: 800, fontSize: "1.04rem", color: colors.textPrimary }}>
          {project.name}
        </Typography>

        <Typography
          sx={{
            fontFamily: mono,
            fontWeight: 500,
            fontSize: "0.88rem",
            lineHeight: 1.75,
            color: colors.textDim,
            minHeight: 58,
          }}
        >
          {project.shortDescription}
        </Typography>

        {project.stack?.length ? (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {project.stack.slice(0, 6).map((t) => (
              <Tag key={t} text={t} />
            ))}
          </Box>
        ) : null}

        <Box sx={{ display: "flex", gap: 1.2, mt: "auto", pt: 0.5, flexWrap: "wrap" }}>
          <Button sx={btnPrimary} onClick={() => onOpen(project)}>
            View
          </Button>
          {project.github ? (
            <Button sx={btnBase} href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </Button>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const projects = useMemo(() => {
    const featured = [
      {
        name: "Resfeber",
        type: "MOBILE",
        shortDescription: "Gemini-powered travel planner that generates itineraries in seconds (React Native + Firebase).",
        longDescription:
          "Resfeber creates personalized itineraries fast, so users spend less time planning and more time exploring. Built with React Native, Firebase/Firestore, and Expo — powered by Gemini AI for itinerary generation.",
        github: "https://github.com/sonalibiswas242/Resfeber",
        stack: ["React Native", "Firebase", "Firestore", "Gemini"],
        images: [resfeber1, resfeber2, resfeber3, resfeber4, resfeber5],
      },
      {
        name: "Nourish",
        type: "MOBILE",
        shortDescription: "Food donation app connecting donors and NGOs with location-based matching.",
        longDescription:
          "Nourish streamlines food donation by connecting donors with recipient organizations through a structured flow and location-aware matching.",
        github: "https://github.com/kalp-77/FoodDonation",
        paper: "https://www.ijraset.com/best-journal/nourish-food-donation-app-using-android-and-ml",
        stack: ["Android", "Geofencing", "DBMS", "UAT"],
        images: [nourish1, nourish2, nourish3, nourish4, nourish5, nourish6],
      },
      {
        name: "ER-Flow",
        type: "SYSTEMS",
        shortDescription: "Emergency department simulator modeling triage, staffing, and bed capacity to find real bottlenecks.",
        longDescription:
          "ER-Flow is a discrete-event ER operations simulator and capacity-planning dashboard. It models severity-based triage, dynamic patient reprioritization, doctor/bed availability, and ML-predicted treatment durations, then compares six staffing scenarios to recommend the capacity change with the strongest impact on wait times. Backend built with FastAPI and scikit-learn; dashboard built with React and Recharts.",
        github: "https://github.com/sonalibiswas242/er-flow",
        stack: ["Python", "FastAPI", "scikit-learn", "React", "Recharts"],
        images: [],
      },
      {
        name: "Shortly",
        type: "SYSTEMS",
        shortDescription: "Distributed URL shortener with a REST API, Redis cache-aside reads, and per-IP rate limiting.",
        longDescription:
          "Shortly is a production-shaped URL shortener demonstrating core systems-design patterns: a FastAPI REST API backed by PostgreSQL, a Redis cache-aside read path for hot redirects, collision-free base62 codes, atomic custom-alias handling, and Redis-backed per-IP rate limiting. Containerized with Docker Compose and load-tested with Locust against a read-heavy traffic mix.",
        github: "https://github.com/sonalibiswas242/shortly",
        stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
        images: [],
      },
      {
        name: "Batchgate",
        type: "SYSTEMS",
        shortDescription: "C++ LLM inference gateway with request batching, priority scheduling, and an LRU cache — 53% higher throughput under load.",
        longDescription:
          "Batchgate is an LLM inference gateway built from scratch in C++, sitting in front of a local llama.cpp model. It implements an epoll-based event loop and hand-rolled HTTP/1.1 parser, a priority-heap request scheduler, an LRU prompt cache, and a request-batching engine that groups concurrent requests into micro-batches before submitting them to the model as a single decode call — the same core technique used by production serving engines like vLLM and TensorRT-LLM. Benchmarked against a real TinyLlama-1.1B model with a custom load-testing script: batching improved throughput by 53% and cut p95 latency by roughly 30% versus unbatched requests under identical concurrent load.",
        github: "https://github.com/sonalibiswas242/batchgate",
        stack: ["C++", "llama.cpp", "epoll", "CMake", "Systems Design"],
        images: [],
      },
      {
        name: "GoShield",
        type: "SYSTEMS",
        shortDescription: "TLS-terminating reverse proxy in Go with JWT auth middleware and Prometheus metrics.",
        longDescription:
          "GoShield is a reverse proxy written in Go demonstrating TLS termination with enforced minimum version and strong ciphers, JWT/Bearer identity middleware, longest-prefix-match routing, structured logging, Prometheus metrics, and graceful shutdown — architecture comparable to a simplified Nginx/Envoy layer.",
        github: "https://github.com/sonalibiswas242/goshield",
        stack: ["Go", "TLS", "JWT", "Prometheus", "Reverse Proxy"],
        images: [],
      },
      {
        name: "FairRecruit",
        type: "ML",
        shortDescription: "Tests resume-screening embeddings for name-based bias using controlled, identical resumes.",
        longDescription:
          "FairRecruit measures whether resume-job matching embeddings (EmbeddingGemma-300M, Qwen3-Embedding-4B, E2Rank-0.6B) favor candidates based on name alone. Resumes stay identical in qualifications while only demographic-coded names change, then cosine-similarity rankings are compared across groups — results showed no statistically significant name-based bias in this experimental setup.",
        github: "https://github.com/sonalibiswas242/FairRecruit",
        stack: ["Python", "Embeddings", "scikit-learn", "Bias Evaluation"],
        images: [],
      },
      {
        name: "SpatioHealth",
        type: "DATA",
        shortDescription: "Spatial + health project using location-aware analytics and visualization.",
        longDescription:
          "SpatioHealth explores health-related insights through location-aware analytics, spatial patterns, and visualization. (Update with your exact features.)",
        github: "https://github.com/sonalibiswas242/SpatioHealth",
        stack: ["GIS", "Spatial Data", "Visualization", "Analytics"],
        images: [],
      },
      {
        name: "CalFireInsight",
        type: "DATA",
        shortDescription: "Wildfire insights project using analysis + visualization to spot trends and patterns.",
        longDescription:
          "CalFireInsight analyzes California wildfire data to uncover temporal and regional patterns and present insights through visualizations. (Update with your dataset/methods.)",
        github: "https://github.com/sonalibiswas242/CalFireInsight",
        stack: ["Python", "ETL", "Data Analysis", "Visualization"],
        images: [],
      },
      {
        name: "ClassCapCounter",
        type: "WEB",
        shortDescription: "Web app that counts students from classroom images using lightweight face detection.",
        longDescription:
          "ClassCapCounter automates classroom attendance by counting faces from uploaded classroom images using OpenCV.js (Haar Cascade). Built with React + Vite.",
        github: "https://github.com/9RP6/ClassCapCounter",
        stack: ["React", "Vite", "OpenCV.js", "Computer Vision"],
        images: [],
      },
    ];

    const other = [
      {
        name: "Bookstore App",
        type: "MOBILE",
        shortDescription: "React Native bookstore app with Redux-based cart flows and smooth browsing.",
        longDescription:
          "A React Native app for browsing, buying, and selling books with Redux cart state and responsive UI patterns.",
        github: "https://github.com/sonalibiswas242/BookStoreApp",
        stack: ["React Native", "Redux", "UI"],
        images: [bookstore1, bookstore2, bookstore3, bookstore4],
      },
      {
        name: "Gallery App",
        type: "MOBILE",
        shortDescription: "Flickr-powered gallery app with caching for faster loading and smoother browsing.",
        longDescription:
          "A React Native app that fetches images from Flickr API and adds caching for better performance and browsing.",
        github: "https://github.com/sonalibiswas242/Gallery-app",
        stack: ["React Native", "Flickr API", "Caching"],
        images: [gallery1, gallery2, gallery3, gallery4],
      },
      {
        name: "Student Report App",
        type: "MOBILE",
        shortDescription: "Firebase-backed student reporting app for real-time data storage and retrieval.",
        longDescription:
          "A React Native app for managing student report data with Firebase for secure real-time fetch/store.",
        github: "https://github.com/sonalibiswas242/StudentReportApp",
        stack: ["React Native", "Firebase", "Realtime Data"],
        images: [student1, student2, student3, student4],
      },
    ];

    return { featured, other };
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        padding: { xs: "70px 20px 20px", md: "90px 20px 40px" },
        display: "flex",
        justifyContent: "center",
        scrollMarginTop: "80px",
      }}
    >
      <TerminalWindow title="~/projects.json" command="ls -la projects/" accent={colors.neonMagenta} maxWidth={1300}>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.0 }}>
          <Box component="span" sx={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" }, color: colors.neonMagenta, lineHeight: 1 }}>
            *
          </Box>
          <Typography sx={{ fontFamily: display, fontWeight: 700, fontSize: { xs: "1.36rem", md: "1.76rem" }, color: colors.textPrimary, letterSpacing: "0.1px" }}>
            Things I’ve built
          </Typography>
        </Box>

        <Typography sx={{ mt: 1.2, fontFamily: mono, fontWeight: 500, fontSize: { xs: "0.88rem", md: "0.94rem" }, color: colors.textDim, lineHeight: 1.9, maxWidth: 900 }}>
          A mix of mobile apps, web projects, and experiments — focused on clean UI, solid APIs, and strong fundamentals.
        </Typography>

        {/* Featured */}
        <Box sx={{ mt: 3.6, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2.2 }}>
          {projects.featured.map((p, i) => (
            <ProjectTile key={p.name} project={p} onOpen={handleOpen} index={i} />
          ))}
        </Box>

        {/* More */}
        <Box sx={{ mt: 5.0, borderTop: `1px dashed ${colors.border}`, pt: 3.4 }}>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 2.0 }}>
            <Typography sx={{ fontFamily: mono, fontWeight: 900, fontSize: "1.02rem", color: colors.textPrimary }}>
              More projects
            </Typography>
            <Typography sx={{ fontFamily: mono, fontWeight: 600, fontSize: "0.76rem", color: colors.textDim, opacity: 0.5 }}>
              {`// ${projects.other.length} entries`}
            </Typography>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2.2 }}>
            {projects.other.map((p, i) => (
              <ProjectTile key={p.name} project={p} onOpen={handleOpen} index={i} />
            ))}
          </Box>
        </Box>

        {/* Modal — file-chrome header to match About's file-viewer treatment */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "92%", md: 980 },
              maxHeight: "90vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              borderRadius: "14px",
              background: colors.bgPanel,
              border: `2px solid ${colors.borderBright}`,
              boxShadow: `8px 8px 0 ${colors.neonMagenta}`,
            }}
          >
            {selectedProject && (
              <>
                {/* File-chrome strip, matching about.md/about.json pattern */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: { xs: 2.0, md: 2.6 },
                    py: 1.1,
                    borderBottom: `1px solid ${colors.border}`,
                    background: colors.bgPanelAlt,
                    flexShrink: 0,
                  }}
                >
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: colors.neonMagenta, opacity: 0.85 }} />
                  <Typography
                    sx={{
                      fontFamily: mono,
                      fontWeight: 700,
                      fontSize: "0.76rem",
                      color: colors.textDim,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {`${selectedProject.name.toLowerCase().replace(/\s+/g, "-")}/README.md`}
                  </Typography>
                </Box>

                <Box sx={{ p: { xs: 2.4, md: 3.2 }, overflowY: "auto" }}>
                  <Typography sx={{ fontFamily: mono, fontWeight: 900, fontSize: { xs: "1.3rem", md: "1.76rem" }, color: colors.textPrimary, mb: 1.4 }}>
                    {selectedProject.name}
                  </Typography>

                  <Typography sx={{ fontFamily: mono, fontWeight: 500, fontSize: { xs: "0.9rem", md: "0.98rem" }, color: colors.textDim, lineHeight: 1.9, maxWidth: 860 }}>
                    {selectedProject.longDescription}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap", mt: 2.4 }}>
                    {selectedProject.github ? (
                      <Button sx={btnPrimary} href={selectedProject.github} target="_blank" rel="noreferrer">
                        GitHub
                      </Button>
                    ) : null}
                    {selectedProject.paper ? (
                      <Button sx={btnBase} href={selectedProject.paper} target="_blank" rel="noreferrer">
                        Paper
                      </Button>
                    ) : null}
                    <Button sx={btnBase} onClick={handleClose}>
                      ❮ BACK
                    </Button>
                  </Box>

                  {selectedProject.images?.length ? (
                    <Box
                      sx={{
                        mt: 2.8,
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                        gap: 1.6,
                      }}
                    >
                      {selectedProject.images.map((src, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            borderRadius: "12px",
                            border: `1px solid ${colors.border}`,
                            background: colors.bgPanelAlt,
                            padding: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            aspectRatio: "9 / 16",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            component="img"
                            src={src}
                            alt="Project screenshot"
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              borderRadius: "8px",
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Box sx={{ mt: 2.4 }}>
                      <Typography sx={{ fontFamily: mono, fontWeight: 600, color: colors.textDim, fontSize: "0.9rem", opacity: 0.7 }}>
                        {"// screenshots coming soon"}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </TerminalWindow>
    </Box>
  );
};

export default ProjectsSection;