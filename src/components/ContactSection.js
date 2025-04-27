// src/components/Profile.js
import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { keyframes } from '@mui/material/styles';

const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Profile = () => {
  const text = "Hello! I am Sonali";

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #e2eafc, #d7e3fc, #ccdbfd)',
        padding: 2,
      }}
    >
      <Card
        sx={{
          animation: `${fadeSlideUp} 1s ease`,
          padding: 4,
          borderRadius: 4,
          boxShadow: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // transparent white
          backdropFilter: 'blur(10px)', // glass effect
          maxWidth: 500,
          textAlign: 'center',
        }}
        data-aos="fade-up"
      >
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            {text}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            I am a Full Stack Web Developer and Mobile App Developer
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton
              component="a"
              href="mailto: sonalibiswas242@gmail.com" // optional email
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/sonalibiswas242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/sonalibiswas242" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub fontSize="large" />
            </IconButton>

            

            <IconButton
              component="a"
              href="https://x.com/Shonaaaliii" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter fontSize="large" />
            </IconButton>

            
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
