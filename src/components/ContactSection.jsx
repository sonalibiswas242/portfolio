import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { fonts, colors, glow } from "../theme";
import TerminalWindow from "./TerminalWindow";

const { mono, display } = fonts;

const btnPixelBase = {
  borderRadius: "4px",
  px: 2.0,
  py: 1.05,
  fontWeight: 800,
  textTransform: "none",
  fontFamily: mono,
  letterSpacing: "0.2px",
  border: `1px solid ${colors.border}`,
  background: colors.bgPanelAlt,
  color: colors.textPrimary,
  transition: "transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: colors.neonGreen,
    boxShadow: glow(colors.neonGreen, 12),
  },
  "&:active": {
    transform: "translateY(0) scale(0.96)",
  },
};

const btnPixelPrimary = {
  ...btnPixelBase,
  border: `1px solid ${colors.neonMagenta}`,
  background: "rgba(255,77,141,0.14)",
  color: colors.neonMagenta,
  boxShadow: glow(colors.neonMagenta, 12),
  "&:hover": {
    transform: "translateY(-2px)",
    background: "rgba(255,77,141,0.24)",
    boxShadow: glow(colors.neonMagenta, 20),
  },
  "&:active": {
    transform: "translateY(0) scale(0.96)",
  },
};

const iconStyle = { color: colors.neonGreen, fontSize: 18 };

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
      <TerminalWindow title="~/contact.sh" command="./contact.sh --send" accent={colors.neonMagenta} maxWidth={1300} dataAos="fade-left">

        <Typography
          sx={{
            mt: 1.2,
            fontFamily: display,
            fontWeight: 700,
            fontSize: { xs: "1.3rem", md: "1.7rem" },
            color: colors.textPrimary,
            textAlign: "left",
          }}
        >
          Let’s build something that feels great to use.
        </Typography>

        <Typography
          sx={{
            mt: 1.0,
            fontFamily: mono,
            fontWeight: 500,
            fontSize: { xs: "0.88rem", md: "0.94rem" },
            color: colors.textDim,
            lineHeight: 1.9,
            textAlign: "left",
            maxWidth: 900,
          }}
        >
          If you’re hiring for entry-level software roles or want to collaborate on a project,
          I’d love to chat. The fastest way to reach me is email — and you can also find my work on GitHub.
        </Typography>

        {/* Divider */}
        <Box sx={{ mt: 2.6, borderTop: `1px dashed ${colors.border}`, pt: 2.2 }} />

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
            href="mailto:sonalibiswas.codes@gmail.com"
            startIcon={<FaEnvelope style={{ color: colors.neonMagenta, fontSize: 18 }} />}
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
            fontWeight: 600,
            fontSize: "0.86rem",
            color: colors.textDim,
            textAlign: "left",
          }}
        >
          Tip: include “Portfolio” in your subject — I’ll respond faster! (And I’ll know you’re not a bot.)
        </Typography>
      </TerminalWindow>
    </Box>
  );
}
