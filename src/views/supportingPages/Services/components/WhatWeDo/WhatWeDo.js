import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';

const WhatWeDo = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}
      >
        <Typography
          variant={'h2'}
          fontWeight={500}
          sx={{
            textTransform: 'uppercase'
          }}
          gutterBottom
          color={'textPrimary'}
          align={'center'}
        >
        Welcome to Rock34X
        </Typography>
        <Box
          component={Typography}
          fontWeight={300}
          variant={'h4'}
          gutterBottom
          align={'center'}
          marginBottom={4}
        >
        Participate in the most promising Pre-TGE<br /> Web3 projects
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          fontWeight={200}
        >
        Our mission: to unite visionaries and investors in an ecosystem of boundless possibilities.
        As the global Web3and Blockchain market hurtles towards a projected $49 billion by 2030, with over 25,000 crypto projects already thriving, the time to harness this explosive growth is now.
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
              'Target Market GCC- Compliance-first, institutional-grade Defi Platform.',
            icon: (
              <svg
                width={48}
                height={48}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            ),
            color: colors.teal,
          },
          {
            title: '',
            subtitle:
              'Achieve greater efficiency in your investment workflow with blockchain-based workflows.',
            icon: (
              <svg
                width={48}
                height={48}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            ),
            color: colors.teal,
          },
          {
            title: '',
            subtitle:
              'Category: NFT, Metaverse, Infrastructure, DeFi, Gaming, AI and other trending innovations.',
            icon: (
              <svg
                width={48}
                height={48}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ),
            color: colors.teal,
          },
          {
            title: '',
            subtitle:
              'AI-powered Resonance score and automation remove the manual process of managing regulatory requirements, portfolio company updates and investment documents.',
            icon: (
              <svg
                width={48}
                height={48}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            ),
            color: colors.teal,
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={12} md={6} key={i}>
           
            <Box component={Card} boxShadow={3} borderRadius={4}>
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
                }}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={84}
                  height={84}
                  marginRight={4} 
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  borderRadius={5}
                >
                  <Box color={theme.palette.primary.main}>{item.icon}</Box>
                </Box>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    {item.title}
                  </Typography>
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
