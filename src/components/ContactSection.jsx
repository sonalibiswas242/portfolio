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
  transition: "transform 160ms cubic-bezier(0.34,1.4,0.64,1), box-shadow 160ms ease, border-color 160ms ease",
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
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.0 }}>
          
          <Typography
            sx={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: { xs: "1.3rem", md: "1.7rem" },
              color: colors.textPrimary,
              textAlign: "left",
            }}
          >
            Let’s build something that feels great to use.
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 1.2,
            fontFamily: mono,
            fontWeight: 500,
            fontSize: { xs: "0.88rem", md: "0.94rem" },
            color: colors.textDim,
            lineHeight: 1.9,
            textAlign: "left",
            maxWidth: 780,
          }}
        >
          If you're hiring for entry-level software roles or want to collaborate on a project,
          I'd love to chat. The fastest way to reach me is email — and you can also find my work on GitHub.
        </Typography>

        {/* Divider with inline label instead of a bare rule — small
            detail, but it reads as intentional structure not filler */}
        <Box sx={{ mt: 3.0, mb: 2.4, display: "flex", alignItems: "center", gap: 1.4 }}>
          <Box sx={{ flex: 1, borderTop: `1px dashed ${colors.border}` }} />
          <Typography sx={{ fontFamily: mono, fontWeight: 700, fontSize: "0.72rem", color: colors.textDim, opacity: 0.55, letterSpacing: "0.04em" }}>
            REACH_OUT
          </Typography>
          <Box sx={{ flex: 1, borderTop: `1px dashed ${colors.border}` }} />
        </Box>

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

        {/* Tip line, styled as a terminal comment for consistency with
            the rest of the site's `// comment` motif */}
        <Box
          sx={{
            mt: 2.8,
            px: 1.4,
            py: 1.0,
            borderRadius: "6px",
            border: `1px dashed ${colors.border}`,
            background: colors.bgPanelAlt,
            display: "inline-flex",
          }}
        >
          <Typography
            sx={{
              fontFamily: mono,
              fontWeight: 600,
              fontSize: "0.82rem",
              color: colors.textDim,
              opacity: 0.85,
              textAlign: "left",
            }}
          >
            <Box component="span" sx={{ color: colors.neonGreen, opacity: 0.8 }}>
              {"// "}
            </Box>
            tip: include "Portfolio" in your subject line — I'll know you're not a bot.
          </Typography>
        </Box>
      </TerminalWindow>
    </Box>
  );
}