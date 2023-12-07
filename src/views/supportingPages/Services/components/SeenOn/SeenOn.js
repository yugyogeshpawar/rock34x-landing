import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/system/Unstable_Grid/Grid';

const SeenOn = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
      }}
    >
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          marginBottom={4}
          sx={{
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontSize: '60px',
            lineHeight: '69px',
            color: '#FFFFFF',
          }}
        >
          Explore the best projects on ROCK34X
        </Box>

        <Box marginBottom={4}>
          <Typography
            color={'textSecondary'}
            align={'center'}
            sx={{
              fontFamily: 'Raleway',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '170%',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            Rock34X is a Web 3.0 investment infrastructure needed to help
            promote investing in <br /> crypto accessible to a mainstream
            audience and their distinct demands while <br /> staying compliant,
            fostering more inclusive investment opportunities
          </Typography>
        </Box>
      </Box>
      {/*<Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'center'}
        marginTop={6}
        marginBottom={2}
      >
        {[
          'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
          'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
          'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
          'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
          'https://assets.maccarianagency.com/svg/logos/google-original.svg',
          'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
        ].map((item, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={'100%'}
              width={'100%'}
              src={item}
              alt="..."
            />
          </Box>
        ))}
        </Box>*/}
      {/*<Box display="flex" alignItems="center" justifyContent="center">

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginRight='10vw' // Adjust the margin as needed
          marginTop={7}
          color="white" // Set text color to white
        >
          <Typography variant="body2">Click More To Explore</Typography>
          <ArrowForwardIcon fontSize="large" />
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          marginTop={6}
          marginBottom={2}
        >
          {[
            'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
            'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
            'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
            'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
            'https://assets.maccarianagency.com/svg/logos/google-original.svg',
            'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
          ].map((item, i) => (
            <Box maxWidth={90} marginTop={2} marginRight={6} key={i}>
              <Box
                component="img"
                height={'100%'}
                width={'100%'}
                src={item}
                alt="..."
              />
            </Box>
          ))}
        </Box>
          </Box>*/}

      <Box>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              marginTop={7}
              color="white"
            >
              <Typography variant="body2">Click More To Explore</Typography>
              <ArrowForwardIcon fontSize="large" />
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              marginTop={6}
              marginBottom={2}
            >
              {[
                'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
                'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
                'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
                'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
                'https://assets.maccarianagency.com/svg/logos/google-original.svg',
                'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
              ].map((item, i) => (
                <Box key={i} maxWidth={90} marginTop={2} marginRight={6}>
                  <Box
                    component="img"
                    height={'100%'}
                    width={'100%'}
                    src={item}
                    alt="..."
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SeenOn;
