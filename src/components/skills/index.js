import * as React from 'react';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const languages = [
    { name: "React", proficiency: 80 },
    { name: "Node.js", proficiency: 80 },
    { name: "Java", proficiency: 80 },
    { name: "Python", proficiency: 85 },
    { name: "Next.js", proficiency: 80 },
    { name: "JS/HTML/CSS", proficiency: 90 },
    { name: "Mongo DB", proficiency: 75 },
    { name: "MySQL", proficiency: 75 },
];

// const technologiesAndFrameworks = [
//     { name: "Git", proficiency: 85 },
//     { name: "Java Spring", proficiency: 65 },
//     { name: "Docker", proficiency: 70 },
//     { name: "PHP Laravel", proficiency: 60 },
// ];

// const concepts = [
//     "Object Oriented Programming",
//     "Data Structures",
//     "Algorithms",
//     "REST APIs",
//     "MVC",
//     "Debugging"
// ]

export default function Skills() {
    const breadcrumbs = [
        <Typography variant='h4' key="3" color="text.primary">
            Skills;
        </Typography>,
    ];

    const getProficiencyLevel = (proficiency) => {
        if (proficiency >= 90) {
            return "Proficient";
        } else if (proficiency >= 80) {
            return "Skilled";
        } else {
            return "Knowledgeable";
        }
    };

    const getSliderColor = (proficiency) => {
        if (proficiency >= 90) {
            return "#4caf50"; // Green for Proficient
        } else if (proficiency >= 80) {
            return "#ff9800"; // Orange for Skilled
        } else {
            return "#757575"; // Gray for Knowledgeable
        }
    };

    const sortedLanguages = languages.sort((a, b) => a.proficiency - b.proficiency);

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
            <Grid container spacing={2} justifyContent="center" padding="20px">
                {sortedLanguages.map((item, idx) => (
                    <Grid item key={idx} xs={12} sm={6} md={6} style={{ textAlign: 'center' }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Typography variant='body1'>{item.name}</Typography>
                            <Typography variant='body1'>{getProficiencyLevel(item.proficiency)}</Typography>
                        </Grid>
                        <Slider 
                            value={item.proficiency} 
                            max={100} 
                            disabled 
                            sx={{
                                color: getSliderColor(item.proficiency),
                                '& .MuiSlider-thumb': {
                                    display: 'none',
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.5,
                                    backgroundColor: getSliderColor(item.proficiency),
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: getSliderColor(item.proficiency),
                                },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
