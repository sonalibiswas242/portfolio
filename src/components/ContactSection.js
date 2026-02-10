import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const panelBg = "#fffaf0";
const borderDark = "rgba(45,42,38,0.28)";
const borderLight = "rgba(255,255,255,0.85)";
const green = "rgba(20,120,80,0.92)";
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
const pixel = '"Press Start 2P", system-ui';

const btnPixelBase = {
  borderRadius: "14px",
  px: 2.0,
  py: 1.05,
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

const btnPixelPrimary = {
  ...btnPixelBase,
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

const iconStyle = { color: green, fontSize: 18 };

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        padding: { xs: "58px 16px 40px", md: "78px 16px 60px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 1160,
          borderRadius: "22px",
          position: "relative",
          background: panelBg,
          border: `2px solid ${borderDark}`,
          boxShadow: `10px 10px 0 rgba(45,42,38,0.16)`,

          /* subtle grid */
          backgroundImage:
            "linear-gradient(rgba(45,42,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,42,38,0.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",

          "&:before": {
            content: '""',
            position: "absolute",
            inset: 10,
            borderRadius: "16px",
            border: `2px solid ${borderLight}`,
            pointerEvents: "none",
            opacity: 0.7,
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2.2, md: 3.0 } }}>
          {/* Header */}
          <Typography
            sx={{
              fontFamily: pixel,
              fontWeight: 900,
              fontSize: { xs: "14px", sm: "16px" },
              color: green,
              letterSpacing: "1px",
              textAlign: "left",
            }}
          >
            CONTACT
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              fontFamily: mono,
              fontWeight: 900,
              fontSize: { xs: "1.25rem", md: "1.7rem" },
              color: "rgba(45,42,38,0.92)",
              textAlign: "left",
            }}
          >
            Let’s build something that feels great to use.
          </Typography>

          <Typography
            sx={{
              mt: 1.0,
              fontFamily: mono,
              fontWeight: 650,
              fontSize: { xs: "0.92rem", md: "0.98rem" },
              color: "rgba(45,42,38,0.70)",
              lineHeight: 1.9,
              textAlign: "left",
              maxWidth: 900,
            }}
          >
            If you’re hiring for entry-level software roles or want to collaborate on a project,
            I’d love to chat. The fastest way to reach me is email — and you can also find my work on GitHub.
          </Typography>

          {/* Divider */}
          <Box sx={{ mt: 2.6, borderTop: "2px dashed rgba(45,42,38,0.18)", pt: 2.2 }} />

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.3,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Button
              component="a"
              href="mailto:sonalibiswas242@gmail.com"
              startIcon={<FaEnvelope style={{ color: "#fffdf7", fontSize: 18 }} />}
              sx={btnPixelPrimary}
            >
              Email Me
            </Button>

            <Button
              component="a"
              href="https://www.linkedin.com/in/sonalibiswas242/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaLinkedin style={iconStyle} />}
              sx={btnPixelBase}
            >
              LinkedIn
            </Button>

            <Button
              component="a"
              href="https://github.com/sonalibiswas242"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaGithub style={iconStyle} />}
              sx={btnPixelBase}
            >
              GitHub
            </Button>

            <Button
              component="a"
              href="https://x.com/Shonaaaliii"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaTwitter style={iconStyle} />}
              sx={btnPixelBase}
            >
              Twitter
            </Button>
          </Box>

          {/* Tiny footer line */}
          <Typography
            sx={{
              mt: 2.2,
              fontFamily: mono,
              fontWeight: 650,
              fontSize: "0.88rem",
              color: "rgba(45,42,38,0.62)",
              textAlign: "left",
            }}
          >
            Tip: include “Portfolio” in your subject — I’ll respond faster! (And I’ll know you’re not a bot.)
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
