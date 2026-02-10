// src/components/ProjectsSection.js
import React, { useMemo, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Modal } from "@mui/material";

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
const SECTION_MAX = 1100;

const panelBg = "#fffaf0";
const borderDark = "rgba(45,42,38,0.22)";
const green = "rgba(20,120,80,0.92)";

const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
const pixel = '"Press Start 2P", system-ui';

const btnBase = {
  borderRadius: "14px",
  px: 2.0,
  py: 1.0,
  fontWeight: 900,
  textTransform: "none",
  fontFamily: mono,
  letterSpacing: "0.2px",
  border: `2px solid ${borderDark}`,
  background: "#fffdf7",
  color: "rgba(45,42,38,0.86)",
  boxShadow: `3px 3px 0 rgba(45,42,38,0.14)`,
  transition: "transform 140ms ease, box-shadow 140ms ease, background 140ms ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: `4px 4px 0 rgba(45,42,38,0.14)`,
    background: "#ffffff",
  },
  "&:active": {
    transform: "translateY(1px)",
    boxShadow: `2px 2px 0 rgba(45,42,38,0.14)`,
  },
};

const btnPrimary = {
  ...btnBase,
  background: green,
  color: "#fffaf0",
  border: "2px solid rgba(16,92,62,0.92)",
  boxShadow: "3px 3px 0 rgba(16,92,62,0.92)",
  "&:hover": {
    background: "rgba(20,120,80,0.98)",
    boxShadow: "4px 4px 0 rgba(16,92,62,0.92)",
  },
};

function Tag({ text }) {
  return (
    <Box
      sx={{
        px: 1.1,
        py: 0.6,
        borderRadius: "999px",
        border: "2px solid rgba(45,42,38,0.14)",
        background: "#fffdf7",
        fontFamily: mono,
        fontWeight: 850,
        fontSize: "0.78rem",
        color: "rgba(45,42,38,0.72)",
        boxShadow: "2px 2px 0 rgba(45,42,38,0.10)",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </Box>
  );
}

function ProjectTile({ project, onOpen }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        background: "rgba(255,253,247,0.92)",
        border: "2px solid rgba(45,42,38,0.16)",
        boxShadow: "6px 6px 0 rgba(45,42,38,0.10)",
        p: 2.0,
        display: "flex",
        flexDirection: "column",
        gap: 1.2,
        transition: "transform 160ms ease, box-shadow 160ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "8px 8px 0 rgba(45,42,38,0.12)",
        },
      }}
    >
      <Typography sx={{ fontFamily: mono, fontWeight: 900, fontSize: "1.02rem", color: "rgba(45,42,38,0.92)" }}>
        {project.name}
      </Typography>

      <Typography
        sx={{
          fontFamily: mono,
          fontWeight: 650,
          fontSize: "0.92rem",
          lineHeight: 1.75,
          color: "rgba(45,42,38,0.70)",
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

      <Box sx={{ display: "flex", gap: 1.2, mt: 0.5, flexWrap: "wrap" }}>
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
        shortDescription: "Gemini-powered travel planner that generates itineraries in seconds (React Native + Firebase).",
        longDescription:
          "Resfeber creates personalized itineraries fast, so users spend less time planning and more time exploring. Built with React Native, Firebase/Firestore, and Expo — powered by Gemini AI for itinerary generation.",
        github: "https://github.com/sonalibiswas242/Resfeber",
        stack: ["React Native", "Firebase", "Firestore", "Gemini"],
        images: [resfeber1, resfeber2, resfeber3, resfeber4, resfeber5],
      },
      {
        name: "Nourish",
        shortDescription: "Food donation app connecting donors and NGOs with location-based matching.",
        longDescription:
          "Nourish streamlines food donation by connecting donors with recipient organizations through a structured flow and location-aware matching.",
        github: "https://github.com/kalp-77/FoodDonation",
        paper: "https://www.ijraset.com/best-journal/nourish-food-donation-app-using-android-and-ml",
        stack: ["Android", "Geofencing", "DBMS", "UAT"],
        images: [nourish1, nourish2, nourish3, nourish4, nourish5, nourish6],
      },
      {
        name: "FairRecruit",
        shortDescription: "Explores fairer hiring signals and reducing bias in automated screening.",
        longDescription:
          "FairRecruit explores reducing sensitive-name signals and emphasizing skill-based evaluation in screening workflows. (Update with your exact scope/results.)",
        github: "",
        stack: ["ML", "Embeddings", "Evaluation", "Ethics"],
        images: [],
      },
      {
        name: "SpatioHealth",
        shortDescription: "Spatial + health project using location-aware analytics and visualization.",
        longDescription:
          "SpatioHealth explores health-related insights through location-aware analytics, spatial patterns, and visualization. (Update with your exact features.)",
        github: "https://github.com/sonalibiswas242/SpatioHealth",
        stack: ["GIS", "Spatial Data", "Visualization", "Analytics"],
        images: [],
      },
      {
        name: "CalFireInsight",
        shortDescription: "Wildfire insights project using analysis + visualization to spot trends and patterns.",
        longDescription:
          "CalFireInsight analyzes California wildfire data to uncover temporal and regional patterns and present insights through visualizations. (Update with your dataset/methods.)",
        github: "https://github.com/sonalibiswas242/CalFireInsight",
        stack: ["Python", "ETL", "Data Analysis", "Visualization"],
        images: [],
      },
      {
        name: "ClassCapCounter",
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
        shortDescription: "React Native bookstore app with Redux-based cart flows and smooth browsing.",
        longDescription:
          "A React Native app for browsing, buying, and selling books with Redux cart state and responsive UI patterns.",
        github: "https://github.com/sonalibiswas242/BookStoreApp",
        stack: ["React Native", "Redux", "UI"],
        images: [bookstore1, bookstore2, bookstore3, bookstore4],
      },
      {
        name: "Gallery App",
        shortDescription: "Flickr-powered gallery app with caching for faster loading and smoother browsing.",
        longDescription:
          "A React Native app that fetches images from Flickr API and adds caching for better performance and browsing.",
        github: "https://github.com/sonalibiswas242/Gallery-app",
        stack: ["React Native", "Flickr API", "Caching"],
        images: [gallery1, gallery2, gallery3, gallery4],
      },
      {
        name: "Student Report App",
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
        scrollMarginTop: "120px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: SECTION_MAX,
          borderRadius: "22px",
          position: "relative",
          background: panelBg,
          border: `2px solid ${borderDark}`,
          boxShadow: `10px 10px 0 rgba(45,42,38,0.14)`,
          overflow: "hidden",
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
          <Typography sx={{ fontFamily: pixel, fontWeight: 900, fontSize: { xs: 14, sm: 16 }, color: green, letterSpacing: "1px" }}>
            PROJECTS
          </Typography>

          <Typography sx={{ mt: 1.2, fontFamily: mono, fontWeight: 900, fontSize: { xs: "1.25rem", md: "1.7rem" }, color: "rgba(45,42,38,0.92)" }}>
            Things I’ve built
          </Typography>

          <Typography sx={{ mt: 1.0, fontFamily: mono, fontWeight: 650, fontSize: { xs: "0.92rem", md: "0.98rem" }, color: "rgba(45,42,38,0.70)", lineHeight: 1.9, maxWidth: 900 }}>
            A mix of mobile apps, web projects, and experiments — focused on clean UI, solid APIs, and strong fundamentals.
          </Typography>

          {/* Featured */}
          <Box sx={{ mt: 3.0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2.0 }}>
            {projects.featured.map((p) => (
              <ProjectTile key={p.name} project={p} onOpen={handleOpen} />
            ))}
          </Box>

          {/* More */}
          <Box sx={{ mt: 4.0, borderTop: "2px dashed rgba(45,42,38,0.16)", pt: 3.0 }}>
            <Typography sx={{ fontFamily: mono, fontWeight: 900, fontSize: "1.05rem", color: "rgba(45,42,38,0.88)", mb: 1.6 }}>
              More projects
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2.0 }}>
              {projects.other.map((p) => (
                <ProjectTile key={p.name} project={p} onOpen={handleOpen} />
              ))}
            </Box>
          </Box>

          {/* Modal */}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "92%", md: 980 },
                maxHeight: "90vh",
                overflowY: "auto",
                borderRadius: "22px",
                background: panelBg,
                border: `2px solid ${borderDark}`,
                boxShadow: `12px 12px 0 rgba(45,42,38,0.14)`,
                p: { xs: 2.2, md: 3.0 },
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
              {selectedProject && (
                <Box sx={{ position: "relative" }}>
                  <Typography sx={{ fontFamily: mono, fontWeight: 900, fontSize: { xs: "1.35rem", md: "1.9rem" }, color: "rgba(45,42,38,0.92)", mb: 1.2 }}>
                    {selectedProject.name}
                  </Typography>

                  <Typography sx={{ fontFamily: mono, fontWeight: 650, fontSize: { xs: "0.92rem", md: "1.0rem" }, color: "rgba(45,42,38,0.72)", lineHeight: 1.9, maxWidth: 860 }}>
                    {selectedProject.longDescription}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap", mt: 2.2 }}>
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
                      Close
                    </Button>
                  </Box>

                  {/* ✅ Screenshots: ALL projects show as mobile portrait cards (no square cropping) */}
                  {selectedProject.images?.length ? (
                    <Box
                      sx={{
                        mt: 2.6,
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                        gap: 1.6,
                      }}
                    >
                      {selectedProject.images.map((src, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            borderRadius: "18px",
                            border: "2px solid rgba(45,42,38,0.18)",
                            background: "#fffdf7",
                            boxShadow: "6px 6px 0 rgba(45,42,38,0.10)",
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
                              borderRadius: "12px",
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Box sx={{ mt: 2.2 }}>
                      <Typography sx={{ fontFamily: mono, fontWeight: 700, color: "rgba(45,42,38,0.62)", fontSize: "0.92rem" }}>
                        (Screenshots coming soon)
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </Modal>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectsSection;
