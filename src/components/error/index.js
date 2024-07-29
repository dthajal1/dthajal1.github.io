import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ErrorPage() {
  return (
    <Grid 
      container
      justifyContent="center"
      alignItems="center"
      flexDirection='column'
      height='90vh'
    >
        <Typography variant='h4' textAlign='center'>404 Page Not Found;</Typography>
        <Typography variant='h6' textAlign='center' >No content found for route: <span style={{ 'textDecoration': 'underline' }}>{window.location.pathname}</span></Typography>
        <br />
        <Button variant='outlined' component='a' href='/'>Go To Home</Button>
    </Grid>
  );
}

