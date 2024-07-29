import React, { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography, Grid, Box, Breadcrumbs, Divider } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import SoccerIcon from '@mui/icons-material/SportsSoccer';
import CoachIcon from '@mui/icons-material/EmojiPeople';
import TravelIcon from '@mui/icons-material/Flight';
import GuitarIcon from '@mui/icons-material/MusicNote';
import ReadingIcon from '@mui/icons-material/MenuBook';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    { name: 'Soccer', description: 'Playing soccer brings me joy and keeps me active in every aspect of life', icon: <SoccerIcon fontSize="large" /> },
    { name: 'Soccer Coaching', description: 'Coaching youth allows me to share my love for the sport and help young players improve', icon: <CoachIcon fontSize="large" /> },
    { name: 'Traveling', description: 'I love to travel when I can. It helps me see the world differently, grow, and appreciate life more', icon: <TravelIcon fontSize="large" /> },
    { name: 'Guitar', description: 'I am no expert, but I strum sometimes', icon: <GuitarIcon fontSize="large" /> },
    { name: 'Reading', description: 'Always eager to learn and grow through books', icon: <ReadingIcon fontSize="large" /> },
    // Add more items as needed
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
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
      <Grid mt={2} container spacing={4} justifyContent="center">
        {currentItems.map((item, index) => (
          <Grid
            item
            key={index}
            xs
            // xs={12}
            // sm={6}
            // md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '5px',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {item.icon}
            <Typography variant="h5" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body2" align="center">
              {item.description}
            </Typography>
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
    </>
  );
};

export default Miscellaneous;
