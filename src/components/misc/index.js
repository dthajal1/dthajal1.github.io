import React, { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography, Grid, Box, Breadcrumbs, Divider, Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import CoachIcon from '@mui/icons-material/EmojiPeople';
import TravelIcon from '@mui/icons-material/Flight';
import GuitarIcon from '@mui/icons-material/MusicNote';
import ReadingIcon from '@mui/icons-material/MenuBook';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Img } from '../projects';
import Futbol1 from "../../resources/images/misc/me_futbol_1.JPG";
import Futbol2 from "../../resources/images/misc/me_futbol_2.JPEG";

const Miscellaneous = () => {
  const breadcrumbs = [
    <Typography variant='h4' key="3" color="text.primary">
      Miscellaneous
    </Typography>,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const isSmall = useMediaQuery('(max-width:1000px)');
  const isMid = useMediaQuery('(min-width:1000px) and (max-width:1500px)');

  useEffect(() => {
    if (isSmall) {
      setItemsPerPage(1);
    } else if (isMid) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    } 
  }, [isSmall, isMid]);

  const items = [
    // { name: 'Soccer', description: 'Playing soccer brings me joy and keeps me active in every aspect of life', icon: <SoccerIcon fontSize="large" /> },
    { name: 'Traveling', description: 'I love to travel when I can. It helps me see the world differently, grow, and appreciate life more', icon: <TravelIcon fontSize="large" /> },
    { name: 'Reading', description: 'Always learning and growing through books. One of the wisdoms I live by is "Consistent small efforts = big change!"', icon: <ReadingIcon fontSize="large" /> },
    { name: 'Soccer Coaching', description: 'Coaching youth allows me to share my love for the sport and help young players improve', icon: <CoachIcon fontSize="large" /> },
    { name: 'Guitar', description: 'I am no expert, but I strum sometimes :D', icon: <GuitarIcon fontSize="large" /> },
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box sx={{ px: { xs: '5%', sm: '20%' }, py: 6, backgroundColor: 'background.paper' }}>
      <Grid container justifyContent="center">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Img src={Futbol1} alt="Futbol 1" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Img src={Futbol2} alt="Futbol 2" />
        </Grid>
      </Grid>
      <Typography  variant="body1" sx={{ borderLeft: '4px solid', boxShadowLeft: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 1 }} color="textSecondary" gutterBottom>
        Here are some of the memories from my soccer career. If interested, here is my <a href="https://www.youtube.com/watch?v=8XkshCLkeSo" target="_blank" rel="noopener noreferrer">highlight video</a> :)
      </Typography>
      <Grid mt={2} container spacing={4} justifyContent="center">
        {currentItems.map((item, index) => (
          <Grid
            item
            key={index}
            xs
            // xs={12}
            // sm={6}
            // md={4}
            // sx={{
            //   display: 'flex',
            //   flexDirection: 'column',
            //   alignItems: 'center',
            //   margin: '5px',
            //   padding: '20px',
            //   borderRadius: '10px',
            //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            // }}
          >
            <Paper sx={{ padding: '20px', borderRadius: '10px', textAlign: 'center', backgroundColor: 'background.default'}}>
            {item.icon}
            <Typography variant="h5" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body2" align="center">
              {item.description}
            </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
};

export default Miscellaneous;
