// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import WebbeeLogo from 'svg/logos/Webbee';

// const Footer = () => (
//   <Grid container spacing={2}>
//     <Grid item xs={12}>
//       <Box
//         display={'flex'}
//         justifyContent={'space-between'}
//         alignItems={'center'}
//         width={'100%'}
//         flexDirection={{ xs: 'column', sm: 'row' }}
//       >
//         <Box
//           display={'flex'}
//           component="a"
//           underline="none"
//           href="/"
//           title="webbee"
//           height={24}
//           width={35}
//         >
//           <WebbeeLogo height={'100%'} width={'100%'} />
//         </Box>
//         <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
//           <Box marginTop={1} marginRight={2}>
//             <Link
//               underline="none"
//               component="a"
//               href="/"
//               color="textPrimary"
//               variant={'subtitle2'}
//             >
//               Home
//             </Link>
//           </Box>
//           <Box marginTop={1} marginRight={2}>
//             <Link
//               underline="none"
//               component="a"
//               href="/docs-introduction"
//               color="textPrimary"
//               variant={'subtitle2'}
//             >
//               Documentation
//             </Link>
//           </Box>
//           <Box marginTop={1}>
//             <Button
//               variant="outlined"
//               color="primary"
//               component="a"
//               target="blank"
//               href="https://material-ui.com/store/items/webbee-landing-page/"
//               size="small"
//             >
//               Purchase now
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Grid>
//     <Grid item xs={12}>
//       <Typography
//         align={'center'}
//         variant={'subtitle2'}
//         color="textSecondary"
//         gutterBottom
//       >
//         &copy; Webbee. 2021, Maccarian. All rights reserved
//       </Typography>
//       <Typography
//         align={'center'}
//         variant={'caption'}
//         color="textSecondary"
//         component={'p'}
//       >
//         When you visit or interact with our sites, services or tools, we or our
//         authorised service providers may use cookies for storing information to
//         help provide you with a better, faster and safer experience and for
//         marketing purposes.
//       </Typography>
//     </Grid>
//   </Grid>
// );

// export default Footer;


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
