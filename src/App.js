// src/App.js
import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Profile from './components/Profile';
import branchImage from './assets/images/tree.png';
import mountainImage from './assets/images/mountain.png';

const App = () => {
  useEffect(() => {}, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/*  Background Layers */}
      <div className="skyLayer"></div>
      <div className="yellowLayer"></div>
      <div className="sunsetLayer"></div>

      {/*  Sun */}
      <div className="sun"></div>

      {/*  Sakura Branches */}
      <div className="branch-layer">
        <img src={branchImage} alt="Sakura Branch" />
        <img src={branchImage} alt="Big Sakura Branch Left" />
        <img src={branchImage} alt="Big Sakura Branch Right" />
      </div>

      {/*  Main Content */}
      <div className="content-container">
        <Container maxWidth="lg" style={{ backgroundColor: 'transparent', zIndex: 2 }}>
          <Profile />
        </Container>
      </div>

      {/*  Footer */}
      <footer className="footer-section">
        <div className="mountain-layer">
          <img src={mountainImage} alt="Mountains" className="mountain-image" />
        </div>
      </footer>

      {/*  Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        /*  Background Layers */
        .skyLayer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #edf2fb, #d7e3fc, #d7e3fc);
          z-index: -3;
          animation: fadeOutSky 40s forwards;
        }

        .yellowLayer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #fff6cc, #fff2b2, #ffee9d);
          opacity: 0;
          z-index: -2;
          animation: fadeInOutYellow 40s forwards;
        }

        .sunsetLayer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffecee, #fde2e4, #f1e3fc,  #e2ecf2);
          opacity: 0;
          z-index: -1;
          animation: fadeInSunset 40s forwards;
        }

        /*  Sun */
        .sun {
          position: absolute;
          top: 100px;
          left: 0%;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #fff9b0;
          box-shadow: 0 0 80px 30px rgba(255, 224, 102, 0.5);
          overflow: visible;
          z-index: 0;
          opacity: 0.95;
          transform: translateX(-50%);
          animation: sunMoveAcrossSky 40s forwards, sunColorShift 40s forwards;
          animation-timing-function: ease-in-out;
        }

        .sun::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(255,224,102,0.6) 0%, rgba(255,224,102,0.2) 50%, rgba(255,224,102,0) 100%);
          border-radius: 50%;
          pointer-events: none;
        }

        /*  Sakura Branch Layer */
        .branch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .branch-layer img {
          position: absolute;
          object-fit: contain;
          pointer-events: none;
        }

        .branch-layer img:nth-of-type(1) {
          width: 550px;
          transform: rotate(15deg) translate(10px, -140px);
          top: 0;
          left: 0;
          z-index: 2;
        }

        .branch-layer img:nth-of-type(2) {
          width: 750px;
          transform: rotate(-10deg) translate(-150px, -100px);
          top: 0;
          left: 0;
          opacity: 0.7;
          z-index: 1;
        }

        .branch-layer img:nth-of-type(3) {
          width: 800px;
          transform: rotate(20deg) translate(400px, -180px) scaleX(-1);
          top: 0;
          right: 0;
          opacity: 0.7;
          z-index: 1;
        }

        /*  Mobile Responsiveness */
        @media (max-width: 768px) {
          .sun { width: 100px; height: 100px; }
          .branch-layer img:nth-of-type(1) { width: 350px; }
          .branch-layer img:nth-of-type(2) { width: 500px; }
          .branch-layer img:nth-of-type(3) { width: 550px; }
        }

        @media (max-width: 480px) {
          .sun { width: 80px; height: 80px; }
          .branch-layer img:nth-of-type(1) { width: 280px; }
          .branch-layer img:nth-of-type(2) { width: 400px; }
          .branch-layer img:nth-of-type(3) { width: 450px; }
        }

        /*  Content */
        .content-container {
          position: relative;
          z-index: 2;
          background-color: transparent;
        }

        /*  Footer */
        .footer-section {
          width: 100%;
          position: relative;
          background: none;
          margin-top: 20px; /* mountain will come after the content */
        }

        .mountain-layer {
          width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
        }

        .mountain-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          pointer-events: none;
          user-select: none;
        }

        /*  Animations */
        @keyframes fadeOutSky {
          0% { opacity: 1; }
          30% { opacity: 0.7; }
          60% { opacity: 0.4; }
          90% { opacity: 0.2; }
          100% { opacity: 0; }
        }
        @keyframes fadeInOutYellow {
          0% { opacity: 0; }
          20% { opacity: 0; }
          40% { opacity: 1; }
          70% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        @keyframes fadeInSunset {
          0% { opacity: 0; }
          50% { opacity: 0; }
          70% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        @keyframes sunMoveAcrossSky {
  0% {
    transform: translate(5vw, 200px); /* Start lower */
  }
  30% {
    transform: translate(5vw, -100px); /* Go up highest (brightest) */
  }
  60% {
    transform: translate(5vw, -30px); /* Slightly lower */
  }
  100% {
    transform: translate(5vw, 150px); /* Come down but not fully */
  }
}

        @keyframes sunColorShift {
          0% { background-color: #fff9b0; }
          30% { background-color: #ffe066; }
          60% { background-color: #ffc04d; }
          100% { background-color: #ff9966; }
        }
      `}</style>
    </div>
  );
};

export default App;
