import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';


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

export default function Footer() {
    return (
        <Box component="footer" sx={{px: { xs: '5%', sm: '20%' }, py: 6 }}>
          <Grid container justifyContent='center'>
            <Copyright />
          </Grid>
        </Box>
    )
}