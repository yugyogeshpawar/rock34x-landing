// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
//   timeline: {
//     transform: 'rotate(90deg)',
//   },
//   timelineContent: {
//     display: 'inline-block',
//     transform: 'rotate(-90deg)',
//     textAlign: 'center',
//     minWidth: 50
//   },
//   timelineIcon: {
//     transform: 'rotate(-90deg)'
//   }
// });

// function Roadmap() {
//   const classes = useStyles();
//   return (
//     <Timeline className={classes.timeline} align="alternate">
//       <TimelineItem>
//         <TimelineSeparator>
//           <CheckCircleOutlineIcon
//             color="primary"
//             className={classes.timelineIcon}
//           />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent className={classes.timelineContentContainer}>
//           <Paper className={classes.timelineContent}>
//             <Typography>Eat</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <CheckCircleOutlineIcon
//             color="primary"
//             className={classes.timelineIcon}
//           />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent className={classes.timelineContentContainer}>
//           <Paper className={classes.timelineContent}>
//             <Typography>Code</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <CheckCircleOutlineIcon
//             color="primary"
//             className={classes.timelineIcon}
//           />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent className={classes.timelineContentContainer}>
//           <Paper className={classes.timelineContent}>
//             <Typography>Sleep</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <CheckCircleOutlineIcon
//             color="primary"
//             className={classes.timelineIcon}
//           />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent className={classes.timelineContentContainer}>
//           <Paper className={classes.timelineContent}>
//             <Typography>Repeat</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <CheckCircleOutlineIcon
//             color="primary"
//             className={classes.timelineIcon}
//           />
//         </TimelineSeparator>
//         <TimelineContent className={classes.timelineContentContainer}>
//           <Paper className={classes.timelineContent}>
//             <Typography>Sleep</Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

// export default Roadmap;


import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Roadmap = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const timeline = [
    {
      date: 'Q4 2023',
      title: 'Platform development, community building and onboarding.',
    },
    {
      date: 'Q1 2024',
      title: 'Platform Pilot Launch, Partnership & Marketing.',
    },
    {
      date: 'Q2 2024',
      title: 'Public Sale of Token,Processes, Services & and regulatory compliances.',
    },
    {
      date: 'Q3 2024',
      title: 'Token TGE & Exchange Listing, Job Marketplace launch',
    },
  ];

  const TimeLineMobileView = ({ timeline = [] }) => (
    <Grid container spacing={2}>
      {timeline.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box display={'flex'} alignItems={'center'}>
            <Box
              width={10}
              height={10}
              borderRadius={'100%'}
              bgcolor={theme.palette.primary.main}
              marginRight={2}
            />
            <Box>
              <Typography
                variant={'subtitle1'}
                color={'textSecondary'}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant={'h6'}>{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  TimeLineMobileView.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  const TimeLineDesktopView = ({ timeline = [] }) => (
    <Grid container spacing={2}>
      {timeline.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box
            paddingBottom={4}
            display={'flex'}
            alignItems={'center'}
            flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
            marginRight={i % 2 === 1 ? 'calc(50% - 5px)' : 0}
            marginLeft={i % 2 !== 1 ? 'calc(50% - 5px)' : 0}
           
          >
            <Box
              width={10}
              height={10}
              borderRadius={'100%'}
              bgcolor={theme.palette.primary.main}
              marginRight={i % 2 !== 1 ? 5 : 0}
              marginLeft={i % 2 === 1 ? 5 : 0}
            />
            <Box>
              <Typography
                variant={'subtitle1'}
                color={'textSecondary'}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant={'h6'}>{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  TimeLineDesktopView.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  return (
    <Box>
  
      {isSm ? (
        <TimeLineDesktopView timeline={timeline} />
      ) : (
        <TimeLineMobileView timeline={timeline} />
      )}
    </Box>
  );
};

export default Roadmap;
