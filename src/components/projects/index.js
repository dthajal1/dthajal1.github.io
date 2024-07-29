import React, { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography, Grid, Button, Box, Breadcrumbs, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Github from '@mui/icons-material/GitHub';
import { projectList } from './getProjects';
import useMediaQuery from '@mui/material/useMediaQuery';
import Pagination from '@mui/material/Pagination';

const Img = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  // margin: 'auto',
  // display: 'block',
  // maxWidth: '100%',
  // maxHeight: '100%',
});

const Projects = () => {
  const breadcrumbs = [
    <Typography variant='h4' key="3" color="text.primary">
        Projects;
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

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Grid container justifyContent="center" id="projects">
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
      <Grid mt={2} container spacing={4} justifyContent="space-between">
        {currentItems.map((item) => (
          <Grid
            item
            key={item.title}
            xs
            sx={{ margin: '5px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <Img src={item.img} alt={item.title} />
            <br />
            <br />
            <Typography variant="h5" gutterBottom>
              {/* {item.isClassProject ? `*${item.title}` : item.title} */}
              {item.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {/* Technologies: {item.technologies.join(', ')} */}
              <strong>Technologies</strong>: React, Node JS, MongoDB
            </Typography>
            <Typography gutterBottom>{item.shortDescription}</Typography>

            <Grid container justifyContent="center" alignItems="center" gap={2}>
              <Button variant="outlined" startIcon={<Github />} href={item.href}>
                Github
              </Button>
            </Grid>
            <br />
          </Grid>
        ))}
      </Grid>

      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(projectList.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>

      <br />
    </>
  );
};

export default Projects;