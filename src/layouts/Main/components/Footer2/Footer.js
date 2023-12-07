
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer2() {
  return (
    <div className='grid place-content-center'>
      <div className='flex justify-center gap-2'>
        <FacebookRoundedIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
      </div>
      <div className='mb-2 mt-4 text-xs md:text-base'>Copyright @ 2023 ROCK34X. All rights reserved.</div>
    </div>
  );
}

export default Footer2;
