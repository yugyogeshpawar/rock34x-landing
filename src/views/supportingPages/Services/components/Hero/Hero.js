import React from 'react';
import LazyLoad from 'react-lazy-load';
import IMG from './screenshot.png';
import Video from './video.mp4';
import Box from '@mui/material/Box';

const Hero = () => {
  return (
    <Box position="relative" overflow="hidden" marginTop="-64px"> {/* Add overflow: hidden */}
      <Box
        display={'flex'}
        height={'100vh'} // Adjust the height as needed
        position="relative"
      >
        <LazyLoad>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMG}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </LazyLoad>
        <Box
          position="relative"
          zIndex={1}
          height={'100%'}
          width={'100%'}
          maxWidth={600}
          // Add additional styling for your content overlay
        >
          {/* Your content goes here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
