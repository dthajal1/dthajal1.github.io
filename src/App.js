import React from 'react';
import './style.css'

import {createTheme, ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import Footer from './components/footer';
import LandingPage from './components/home';
import AboutMe from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Education from './components/education';
import Miscellaneous from './components/misc';
import NavBar from './components/navbar';


const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',  // Primary Background Color
      paper: '#fdfffc',    // Secondary Background Color
    },
    primary: {
      main: '#212121',     // Primary Color
    },
    // secondary: {
    //   main: '#d32f2f',     // Secondary Color
    // },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <LandingPage />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Miscellaneous />
        <Footer />
    </ThemeProvider>
  )
}
