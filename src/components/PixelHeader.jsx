import React, { useEffect, useState } from "react";
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { fonts, colors, neonBox } from "../theme";

const { mono } = fonts;

const NAV = [
  { label: "HOME", target: "home", accent: colors.neonGreen },
  { label: "ABOUT", target: "about", accent: colors.neonCyan },
  { label: "PROJECTS", target: "projects", accent: colors.neonMagenta },
  { label: "STATUS", target: "more", accent: colors.neonAmber },
  { label: "CONTACT", target: "contact", accent: colors.neonGreen },
];

function NavLink({ label, accent, active, onClick }) {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        position: "relative",
        appearance: "none",
        background: "transparent",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontFamily: mono,
        fontWeight: 800,
        fontSize: "0.86rem",
        letterSpacing: "0.02em",
        color: active ? accent : colors.textDim,
        px: 1.0,
        py: 0.55,
        transition: "color 140ms ease, transform 140ms ease",
        "&:hover": { color: accent, transform: "translateY(-1px)" },
        "&:active": { transform: "translateY(0) scale(0.96)" },
        "&::after": {
          content: '""',
          position: "absolute",
          left: 8,
          right: 8,
          bottom: -1,
          height: 2,
          background: accent,
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 180ms ease",
        },
        "&:hover::after": { transform: "scaleX(1)" },
      }}
    >
      [ {label} ]
    </Box>
  );
}

export default function PixelHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV.map(({ target }) => document.getElementById(target)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Nav bar — same terminal-window chrome as the cards below */}
      <Box
        sx={{
          position: "fixed",
          top: { xs: 10, md: 16 },
          left: { xs: 10, md: 20 },
          right: { xs: 10, md: 20 },
          zIndex: 60,
          height: { xs: 54, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 1.6, md: 2 },
          borderRadius: "12px",
          background: colors.bgPanel,
          border: `1px solid ${colors.border}`,
          boxShadow: `0 14px 30px rgba(0,0,0,0.45), ${neonBox(colors.neonGreen, 10, 14)}`,
        }}
      >
        {/* Traffic-light dots, matching every card's title bar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 0.6 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0.8,
              ml: 1.4,
              pl: 1.4,
              borderLeft: `1px solid ${colors.border}`,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: colors.neonGreen,
                boxShadow: `0 0 4px 1px ${colors.neonGreen}99`,
                animation: "navLedPulse 1.8s ease-in-out infinite",
                "@keyframes navLedPulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.35 },
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: mono,
                fontWeight: 700,
                fontSize: { xs: "0.76rem", md: "0.84rem" },
                color: colors.textDim,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ~/sonali
            </Typography>
          </Box>
        </Box>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.6 }}>
          {NAV.map(({ label, target, accent }) => (
            <NavLink
              key={label}
              label={label}
              accent={accent}
              active={activeSection === target}
              onClick={() => handleScroll(target)}
            />
          ))}
        </Box>

        {/* Mobile menu */}
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            width: 40,
            height: 40,
            borderRadius: "8px",
            border: `1px solid ${colors.border}`,
            background: colors.bgPanelAlt,
            color: colors.neonGreen,
          }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          BackdropProps: { style: { backgroundColor: "rgba(0,0,0,0.6)" } },
        }}
        PaperProps={{
          sx: {
            width: 270,
            background: colors.bgDeep,
            borderLeft: `1px solid ${colors.border}`,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              borderRadius: "12px",
              border: `1px solid ${colors.border}`,
              background: colors.bgPanel,
              boxShadow: `0 10px 24px rgba(0,0,0,0.4), ${neonBox(colors.neonGreen, 8, 12)}`,
              overflow: "hidden",
              mb: 1.6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: 1.4,
                py: 1,
                background: colors.bgPanelAlt,
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f56" }} />
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", background: "#ffbd2e" }} />
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", background: "#27c93f" }} />
            </Box>
            <Box sx={{ p: 1.4 }}>
              <Typography sx={{ fontFamily: mono, fontWeight: 900, fontSize: "0.86rem", color: colors.textPrimary }}>
                menu.sh
              </Typography>
              <Typography sx={{ mt: 0.4, fontFamily: mono, color: colors.textDim, fontSize: "0.78rem" }}>
                $ jump --section
              </Typography>
            </Box>
          </Box>

          <List sx={{ p: 0 }}>
            {NAV.map(({ label, target, accent }) => {
              const active = activeSection === target;
              return (
                <ListItem key={label} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleScroll(target)}
                    sx={{
                      borderRadius: "10px",
                      border: `1px solid ${active ? accent : colors.border}`,
                      background: active ? `${accent}14` : colors.bgPanel,
                      "&:hover": { borderColor: accent },
                    }}
                  >
                    <ListItemText
                      primary={`[ ${label} ]`}
                      primaryTypographyProps={{
                        fontFamily: mono,
                        fontWeight: 800,
                        color: active ? accent : colors.textPrimary,
                        fontSize: "0.86rem",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
