import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const HeroContainer = ({ children, ...rest }) => (
  <Box
    width={'100%'}
    margin={'0 auto'}
    paddingX={0}
    paddingY={0}
    
    {...rest}
  >
    {children}
  </Box>
);

HeroContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroContainer;
