import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Education() {
    const breadcrumbs = [
        <Typography variant='h4' key="3" color="text.primary">
            Education;
        </Typography>,
    ];

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
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Card variant="outlined" sx={{ borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px'}}>
                        <CardContent>
                            <Typography variant='h5' textAlign='center' gutterBottom>University of California, Berkeley</Typography>
                            <Typography variant='body1' textAlign='center' gutterBottom>B.S. in Electrical Engineering and Computer Science</Typography>
                            <Typography variant='body2' textAlign='center' color="textSecondary">2019 - 2023</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br />
        </>
    );
}
