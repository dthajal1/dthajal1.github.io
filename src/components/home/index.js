import React, { useState } from 'react';
import Typist from 'react-typist';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Me from "../../resources/images/me.jpeg";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IoIosArrowDown } from 'react-icons/io';

const titles = ["Full Stack Engineer", "Backend Engineer"];

const LandingPage = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const handleTypingDone = () => {
    setIsTyping(false);
    setTimeout(() => {
      setTitleIndex((titleIndex + 1) % titles.length);
      setIsTyping(true);
    }, 2000); // Adjust delay time (milliseconds) before switching to the next title
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '95vh' }}>
        {/* Headshot */}
        <Grid item xs={6} md={6} style={{ textAlign: 'center' }}>
          <img src={Me} alt="Your Name" style={{ maxWidth: '100%', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </Grid>
        {/* Title and Links */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" align="center" gutterBottom>
            <Typist
              key={titleIndex}
              avgTypingDelay={150} // Adjust typing speed (milliseconds)
              onTypingDone={handleTypingDone}
              startDelay={500} // Delay before typing starts (milliseconds)
            >
              {titles[titleIndex]}
            </Typist>
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Hello! I'm Diraj, a passionate software engineer with expertise in building web applications
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant="contained" startIcon={<CloudDownloadIcon />} href='https://drive.google.com/file/d/1OVDlqDYNWZWiTc6o4MYddESTpS43co05/view?usp=sharing'>
                    Resume
                </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <IoIosArrowDown style={{ fontSize: '40px', cursor: 'pointer' }} onClick={() => scrollToSection('about-me')} />
      </Grid>
    </>
  );
}

export default LandingPage;
