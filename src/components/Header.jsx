import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

/* =========================================================
   Design tokens — "ink on paper" direction.
   Warmer, richer tones than a flat grey-brown; a deeper green
   so the accent actually reads as ink rather than pastel.
   ========================================================= */
const paper = "#fdf8ee";
const paperRaised = "#fffcf4";
const ink = "rgba(38, 32, 24, 0.86)";
const inkFaint = "rgba(38, 32, 24, 0.22)";
const inkBorder = "rgba(38, 32, 24, 0.30)";
const green = "#1f6b4a";
const greenSoft = "rgba(31, 107, 74, 0.14)";
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

// Layered shadow: soft ambient blur (depth) + hard offset (the signature
// "sticker" look) — reads as ink sitting slightly proud of the page.
const cardShadow = (offset = 3) =>
  `0 1px 2px rgba(38,32,24,0.06), 0 4px 10px rgba(38,32,24,0.05), ${offset}px ${offset}px 0 ${inkBorder}`;
const cardShadowHover = (offset = 4) =>
  `0 2px 4px rgba(38,32,24,0.08), 0 6px 14px rgba(38,32,24,0.07), ${offset}px ${offset}px 0 ${inkBorder}`;

const NAV = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Status", target: "more" },
  { label: "Contact", target: "contact" },
];

const Header = () => {
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
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event?.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: { xs: 12, md: 20 },
        left: { xs: 12, md: 24 },
        right: { xs: 12, md: 24 },
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        pointerEvents: "none",
      }}
    >
      {/* Wordmark — a small ink-blot mark instead of a plain dot,
          reinforcing the hand-drawn journal feel */}
      <Box
        component="a"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("home");
        }}
        sx={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: 1.0,
          px: 1.8,
          py: 1.0,
          borderRadius: "12px",
          border: `1.5px solid ${inkBorder}`,
          background: paper,
          boxShadow: cardShadow(3),
          textDecoration: "none",
          fontFamily: mono,
          fontWeight: 800,
          fontSize: "0.9rem",
          color: ink,
          letterSpacing: "0.01em",
          transition: "transform 160ms cubic-bezier(0.34,1.4,0.64,1), box-shadow 160ms ease",
          "&:hover": {
            transform: "translateY(-1.5px)",
            boxShadow: cardShadowHover(4),
          },
        }}
      >
        <Box
          component="span"
          sx={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: green,
            lineHeight: 1,
          }}
        >
          *
        </Box>
        sonali.dev
      </Box>

      {/* Desktop nav — single cohesive pill, deeper ink green for the
          active state, softer resting state so the active item pops */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          pointerEvents: "auto",
          gap: 0.3,
          p: 0.5,
          borderRadius: "14px",
          border: `1.5px solid ${inkBorder}`,
          background: paper,
          boxShadow: cardShadow(3),
        }}
      >
        {NAV.map(({ label, target }) => {
          const active = activeSection === target;
          return (
            <Button
              key={label}
              onClick={() => handleScroll(target)}
              sx={navBtn(active)}
              aria-current={active ? "true" : undefined}
            >
              {label}
            </Button>
          );
        })}
      </Box>

      {/* Mobile menu trigger */}
      <Box sx={{ display: { xs: "flex", md: "none" }, pointerEvents: "auto" }}>
        <IconButton onClick={toggleDrawer(true)} sx={menuBtn} aria-label="Open navigation menu">
          <MenuIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: "rgba(38,32,24,0.30)", backdropFilter: "blur(3px)" },
          },
        }}
        PaperProps={{
          sx: {
            width: 288,
            background: paper,
            borderLeft: `1.5px solid ${inkBorder}`,
            boxShadow: "-12px 0 24px rgba(38,32,24,0.10)",
            backgroundImage:
              "linear-gradient(rgba(38,32,24,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(38,32,24,0.045) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          },
        }}
      >
        <Box sx={{ p: 2.4 }} role="presentation" onKeyDown={toggleDrawer(false)}>
          <Box
            sx={{
              mb: 2.0,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 1,
              border: `1.5px solid ${inkBorder}`,
              borderRadius: "14px",
              background: paperRaised,
              boxShadow: cardShadow(4),
              p: 1.6,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                  fontFamily: mono,
                  fontWeight: 900,
                  color: green,
                  letterSpacing: "0.06em",
                  fontSize: "0.82rem",
                }}
              >
                <Box component="span" sx={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1rem" }}>
                  *
                </Box>
                MENU
              </Box>
              <Box
                sx={{
                  mt: 0.7,
                  fontFamily: mono,
                  fontWeight: 600,
                  color: "rgba(38,32,24,0.6)",
                  fontSize: "0.86rem",
                  lineHeight: 1.6,
                }}
              >
                Jump to a section
              </Box>
            </Box>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              sx={{
                width: 32,
                height: 32,
                mt: -0.2,
                mr: -0.2,
                borderRadius: "9px",
                border: `1.5px solid ${inkBorder}`,
                background: paper,
                color: "rgba(38,32,24,0.7)",
                boxShadow: `2px 2px 0 ${inkBorder}`,
                transition: "transform 140ms ease, background 140ms ease",
                "&:hover": { background: paperRaised, transform: "translateY(-1px)" },
              }}
            >
              <CloseIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Box>

          <List sx={{ p: 0, display: "flex", flexDirection: "column", gap: 1.0 }}>
            {NAV.map(({ label, target }) => {
              const active = activeSection === target;
              return (
                <ListItem key={label} disablePadding>
                  <ListItemButton
                    onClick={() => handleScroll(target)}
                    sx={drawerItem(active)}
                    aria-current={active ? "true" : undefined}
                  >
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontFamily: mono,
                        fontWeight: 800,
                        color: active ? green : ink,
                        letterSpacing: "0.01em",
                        fontSize: "0.94rem",
                      }}
                    />
                    {active && (
                      <Box
                        component="span"
                        sx={{
                          fontFamily: "Georgia, serif",
                          fontStyle: "italic",
                          fontSize: "1rem",
                          color: green,
                          lineHeight: 1,
                        }}
                      >
                        *
                      </Box>
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

/* =========================
   Styles
   ========================= */
const navBtn = (active) => ({
  borderRadius: "10px",
  px: 1.7,
  py: 0.8,
  minWidth: 0,
  fontWeight: active ? 800 : 700,
  textTransform: "none",
  fontFamily: mono,
  fontSize: "0.85rem",
  letterSpacing: "0.01em",
  border: "1.5px solid transparent",
  background: active ? greenSoft : "transparent",
  color: active ? green : "rgba(38,32,24,0.66)",
  boxShadow: "none",
  transition: "transform 140ms ease, background 160ms ease, color 160ms ease",
  "&:hover": {
    transform: "translateY(-1px)",
    background: active ? greenSoft : "rgba(38,32,24,0.045)",
    color: green,
  },
  "&:active": {
    transform: "translateY(0.5px)",
  },
});

const menuBtn = {
  width: 46,
  height: 46,
  borderRadius: "13px",
  border: `1.5px solid ${inkBorder}`,
  background: paper,
  color: green,
  boxShadow: cardShadow(3),
  transition: "transform 160ms cubic-bezier(0.34,1.4,0.64,1), box-shadow 160ms ease",
  "&:hover": {
    transform: "translateY(-1.5px)",
    boxShadow: cardShadowHover(4),
  },
};

const drawerItem = (active) => ({
  borderRadius: "13px",
  border: `1.5px solid ${active ? "rgba(31,107,74,0.38)" : inkBorder}`,
  background: active ? greenSoft : paperRaised,
  boxShadow: active ? "none" : cardShadow(3),
  px: 1.6,
  py: 1.2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "transform 140ms ease, border-color 140ms ease, background 140ms ease",
  "&:hover": {
    transform: "translateX(2px)",
    borderColor: "rgba(31,107,74,0.38)",
  },
});

export default Header;