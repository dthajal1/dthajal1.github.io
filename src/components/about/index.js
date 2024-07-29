import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import { GitHub, LinkedIn } from '@mui/icons-material';

const AboutMe = () => {
  return (
    <>
      <Grid container id="about-me" spacing={2} sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: "20px" }}>
        <Grid item xs={12} lg={8}>
          <Typography variant='h4' textAlign="center">
            About Me;
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography textAlign="center" paragraph>
            I'm Diraj, a recent graduate from UC Berkeley with a degree in Electrical Engineering and Computer Science. 
            I have expertise in React, Node.js, Next.js, and Java. I have built personal projects with them and 
            have used them extensively in my short career thus far. You can find more info about them below.
          </Typography>
          <Typography textAlign='center' paragraph>
            If you find any of my work interesting, feel free to reach out. Just a message away!
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="h4" textAlign="center">
            Basic Information;
          </Typography>
          <br />
          <Divider />
          <br />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="center">
                <strong>Email:</strong> thajalidiraj@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography variant="body1">
                <strong>Phone:</strong> 510-323-5721
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="center">
                <strong>Location:</strong> San Francisco, CA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                    <Button variant="outlined" startIcon={<LinkedIn />} href='https://linkedin.com/in/diraj-thajali'>
                      LinkedIn
                    </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" startIcon={<GitHub />} href="https://github.com/dthajal1">
                    GitHub
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutMe;