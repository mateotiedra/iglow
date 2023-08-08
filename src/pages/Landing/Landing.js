import Palette from '../../theme/palette';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Countdown from '../../components/Countdown/Countdown';

import noisyFilter from '../../assets/images/noisy-filter.png';
import jacketRedBack from '../../assets/images/jacket-red-back.png';

function Landing() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${noisyFilter})`,
        width: '100%',
      }}
    >
      <Navbar />
      <Grabber />
    </Box>
  );
}

function Grabber() {
  const { STATE_GREY } = Palette();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: {
          xs: '20vh',
          sm: '25vh',
        },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mb: '60px',
        }}
        maxWidth='770px'
      >
        <Typography variant='h1' mb={{ xs: 3, sm: 10, md: 10 }}>
          Be seen{' '}
          <Typography component='span' variant='h1' color='primary'>
            stay safe
          </Typography>{' '}
          : Innovation in motion
        </Typography>
        <Typography variant='body1' color={STATE_GREY}>
          Introducing the Smart Jacket : the smart, stylish, and secure choice
          that enhances road safety like never before.
        </Typography>
      </Box>
      <img
        src={jacketRedBack}
        style={{
          width: '70%',
          marginBottom: '60px',
          minWidth: '500px',
        }}
      />
      <Countdown />
    </Container>
  );
}

export default Landing;
