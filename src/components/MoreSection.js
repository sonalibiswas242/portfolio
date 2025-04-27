import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import animationImg from '../assets/images/animation.png';
import awardImg from '../assets/images/award.png';
import scrollImg from '../assets/images/scroll.png';

const facts = [
  {
    text: "I enjoy developing vibrant animations and designs for my applications",
    image: animationImg,
  },
  {
    text: "Won Second Prize in a Kaggle Championship for Model evaluation",
    image: awardImg,
  },
  {
    text: "I can speak and write four languages — Bengali, Hindi, English, and Marathi!",
    image: scrollImg,
  },
];

const MoreSection = () => {
  return (
    <Box 
      id="more" 
      sx={{ 
        padding: { xs: '50px 20px', md: '80px 0px 100px 0px' }, 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top Heading */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '700',
          marginBottom: '40px',
          color: '#3d2c1e',
          textShadow: '0px 0px 8px rgba(255,255,255,0.5)',
        }}
      >
        More About Me
      </Typography>

      {/* Facts Cards */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: 4,
          marginTop: 4,
        }}
      >
        {facts.map((fact, index) => (
          <Card 
            key={index} 
            sx={{
              width: { xs: '260px', md: '300px' },
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(16px) saturate(120%)',
              WebkitBackdropFilter: 'blur(16px) saturate(120%)',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0px 6px 24px rgba(255, 182, 193, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <CardContent>
              <Box
                component="img"
                src={fact.image}
                alt="fact illustration"
                sx={{
                  width: { xs: 140, md: 180 },
                  height: { xs: 140, md: 180 },
                  objectFit: 'contain',
                  marginBottom: 2,
                  animation: 'float 6s ease-in-out infinite',
                }}
              />

              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '500',
                  color: '#5c4033',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                {fact.text}
              </Typography>

            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Box>
  );
};

export default MoreSection;
