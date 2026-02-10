import React, { useState } from "react";
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

const panelBg = "#fffaf0";
const borderDark = "rgba(45,42,38,0.28)";
const green = "rgba(20,120,80,0.92)";
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const NAV = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Status", target: "more" }, // ✅ replaces "More"
  { label: "Contact", target: "contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        top: { xs: 12, md: 18 },
        right: { xs: 12, md: 22 },
        zIndex: 50,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 1,
        px: 1,
        pointerEvents: "none", // ✅ allows background click-through except controls
      }}
    >
      {/* Desktop */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, pointerEvents: "auto" }}>
        {NAV.map(({ label, target }) => (
          <Button key={label} onClick={() => handleScroll(target)} sx={navBtn}>
            {label}
          </Button>
        ))}
      </Box>

      {/* Mobile menu */}
      <Box sx={{ display: { xs: "flex", md: "none" }, pointerEvents: "auto" }}>
        <IconButton onClick={toggleDrawer(true)} sx={menuBtn}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: "rgba(0,0,0,0.25)" },
          },
        }}
        PaperProps={{
          sx: {
            width: 280,
            background: panelBg,
            borderLeft: `2px solid ${borderDark}`,
            boxShadow: "-10px 0 0 rgba(45,42,38,0.10)",
            backgroundImage:
              "linear-gradient(rgba(45,42,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,42,38,0.05) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          },
        }}
      >
        <Box
          sx={{ p: 2.2 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              mb: 1.5,
              border: `2px solid ${borderDark}`,
              borderRadius: "16px",
              background: "#fffdf7",
              boxShadow: "6px 6px 0 rgba(45,42,38,0.12)",
              p: 1.4,
            }}
          >
            <Box sx={{ fontFamily: mono, fontWeight: 900, color: green, letterSpacing: "1px" }}>
              MENU
            </Box>
            <Box
              sx={{
                mt: 0.6,
                fontFamily: mono,
                fontWeight: 700,
                color: "rgba(45,42,38,0.72)",
                fontSize: "0.92rem",
                lineHeight: 1.6,
              }}
            >
              Jump to a section
            </Box>
          </Box>

          <List sx={{ p: 0 }}>
            {NAV.map(({ label, target }) => (
              <ListItem key={label} disablePadding sx={{ mb: 1.1 }}>
                <ListItemButton onClick={() => handleScroll(target)} sx={drawerItem}>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      fontFamily: mono,
                      fontWeight: 900,
                      color: "rgba(45,42,38,0.86)",
                      letterSpacing: "0.2px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button onClick={() => setDrawerOpen(false)} sx={{ ...navBtn, width: "100%", mt: 1.2 }}>
            Close
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

/* =========================
   Styles
   ========================= */
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

const drawerItem = {
  borderRadius: "16px",
  border: `2px solid rgba(45,42,38,0.18)`,
  background: "#fffdf7",
  boxShadow: "4px 4px 0 rgba(45,42,38,0.12)",
  "&:hover": {
    borderColor: "rgba(20,120,80,0.28)",
  },
};

export default Header;
