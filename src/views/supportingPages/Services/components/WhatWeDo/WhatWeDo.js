import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const WhatWeDo = () => {

  return (
    <Box>
      <Box marginBottom={4}>
        {/*<Typography
          variant={'h2'}
          fontWeight={700}
          sx={{
            textTransform: 'uppercase'
          }}
          gutterBottom
          color={'textPrimary'}
          align={'center'}
          lineHeight={69}
        >*/}
        <Typography
          variant={'h3'}
          fontWeight={700}
          sx={{
            textTransform: 'uppercase',
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontSize: '60px',
            lineHeight: '69px',
            textAlign: 'center',
            color: '#000000',
          }}
          gutterBottom
          align={'center'}
          lineHeight={69}
        >
          Welcome to <span style={{ color: 'red' }}>Rock</span>34
          <span style={{ color: 'red' }}>X</span>
        </Typography>
        {/*<Box
          component={Typography}
          fontWeight={300}
          variant={'h4'}
          gutterBottom
          align={'center'}
          marginBottom={4}
        >
          Participate in the most promising Pre-TGE
          <br /> Web3 projects
        </Box>*/}

        <Typography
          variant={'h4'}
          fontWeight={700}
          sx={{
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '46px',
            textAlign: 'center',
            color: '#000000',
          }}
          gutterBottom
          marginBottom={4}
        >
          Participate in the most promising Pre-TGE
          <br /> Web3 projects
        </Typography>

        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          fontWeight={400}
          sx={{
            fontFamily: 'Raleway',
            fontStyle: 'italic',
            fontSize: '22px',
            lineHeight: '151%',
            textAlign: 'center',
            color: '#000000',
          }}
        >
          Our mission: to unite visionaries and investors in an ecosystem of
          boundless possibilities.
          <br /> As the global Web3and Blockchain market hurtles towards a
          projected $49 billion by 2030, with over 25,000 crypto <br /> projects
          already thriving, the time to harness this explosive growth is now.
        </Typography>

        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          {/*<Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Contact us
          </Box>*/}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: '',
            subtitle:
              'Target Market GCC- Compliance\n-first, institutional-grade Defi\nPlatform.',
            icon: 'icon1.png',
            // color: colors.teal,
          },
          {
            title: '',
            subtitle:
              'Achieve greater efficiency in your investment workflow with blockchain-based workflows.',
            icon: 'icon2.png',
            // color: colors.teal,
          },
          {
            title: '',
            subtitle:
              'Category: NFT, Metaverse, Infrastructure, DeFi, Gaming, AI and other trending innovations.',
            icon: 'icon3.png',
            // color: colors.teal,
          },
          {
            title: '',
            subtitle:
              'AI-powered Resonance score and automation remove the manual process of managing regulatory requirements, portfolio company updates and investment documents.',
            icon: 'icon4.png',
            // color: colors.teal,
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={12} md={6} key={i}>
            <Box component={Card} boxShadow={0} borderRadius={4}>
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                padding={{ xs: 2, sm: 4, md: 6 }}
                sx={{
                  '&:last-child': {
                    paddingBottom: { xs: 2, sm: 4, md: 6 },
                  },
                  boxShadow: 'none', // Set boxShadow to 0 or 'none' to remove the shadow
                }}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={84}
                  height={84}
                  marginRight={4}
                  bgcolor='transparent'
                  borderRadius={5}
                >
                  <Box >
                    <img
                      src={`/assets/${item.icon}`} // Assuming the icons are in the public/icons directory
                      width={86}
                      height={86}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography align={'left'} color="textPrimary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
