// src/components/Profile.js
import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import MoreSection from './MoreSection';
import Header from './Header';
import { keyframes } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: 'transparent',
        padding: { xs: '10px', sm: '20px' }, 
      }}
    >
      {/* Header */}
      <Header />

      {/* Profile Card */}
      <Card 
        sx={{
          maxWidth: 1100,
          marginTop: '50px',
          width: { xs: '75%', md: '950px' },
          height: { xs: 'auto', md: '430px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px',
          padding: '50px',
          background: 'rgba(255, 255, 255, 0.07)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(255, 182, 193, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
        id="home"
        data-aos="fade-up"
      >
        <CardContent 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            width: '100%',
            gap: { xs: 4, md: 0 },
          }}
        >
          {/* Text Side */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              paddingRight: { md: '30px' },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#3d2c1e',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700',
                letterSpacing: '2px',
                textShadow: '0px 0px 8px rgba(255, 255, 255, 0.6)',
                animation: `${fadeSlideUp} 2.5s ease-out forwards`,
                marginBottom: '20px',
                opacity: 0,
              }}
            >
              {text}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#3d2c1e',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                letterSpacing: '1px',
                marginTop: '20px',
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                lineHeight: '1.6',
                textAlign: { xs: 'center', md: 'left' },
                textShadow: '0px 0px 8px rgba(255, 255, 255, 0.6)',
                animation: `${fadeSlideUp} 2s ease-out forwards`,
                animationDelay: '2.5s',
                opacity: 0,
              }}
            >
              I am a Full Stack Web Developer <br /> and Mobile App Developer
            </Typography>

            {/* Social Icons */}
            <Box sx={{ marginTop: '25px', display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
              <IconButton href="mailto:sonalibiswas242@gmail.com" target="_blank" sx={iconButtonStyle('#fb6f92')}>
                <Email sx={{ fontSize: 38 }}/>
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/sonalibiswas242/" target="_blank" sx={iconButtonStyle('#5465ff')}>
                <LinkedIn sx={{ fontSize: 38 }}/>
              </IconButton>
              <IconButton href="https://github.com/sonalibiswas242" target="_blank" sx={iconButtonStyle('#3d2c1e')}>
                <GitHub sx={{ fontSize: 38 }}/>
              </IconButton>
              <IconButton href="https://x.com/Shonaaaliii" target="_blank" sx={iconButtonStyle('#abc4ff')}>
                <Twitter sx={{ fontSize: 38 }}/>
              </IconButton>
            </Box>
          </Box>

          {/* Image Side */}
          <Box
            sx={{
              width: { xs: 200, sm: 250, md: 280 },
              height: { xs: 200, sm: 250, md: 280 },
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0px 8px 30px rgba(255, 182, 193, 0.7)',
              border: '5px solid rgba(255, 192, 203, 0.6)',
              background: 'linear-gradient(135deg, rgba(255,192,203,0.3), rgba(255,228,225,0.2))',
              transition: 'all 0.4s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 50px rgba(255, 192, 203, 0.8)',
              },
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }
            }}
          >
            <img src={require('../assets/images/profile.jpg')} alt="Sonali" />
          </Box>
        </CardContent>
      </Card>

      {/* About Section */}
      <Box id="about" data-aos="fade-up" sx={{ padding: { xs: '20px 0', md: '30px 0' }, display: 'flex', justifyContent: 'center' }}>
        <AboutSection />
      </Box>

      {/* Projects Section */}
      <Box id="projects" data-aos="zoom-in-up" sx={{ padding: { xs: '10px 0', md: '0px 0' }, textAlign: 'center' }}>
        <ProjectsSection />
      </Box>

      {/* More Section */}
      <Box id="more" data-aos="fade-up" sx={{ padding: { xs: '30px 0', md: '10px 0' }, display: 'flex', justifyContent: 'center' }}>
        <MoreSection />
      </Box>

      {/* Contact Section */}
      <Box id="contact" data-aos="fade-up" sx={{ padding: { xs: '30px 0', md: '20px 0' }, textAlign: 'center' }}>
        <ContactSection />
      </Box>
    </Box>
  );
};


const iconButtonStyle = (color) => ({
  color: color,
  transition: 'all 0.4s ease',
  '&:hover': {
    color: '#ffffff',
    transform: 'scale(1.2)',
    textShadow: '0px 0px 12px rgba(255, 255, 255, 0.8)',
  },
});

export default Profile;
