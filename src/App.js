import React from 'react';
import './style.css'

import {createTheme, ThemeProvider} from "@mui/material/styles";
import { blueGrey, lightBlue } from "@mui/material/colors";
import { Box, Grid, useMediaQuery } from '@mui/material';
import Footer from './components/footer';
import LandingPage from './components/home';
import AboutMe from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Education from './components/education';
import Miscellaneous from './components/misc';
// import ContactForm from './components/contact';
import Experiences from './components/experiences';
import NavBar from './components/navbar';


const theme = createTheme({
  palette: {
    primary: lightBlue, 
    secondary: blueGrey,
  },
})

export default function App() {
  const isSmall = useMediaQuery('(max-width:750px)');

  return (
    <ThemeProvider theme={theme}>
      <Grid padding={isSmall ? '0px' : '0px 20%'}>
        <NavBar />
        <LandingPage />
        <Box height={150} />
        <AboutMe />
        <Box height={150} />
        <Experiences />
        <Box height={150} />
        <Projects />
        <Box height={150} />
        <Skills />
        <Box height={150} />
        <Education />
        <Box height={150} />
        <Miscellaneous />
        {/* <Box height={150} /> */}
        {/* <ContactForm /> */}
        <Box height={150} />
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}
