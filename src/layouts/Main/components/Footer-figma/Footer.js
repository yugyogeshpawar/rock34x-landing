
import React from 'react';
import WebbeeLogo from 'svg/logos/Webbee';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer_Figma() {
  return (
    <div className='grid grid-cols-1 text-sm md:grid md:grid-cols-2 md:text-base '>
      <div className='grid grid-rows-2'>
        <div className='grid grid-cols-3 my-2'>
          <div className='grid'>
            <a href="">About</a>
            <a href="">Wallet</a>
            <a href="">Projects</a>
            <a href="">Roadmap</a>
          </div>
          <div className='grid'>
            <a href="">Investor</a>
            <a href="">Startup</a>
            <a href="">FAQ</a>
            <a href="">Contacts</a>
          </div>
          <div className=''>
            <div>
            Follow us:
            </div>
            <div>
              <FacebookRoundedIcon/>
              <TwitterIcon/>
              <InstagramIcon/>
              <LinkedInIcon/>
            </div>
          </div>
        </div>

        <div>
          <div>
            <WebbeeLogo height={'50%'} width={'50%'} />
          </div>
          <div>Copyright @ 2023 ROCK34X. All rights reserved.</div>
        </div>

      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvY2tldHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
    </div>
  );
}

export default Footer_Figma;
