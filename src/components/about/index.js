import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Button, Divider } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { resumeHref } from '../home';

const AboutMe = () => {
  return (
    <Box sx={{ px: { xs: '5%', sm: '20%' }, py: 6, backgroundColor: 'background.paper' }}>
      <Grid container id="about-me" spacing={2}>
        <Grid item>
          <Typography variant='h4'>
            About Me;
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography paragraph>
            I am a software engineer with a focus in backend and full stack development. I graduated from UC Berkeley with a degree in EECS and I have expertise in Python, Next.js, Node/Express.js and React.js. I have built personal projects with them and also have used them extensively in my career thus far. You can learn more about them below.
          </Typography>
          <Typography paragraph>
          Before beginning my career in software engineering, I spent about a year playing professional soccer. The drive and determination I applied to excel in soccer now fuels my passion for technology. I believe that with the right mindset, we can achieve anything—whether it’s mastering a sport or developing cutting-edge software.
          </Typography>
          <Typography paragraph>
          In my free time, I enjoy coaching kids in soccer, exploring new tech trends, and working on personal projects. Always eager to learn more and take on new challenges!
          </Typography>
          <Typography paragraph>
          Feel free to connect with me if you’d like to chat about tech, soccer, or anything in between!
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
            <Button variant="contained" startIcon={<CloudDownloadIcon />} href={resumeHref}>
                Resume
            </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;