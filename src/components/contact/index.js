import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Breadcrumbs, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: ''
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Validation
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Send email
    axios.post(process.env.API_URL + '/send-email', formData)
      .then(response => {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        alert('Failed to send email');
        console.error('There was an error sending the email!', error);
      });
  };

  const breadcrumbs = [
      <Typography variant='h4' key="3" color="text.primary">
          Contact Me;
      </Typography>,
  ];

  return (
    <>
      <Grid container justifyContent="center" id="contact">
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
      <Grid container justifyContent="center" alignItems="center" sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: "20px" }}>
        <Grid item xs={10} sm={8} md={6}>
          <form onSubmit={handleSubmit}>
            <Typography variant="body1" align="center">
              Feel free to reach out to me via this contact form!
            </Typography>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Grid container justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
