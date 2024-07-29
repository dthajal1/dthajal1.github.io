import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography, Grid, Button, Box, Breadcrumbs, Divider, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Github from '@mui/icons-material/GitHub';
import { projectList } from './getProjects';

export const Img = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
});

const Projects = () => {
  const breadcrumbs = [
    <Typography variant='h4' key="3" color="text.primary">
        Projects;
    </Typography>,
  ];

  return (
    <Box sx={{ px: { xs: '5%', sm: '20%' }, py: 6 }}>
      <Grid container id="projects">
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
      <Grid container spacing={4} justifyContent="space-between">
        {projectList.map((item) => (
          <Grid
            item
            key={item.title}
            sm={12}
            // lg={6}
            // xl={4}
          >
            <Paper sx={{ padding: '20px', borderRadius: '10px'}}>
              <Grid container spacing={2}>
                <Grid item md={0} lg={6}>
                  <Img src={item.img} alt={item.title} />
                </Grid>
                <Grid item md={12} lg={6}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <br />
                    <br />
                    <Typography variant="h5" gutterBottom>
                      {/* {item.isClassProject ? `*${item.title}` : item.title} */}
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ borderLeft: '4px solid', boxShadowLeft: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 1 }} gutterBottom>
                      {item.technologies.join(', ')}
                    </Typography>
                    <Typography gutterBottom>{item.shortDescription}</Typography>
                    <Divider />
                    {/* <Grid container justifyContent="center" alignItems="center" gap={2} pt={2}>
                      <Button variant="outlined" startIcon={<Github />} href={item.href}>
                        Github
                      </Button>
                    </Grid> */}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <br />
    </Box>
  );
};

export default Projects;