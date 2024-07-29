import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { experiencesList } from './experiences';
import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CircleIcon from '@mui/icons-material/FiberManualRecord'; // Smaller dot icon

export default function Experiences() {

  const breadcrumbs = [
    <Typography variant='h4' key="3" color="text.primary">
        Work Experiences
    </Typography>,
  ];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <Grid container justifyContent="center" id="experiences">
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
      <Timeline position="left">
        {experiencesList.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelineContent sx={{ flex: '1 1 auto', textAlign: 'left', padding: '20px', margin: '10px 20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Typography component="span">
                <Typography variant="h5" component="span">{item.title} | </Typography> <Typography color="text.secondary" component="span">{item.date}</Typography>
              </Typography>
              <Typography variant='h6'>{item.company}</Typography>
              <Typography>{item.description}</Typography>
              {/* <Typography variant='body1' gutterBottom>
                <strong>Technologies Used</strong>:
              </Typography> */}
              <List disablePadding>
                {item.technologiesUsed.map((tech, index) => (
                  <ListItem key={index} sx={{ paddingLeft: '0', paddingTop: '0', paddingBottom: '0' }}>
                    <ListItemIcon sx={{ minWidth: '20px' }}>
                      <CircleIcon fontSize="10px" />
                    </ListItemIcon>
                    <ListItemText primary={tech} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                ))}
              </List>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineConnector /> 
                <TimelineDot sx={{ backgroundColor: getRandomColor(), width: 16, height: 16 }}>
                  {/* <FastfoodIcon /> */}
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            {/* <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date}
            </TimelineOppositeContent> */}
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}