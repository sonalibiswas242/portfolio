// src/components/ContactSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box 
      id="contact" 
      sx={{ 
        padding: { xs: '40px 20px', md: '30px 0px 0px 0px' }, 
        textAlign: 'center' 
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#3d2c1e',
          textShadow: '0px 0px 8px rgba(255,255,255,0.5)',
        }}
      >
        Contact Me
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '500',
          marginBottom: '40px',
          color: '#5c4033',
          textShadow: '0px 0px 6px rgba(255,255,255,0.4)',
          px: { xs: 2, md: 0 },
        }}
      >
        Working on something exciting? I would love to collaborate!
      </Typography>

      {/* Links Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: { xs: 2, md: 3 }, 
          maxWidth: '700px', 
          mx: 'auto' 
        }}
      >
        <Button
          component="a"
          href="mailto:sonalibiswas242@gmail.com"
          startIcon={<FaEnvelope />}
          sx={linkButtonStyle}
        >
          Email
        </Button>

        <Button
          component="a"
          href="https://www.linkedin.com/in/sonalibiswas242/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<FaLinkedin />}
          sx={linkButtonStyle}
        >
          LinkedIn
        </Button>

        <Button
          component="a"
          href="https://github.com/sonalibiswas242"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<FaGithub />}
          sx={linkButtonStyle}
        >
          GitHub
        </Button>

        <Button
          component="a"
          href="https://x.com/Shonaaaliii"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<FaTwitter />}
          sx={linkButtonStyle}
        >
          Twitter
        </Button>
      </Box>
    </Box>
  );
};

// 🔥 Button Style
const linkButtonStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  textTransform: 'none',
  background: 'rgba(255, 255, 255, 0.1)',
  color: '#3d2c1e',
  padding: '10px 20px',
  borderRadius: '12px',
  backdropFilter: 'blur(8px)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
  },
};

export default ContactSection;
