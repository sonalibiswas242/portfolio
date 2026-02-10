import React, { useState } from "react";
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const panelBg = "#fffaf0";
const borderDark = "rgba(45,42,38,0.28)";
const green = "rgba(20,120,80,0.92)";
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
const pixel = '"Press Start 2P", system-ui';

const NAV = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Status", target: "more" },
  { label: "Contact", target: "contact" },
];

const navBtn = {
  borderRadius: "14px",
  px: 1.8,
  py: 1.0,
  fontWeight: 900,
  textTransform: "none",
  fontFamily: mono,
  letterSpacing: "0.2px",
  border: `2px solid ${borderDark}`,
  background: panelBg,
  color: "rgba(45,42,38,0.86)",
  boxShadow: `3px 3px 0 ${borderDark}`,
  transition: "transform 140ms ease, box-shadow 140ms ease, background 140ms ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: `4px 4px 0 ${borderDark}`,
    background: "#fffdf7",
  },
  "&:active": {
    transform: "translateY(1px)",
    boxShadow: `2px 2px 0 ${borderDark}`,
  },
};

const navBtnPrimary = {
  ...navBtn,
  background: "rgba(20,120,80,0.92)",
  color: "#fffaf0",
  border: "2px solid rgba(16,92,62,0.95)",
  boxShadow: "3px 3px 0 rgba(16,92,62,0.95)",
  "&:hover": {
    background: "rgba(20,120,80,0.98)",
    boxShadow: "4px 4px 0 rgba(16,92,62,0.95)",
  },
  "&:active": {
    boxShadow: "2px 2px 0 rgba(16,92,62,0.95)",
  },
};

const menuBtn = {
  width: 50,
  height: 50,
  borderRadius: "16px",
  border: `2px solid ${borderDark}`,
  background: panelBg,
  color: green,
  boxShadow: `3px 3px 0 ${borderDark}`,
  transition: "transform 140ms ease, box-shadow 140ms ease, background 140ms ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: `4px 4px 0 ${borderDark}`,
    background: "#fffdf7",
  },
  "&:active": {
    transform: "translateY(1px)",
    boxShadow: `2px 2px 0 ${borderDark}`,
  },
};

export default function PixelHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Fixed header (top-right) */}
      <Box
        sx={{
          position: "fixed",
          top: { xs: 12, md: 18 },
          right: { xs: 12, md: 22 },
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* Desktop buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {NAV.map(({ label, target }) => (
            <Button
              key={label}
              onClick={() => handleScroll(target)}
              sx={label === "Contact" ? navBtnPrimary : navBtn}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Mobile menu */}
        <IconButton sx={{ display: { xs: "flex", md: "none" }, ...menuBtn }} onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          BackdropProps: { style: { backgroundColor: "rgba(0,0,0,0.25)" } },
        }}
        PaperProps={{
          sx: {
            width: 290,
            background: panelBg,
            borderLeft: `2px solid ${borderDark}`,
            boxShadow: "-10px 0 0 rgba(45,42,38,0.10)",
            backgroundImage:
              "linear-gradient(rgba(45,42,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,42,38,0.05) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          },
        }}
      >
        <Box sx={{ p: 2.2 }}>
          {/* Drawer title */}
          <Box
            sx={{
              borderRadius: "18px",
              border: `2px solid ${borderDark}`,
              background: "#fffdf7",
              boxShadow: "6px 6px 0 rgba(45,42,38,0.12)",
              p: 1.5,
              mb: 1.6,
            }}
          >
            <Typography
              sx={{
                fontFamily: pixel,
                fontSize: "12px",
                color: green,
                letterSpacing: "1px",
              }}
            >
              MENU
            </Typography>
            <Typography
              sx={{
                mt: 0.8,
                fontFamily: mono,
                fontWeight: 800,
                color: "rgba(45,42,38,0.72)",
                fontSize: "0.92rem",
              }}
            >
              Jump to a section
            </Typography>
          </Box>

          <List sx={{ p: 0 }}>
            {NAV.map(({ label, target }) => (
              <ListItem key={label} disablePadding sx={{ mb: 1.1 }}>
                <ListItemButton
                  onClick={() => handleScroll(target)}
                  sx={{
                    borderRadius: "16px",
                    border: `2px solid rgba(45,42,38,0.18)`,
                    background: "#fffdf7",
                    boxShadow: "4px 4px 0 rgba(45,42,38,0.12)",
                    "&:hover": { borderColor: "rgba(20,120,80,0.30)" },
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      fontFamily: mono,
                      fontWeight: 900,
                      color: "rgba(45,42,38,0.86)",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button sx={{ ...navBtn, width: "100%", mt: 0.6 }} onClick={() => setDrawerOpen(false)}>
            Close
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
