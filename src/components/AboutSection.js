// src/components/AboutSection.js
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: { xs: 'auto', md: '90vh' }, // Not fixed height, only on large screens
        padding: { xs: '60px 20px 20px 20px', md: '80px 20px' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: { xs: '20px', md: '60px' }, // Add space below profile
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.07)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(255, 182, 193, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: { xs: '20px', md: '30px' },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              color: '#3d2c1e',
              textShadow: '0px 0px 8px rgba(255, 255, 255, 0.5)',
              marginBottom: '20px',
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: '1.8',
              color: '#3d2c1e',
              textShadow: '0px 0px 6px rgba(255, 255, 255, 0.4)',
              textAlign: 'justify',
            }}
          >
            I am currently pursuing my Master's degree in <strong>Computer Science</strong> at the <strong>University of California, Riverside</strong>, where I am refining my skills in the Data Science domain. I earned my Bachelor's degree in <strong>Computer Engineering</strong> from <strong>Savitribai Phule Pune University</strong> in India, where I built a strong foundation in Computer Science fundamentals.

My major interest lies in <strong>Web Development</strong> and <strong>Mobile Application Development</strong>. I love integrating complex designs with various backend features to build solutions that address issues we face in day-to-day life. Being a <strong>Mobile App Developer Intern</strong> for <strong>Wecofy</strong> gave me hands-on experience in designing, developing, and integrating APIs, which strengthened my interest in app development. This experience not only helped me gain knowledge of the basics of development but also gave me idea of industry-scale and standard application, which further became the building block of my projects.

My recent interest in <strong>Data Science</strong> and <strong>Machine Learning</strong> developed during my coursework at UCR, and I am actively working towards advancing my knowledge in these fields. The courses I have taken during my Master's Program have shaped my understanding and deepened my interest in the domain of Data Science and Machine Learning.

Currently, I am working on my Capstone Project under the mentorship of <strong>Professor Mariam Salloum</strong>, which blends my interests in <strong>Ethical Responsibility, </strong><strong>Data Science and Machine Learning</strong> — allowing me to delve deeper into these fields.


          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutSection;
