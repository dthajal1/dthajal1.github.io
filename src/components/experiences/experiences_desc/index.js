import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

// breadcrumbs
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import styles from './styles.module.scss'
import { experiencesObject } from '../experiences';


const ExperienceBreadcrumbs = ({company}) => {
    const breadcrumbs = [
        <Link underline="hover" key="1" to='/experiences' color="inherit">
            Experiences
        </Link>,
        <Typography key="3" color="text.primary">
            {company}
        </Typography>,
    ];

  return (
    <>
        <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
        <br />
    </>
  )
}

const ExperienceTechAndImg = ({company, technologiesUsed, img}) => {
    
    const [click, setClick] = React.useState(false)

    const setFlag = () => {
        setClick(true)
    }

    const unsetFlag = () => {
        setClick(false)
    }

    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>
                {technologiesUsed.map((item, idx) => (
                    <Tooltip key={idx} title={item.name} style={{ 'margin': '5px' }}>
                        <IconButton>
                            {item.icon}
                        </IconButton>
                    </Tooltip>
                ))}
            </Grid>

            <br />
            <br />
            {click ? (
                <div onClick={unsetFlag} className={`${styles.lightbox} ${styles.show} relative`}>
                    <img src={img} alt={company} className={`${styles.show_image}`} />
                </div>
                ) : (
                <Grid container justifyContent='center' alignItems='center'>
                    <img src={img} alt={company} onClick={setFlag} style={{  'width': '80%', 'height': 'auto', 'margin': '0 10px'}}  />
                </Grid>
            )}
        </>
    )
}

export const Fiskkit = () => {
    const experience = experiencesObject['fiskkit']
    return (
        <>
            <ExperienceBreadcrumbs {...experience} />
            <Typography variant='body' display='block'>
                Fiskkit offers two platforms: <a href="https://fiskkit.com/">Fiskkit </a> and <a href="https://classroom.fiskkit.com/"> Fiskkit Classroom</a>. I mostly 
                worked on Fiskkit classroom. Fiskkit classroom is a platform where students 
                can practice critical thinking and close reading. 
                As an intern, I was responsible for one large project along with multiple mini 
                features and bug fixes. The large feature I worked on was the ability for 
                educators to hide their comments from students on an assigned article. Prior 
                to this feature, the platform forced the teachers to wait until all students 
                were done fiskking (annotating) before they can fisk their take on the article. With the 
                feature I built, it added the ability for teachers to fisk the article whenever 
                they wanted to without students seeing it and also an option to show it to 
                students on a click of a button. This results in improved teacher's 
                convenience. 
            </Typography>
            <br />
            <Typography variant='body' display='block'>
                Other mini features I worked on includes sorting course articles by most 
                recent instead of most fiskked, opening/closing all fisks on a click of a 
                button, etc. These smaller features were fairly easy to implement, however, 
                large codebases made it challenging to locate where in the codebase to make changes.
                Through experiences like this, I have learned to be patient and have learned tips 
                and tricks to effectively navigate large codebases. 
            </Typography>
            <ExperienceTechAndImg {...experience} />
        </>
    )
}

export const IEEE = () => {
    const experience = experiencesObject['ieee']
    return (
        <>
            <ExperienceBreadcrumbs {...experience} />
            {/* also used sendgrid apis to send email for email verification */}
            <Typography variant='body' display='block'>
                As part of website committee at <a href="https://ieee.berkeley.edu/"> UC Berkeley's IEEE</a>, I help maintain the main 
                website of IEEE as well as work with non profit organizations to help them 
                establish online presence. This past semester, we built a finance 
                management portal for STREAM Education Foundation, a nonprofit that 
                promotes education in science, technology, robotics, engineering, arts, and 
                math. In this project, I implemented most of authentication and authorization
                part of the application along with building some of the dashboard features
                on both frontend and backend. With authentication system I built, users can 
                easily sign up and log in to the portal, and with the addition of authorization 
                feature, owner can restrict access based on the user's role. This results in
                making sure only right people have access to the right information. 
            </Typography>
            <br />
            <Typography variant='body' display='block'>
                One of the dashboard features I worked on was the ability for admin to verify 
                the registered users. Another dashboard feature I worked on was for admin 
                to be able to approve/decline transaction. Through working on projects and 
                features like this, I have gathered great understanding of implementing 
                RESTful APIs and building end to end web applications. 
            </Typography>
            <ExperienceTechAndImg {...experience} />
        </>
    )
}

export const FreelanceProject = () => {
    const experience = experiencesObject['barberWeb']
    return (
        <>
            <ExperienceBreadcrumbs {...experience} />
            <Typography variant='body' display='block'>
                With newly acquired ability to build full stack applications, I wanted to 
                put it to test and thus this summer, I decided to transform the <a href="https://bbjceo.com/"> static website </a> 
                I built back in summer of 2021 to a full stack web application where the owner 
                would be able to log in and dynamically edit the contents themselves. 
                In this project, I combined all the skills I had learned throughout the years; 
                from UIs on the frontend to connecting to database on the backend to building 
                REST APIs and connecting backend and frontend together. Through this project, 
                I have not only sharpened my full stack skills but also improved my social skills 
                because I had to actively listen to my customer's needs and also effectively communicate 
                what I was building for them. You can view the final product <a href="https://barber-web-frontend.netlify.app/"> here</a>.
            </Typography>
            <ExperienceTechAndImg {...experience} />
        </>
    )
}

export const ClutchLabs = () => {
    const experience = experiencesObject['clutchLabs']
    return (
        <>
            <ExperienceBreadcrumbs {...experience} />
            <Typography variant='body' display='block'>
                Stay tuned!
            </Typography>
            <ExperienceTechAndImg {...experience} />
        </>
    )
}

export const AcademicIntern = () => {
    const experience = experiencesObject['academicIntern']

    return (
        <>
            <ExperienceBreadcrumbs {...experience} />
            <Typography variant='body' display='block'>

            </Typography>
            <ExperienceTechAndImg {...experience} />
        </>
    )
}
