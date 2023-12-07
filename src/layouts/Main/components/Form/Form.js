/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string('Enter your last name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string('Enter your email')
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  phone: yup
    .string()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Please enter a valid phone number.',
    ),
  budget: yup.string().required('Please specify your project budget'),
  message: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

const Form = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <div>
      <Box marginBottom={4}>
        <Typography
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '60px',
            lineHeight: '70px',
            textAlign: 'center',
            color: '#000000',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          Don’t Know How to Get Started?
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          sx={{
            fontFamily: 'Raleway',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: '170%',
            textAlign: 'center',
            color: '#000000',
          }}
        >
          Our team is ready to help. Schedule a call and we'll walk you through
          <br /> the process and answer any questions you may have.
        </Typography>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Box
            component={Grid}
            marginBottom={{ xs: 10, sm: 0 }}
            container
            spacing={4}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Please tell us your name *
              </Typography>
              <TextField
                label="First name"
                variant="outlined"
                name={'firstName'}
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Please tell us your name *
              </Typography>
              <TextField
                label="Last name"
                variant="outlined"
                name={'lastName'}
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Please enter your email address *
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                name={'email'}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Please enter your phone number (optional)
              </Typography>
              <TextField
                label="Phone number"
                variant="outlined"
                name={'phone'}
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Please tell us about your project (optional)
              </Typography>
              <TextField
                label="Message"
                variant="outlined"
                name={'message'}
                fullWidth
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              <Button
                size="large"
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: 0, // Set border radius to 0 for no curved edges
                  width: '200px', // Adjust width as needed
                  backgroundImage:
                    'linear-gradient(180deg, #D20000 0%, #000 268.49%)', // Red to dark red gradient
                  color: '#FFFFFF'
                }}
              >
                Get in touch
              </Button>
            </Grid>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Form;
