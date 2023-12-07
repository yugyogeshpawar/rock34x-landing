import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import HeroContainer from 'common/HeroContainer';
import {
  Hero,
  SeenOn,
  WhatWeDo,
} from './components';

const Services = () => {

  return (
    <Box>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Container>
        <WhatWeDo />
      </Container>
      <Box bgcolor='black'>
        <Container>
          <SeenOn />
        </Container>
      </Box>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
