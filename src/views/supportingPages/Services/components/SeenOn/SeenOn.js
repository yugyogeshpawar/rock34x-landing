import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SeenOn = () => {
  const theme = useTheme();
  return (
    <Box
    >
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={300}
          variant={'h4'}
          gutterBottom
          align={'center'}
          marginBottom={4}
        >
          Explore the best projects on ROCK34X
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          fontWeight={200}
        >
          Rock34X is a Web 3.0 investment infrastructure needed to help promote
          investing in crypto accessible to a mainstream audience and their
          distinct demands while staying compliant, fostering more inclusive
          investment opportunities
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}></Box>
      </Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        As seen on
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
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
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(1)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SeenOn;
