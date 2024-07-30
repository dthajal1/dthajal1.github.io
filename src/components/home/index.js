import React, { useState } from 'react';
import Typist from 'react-typist';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Me from "../../resources/images/me.jpeg";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IoIosArrowDown } from 'react-icons/io';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';

const titles = ["Full Stack Engineer", "Backend Engineer"];
export const resumeHref = "https://drive.google.com/file/d/1D0s2JTQ7ZhMcDm2LtgrWJoe9d7VfPopW/view";

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
    <Box sx={{px: { xs: '5%', sm: '20%' }, py: 6 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '85vh' }}>
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
          <Grid container justifyContent="center">
            <IoIosArrowDown className="bounce" style={{ fontSize: '40px', cursor: 'pointer' }} onClick={() => scrollToSection('about-me')} />
          </Grid>
        </Grid>
      </Grid>
      <Paper elevation={1} style={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <Grid container spacing={2} justifyContent="center" py={2}>
          <Grid item>
            <Button variant="contained" startIcon={<CloudDownloadIcon />} href={resumeHref}>
                Resume
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<LinkedIn />} href='https://linkedin.com/in/diraj-thajali'>
              LinkedIn
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<GitHub />} href="https://github.com/dthajal1">
              GitHub
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default LandingPage;
