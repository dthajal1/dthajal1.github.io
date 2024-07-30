import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Breadcrumbs, Button, Divider, Grid, Paper } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { LinkedIn, GitHub, Email, Phone } from '@mui/icons-material';
import { resumeHref } from '../home';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="/">
          DT
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

function GetInTouch() {
    const breadcrumbs = [
      <Typography variant='h4' key="3" color="text.primary">
        Let's get in touch!
      </Typography>,
    ];

    return (
      <Box sx={{ px: { xs: '5%', sm: '20%' }, py: 6, backgroundColor: 'background.default' }}>
        <Grid container>
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
        <Paper elevation={1} style={{ padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" startIcon={<Email />} href="mailto:thajalidiraj@gmail.com">
                Email
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" startIcon={<Phone />} href="tel:510-323-5721">
                Phone
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

export default function Footer() {
    return (
      <>
        <GetInTouch />
        <Box component="footer" sx={{px: { xs: '5%', sm: '20%' }, py: 6 }}>
          <Grid container justifyContent='center'>
            <Copyright />
          </Grid>
        </Box>
      </>
        
    )
}