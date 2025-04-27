import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Modal } from '@mui/material';
import resfeber1 from '../assets/projects/resfeber1.png';
import resfeber2 from '../assets/projects/resfeber2.png';
import resfeber3 from '../assets/projects/resfeber3.png';
import resfeber4 from '../assets/projects/resfeber4.png';
import resfeber5 from '../assets/projects/resfeber5.png';
import bookstore1 from '../assets/projects/bookstore1.jpg';
import bookstore2 from '../assets/projects/bookstore2.jpg';
import bookstore3 from '../assets/projects/bookstore3.jpg';
import bookstore4 from '../assets/projects/bookstore4.jpg';
import gallery1 from '../assets/projects/gallery1.jpg';
import gallery2 from '../assets/projects/gallery2.jpg';
import gallery3 from '../assets/projects/gallery3.jpg';
import gallery4 from '../assets/projects/gallery4.jpg';
import nourish1 from '../assets/projects/nourish1.jpg';
import nourish2 from '../assets/projects/nourish2.jpg';
import nourish3 from '../assets/projects/nourish3.jpg';
import nourish4 from '../assets/projects/nourish4.jpg';
import nourish5 from '../assets/projects/nourish5.jpg';
import nourish6 from '../assets/projects/nourish6.jpg';
//import classcap from '../assets/projects/classcap.jpg';
import student1 from '../assets/projects/student1.jpg';
import student2 from '../assets/projects/student2.jpg';
import student3 from '../assets/projects/student3.jpg';
import student4 from '../assets/projects/student4.jpg';

const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box id="projects" sx={{ padding: { xs: '50px 20px', md: '80px 0 100px 0' }, textAlign: 'center' }}>

      {/* Title */}
      <Typography variant="h3" sx={titleStyle}>Projects</Typography>

      {/* Major Projects */}
      <Typography variant="h5" sx={sectionTitleStyle}>Major Projects</Typography>

      <Box sx={projectContainerStyle}>
        {majorProjects.map((project, index) => (
          <Card key={index} sx={glassCardStyle}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={cardTitleStyle}>{project.name}</Typography>
              <Typography sx={cardTextStyle}>{project.shortDescription}</Typography>
              <Button sx={buttonStyle} onClick={() => handleOpen(project)}>View Project</Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Minor Projects */}
      <Typography variant="h5" sx={sectionTitleStyle}>Minor Projects</Typography>

      <Box sx={minorProjectContainerStyle}>
        {minorProjects.map((project, index) => (
          <Card key={index} sx={minorGlassCardStyle}>
            <CardContent>
              <Typography variant="h6" sx={cardTitleStyle}>{project.name}</Typography>
              <Typography sx={minorCardTextStyle}>{project.shortDescription}</Typography>
              <Button sx={{ ...buttonStyle, marginTop: '10px', fontSize: '0.9rem' }} onClick={() => handleOpen(project)}>View</Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition BackdropProps={modalBackdropStyle}>
        <Box sx={modalBoxStyle}>
          {selectedProject && (
            <>
              <Typography variant="h3" sx={modalTitleStyle}>{selectedProject.name}</Typography>
              <Typography sx={modalDescriptionStyle}>{selectedProject.longDescription}</Typography>
              <Box sx={linksContainerStyle}>
                {selectedProject.github && <Button href={selectedProject.github} target="_blank" sx={modalButtonStyle}>GitHub Repo</Button>}
                {selectedProject.paper && <Button href={selectedProject.paper} target="_blank" sx={modalButtonStyle}>Research Paper</Button>}
              </Box>
              
              {selectedProject.images && selectedProject.images.length > 0 && (
                <Box sx={modalImagesContainerStyle}>
                  {selectedProject.images.map((imgSrc, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      src={imgSrc}
                      alt="Project Screenshot"
                      sx={selectedProject.name === 'ClassCapCounter' ? classCapImageStyle : projectImageStyle}
                    />
                  ))}
                </Box>
              )}
              <Button onClick={handleClose} sx={{ ...modalButtonStyle, background: 'rgba(255,255,255,0.25)', marginTop: 5 }}>Close</Button>
            </>
          )}
        </Box>
      </Modal>

    </Box>
  );
};

// === Styles ===
const titleStyle = {
  fontFamily: 'Poppins, sans-serif', fontWeight: '700', marginBottom: '40px', color: '#3d2c1e', textShadow: '0px 0px 8px rgba(255,255,255,0.5)', alignItems: 'center'
};
const sectionTitleStyle = {
  fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#5c4033', textShadow: '0px 0px 6px rgba(255,255,255,0.4)', marginBottom: '20px', 
};
const projectContainerStyle = {
  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: 4, marginBottom: '60px', marginTop: '40px'
};
const minorProjectContainerStyle = {
  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '20px'
};
const glassCardStyle = {
  width: { xs: '260px', md: '300px' }, height: '210px', background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,240,220,0.1) 100%)',
  backdropFilter: 'blur(20px) saturate(130%)', borderRadius: '20px', boxShadow: '0px 6px 24px rgba(255, 182, 193, 0.35)', border: '1px solid rgba(255, 223, 186, 0.5)',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', padding: '18px', transition: 'all 0.4s ease',
  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 10px 28px rgba(255, 182, 193, 0.45)' }
};
const minorGlassCardStyle = {
  width: { xs: '180px', md: '220px' }, height: '190px', background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,240,220,0.1) 100%)',
  backdropFilter: 'blur(20px) saturate(130%)', borderRadius: '20px', boxShadow: '0px 6px 24px rgba(255, 182, 193, 0.35)', border: '1px solid rgba(255, 223, 186, 0.5)',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', padding: '18px', transition: 'all 0.4s ease',
  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 10px 28px rgba(255, 182, 193, 0.45)' }
};
const cardTitleStyle = { fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#3d2c1e', marginBottom: '10px' };
const cardTextStyle = { fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '1rem', color: '#5c4033', marginBottom: '15px' };
const minorCardTextStyle = { fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '0.9rem', color: '#5c4033' };
const buttonStyle = { fontFamily: 'Poppins, sans-serif', fontWeight: '600', textTransform: 'none', background: 'rgba(255,255,255,0.15)', color: '#3d2c1e', padding: '8px 24px', backdropFilter: 'blur(8px)', '&:hover': { background: 'rgba(255,255,255,0.3)' } };
const modalButtonStyle = { ...buttonStyle, marginTop: 2 };
const modalBackdropStyle = { style: { backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' } };
const modalBoxStyle = {
  width: { xs: '90%', md: '780px' },
  maxHeight: '90vh',
  bgcolor: 'rgba(255,255,255,0.07)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: '28px',
  boxShadow: '0 8px 32px rgba(255,182,193,0.5)',
  border: '1px solid rgba(255,255,255,0.25)',
  p: 5,
  textAlign: 'center',
  overflowY: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',            
  flexDirection: 'column',    
  alignItems: 'center',       
  justifyContent: 'flex-start', 
};
const modalTitleStyle = { fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '2.1rem', color: '#3d2c1e', letterSpacing: '1px', textShadow: '0px 0px 8px rgba(255,255,255,0.6)', marginBottom: 2, textAlign: 'justify' };
const modalDescriptionStyle = { fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '1.1rem', color: '#5c4033', maxWidth: '620px', lineHeight: 1.7, marginBottom: 4, textShadow: '0px 0px 4px rgba(255,255,255,0.4)', textAlign: 'justify' };
const linksContainerStyle = { display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginBottom: 3 };
const modalImagesContainerStyle = { display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginTop: 2, maxWidth: '700px' };
const projectImageStyle = { width: 170, height: 300, objectFit: 'cover', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.4)', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', transition: '0.4s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 8px 18px rgba(0,0,0,0.15)' } };
const classCapImageStyle = { width: 650, height: 350, ...projectImageStyle };

// === Major and Minor Projects ===
const majorProjects = [
  { name: 'Resfeber App', shortDescription: 'Gemini-powered Travel Planner', longDescription: 'Resfeber is a travel planning app that creates personalized itineraries within seconds using AI, making trip organization simple, seamless, and tailored to each user’s needs. Whether planning a solo escape, a romantic getaway, or a family adventure, Resfeber removes the stress from travel preparation by instantly generating smart and organized travel plans. Inspired by the often overwhelming process of coordinating trips, the app was built to let users spend less time planning and more time exploring. Developed using React Native, Firebase, Firestore, and Expo, and powered by Gemini AI.', github: 'https://github.com/sonalibiswas242/Resfeber', images: [resfeber1, resfeber2, resfeber3, resfeber4, resfeber5] },
  { name: 'Nourish App', shortDescription: 'Food Donation Application', longDescription: 'This project introduces a mobile application designed to modernize food donation practices by creating a digital platform that connects individuals, businesses, restaurants, and charitable organizations like NGOs and orphanages. Motivated by the global issues of food waste and hunger, the app aims to minimize food wastage by making surplus food easily accessible to those in need while promoting transparency and trust through user-friendly features. To achieve this, the app integrates technologies such as Android Studio for development, geofencing for matching nearby donors and recipients, database management for secure data handling, User Acceptance Testing (UAT) for ensuring usability and Convolutional Neural Networks (CNNs) for future food classification features.', github: 'https://github.com/kalp-77/FoodDonation', paper: 'https://www.ijraset.com/best-journal/nourish-food-donation-app-using-android-and-ml', images: [nourish1, nourish2, nourish3, nourish4, nourish5, nourish6] },
  { name: 'AI Hiring System', shortDescription: 'Ethical AI for hiring', longDescription: 'Research project on bias mitigation in hiring systems-TBD', images: [] }
];

const minorProjects = [
  { name: 'Bookstore App', shortDescription: 'Bookstore at Your Fingertips', longDescription: 'A React Native application for browsing, buying, and selling books with a smooth shopping experience. It uses Redux for efficient shopping cart management, allowing users to easily add, update, and purchase books in a seamless and responsive environment.', github: 'https://github.com/sonalibiswas242/BookStoreApp', images: [bookstore1, bookstore2, bookstore3, bookstore4] },
  { name: 'Gallery App', shortDescription: 'Flickr’s Vast Image Collection', longDescription: 'A React Native application for managing and viewing student report data. It integrates Firebase for secure real-time data fetching and storage, enabling educators and students to track academic performance easily and stay updated from any device.', github: 'https://github.com/sonalibiswas242/Gallery-app', images: [gallery1, gallery2, gallery3, gallery4] },
  { name: 'Student Report App', shortDescription: 'Manage View Organize Student Data', longDescription: 'A React Native application that fetches stunning images from the Flickr API and implements image caching for faster loading and smoother user experience. The app provides an interactive and visually rich way to explore curated photography collections', github: 'https://github.com/sonalibiswas242/StudentReportApp', images: [student1, student2, student3, student4] },
  { name: 'ClassCapCounter', shortDescription: 'Real-Time Class Strength Calculator', longDescription: 'ClassCapCounter is a web-based application that automates classroom attendance using AI-powered face detection. Motivated by the need to eliminate the time-consuming and error-prone process of manual attendance-taking, ClassCapCounter provides a fast, scalable solution by allowing users to upload classroom images and instantly detect and count students present. Built with React.js for the frontend and Vite.js for optimized development, the app uses OpenCV.js on the client side to perform lightweight and efficient face detection through a Haar Cascade Classifier. The system first converts uploaded images to grayscale to reduce computational load, then applies face detection models to accurately identify faces, displaying the final student count along with the processed image. ClassCapCounter demonstrates how AI and web technologies can streamline everyday tasks in educational environments while remaining lightweight, browser-friendly, and highly effective.', github: 'https://github.com/9RP6/ClassCapCounter', images: [] }
];

export default ProjectsSection;
