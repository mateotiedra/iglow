import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Palette from '../../theme/palette';

import Navbar from '../../components/Navbar/Navbar';
import Countdown from '../../components/Countdown/Countdown';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import IllustratedParagraph from '../../components/IllustratedParagraph/IllustratedParagraph';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import noisyFilter from '../../assets/images/noisy-filter.png';
import jacketRedBack from '../../assets/images/jacket-red-back.png';
import trailer from '../../assets/videos/trailer.mp4';
import subtractShape from '../../assets/images/subtract.png';
import smartJacket from '../../assets/images/smart-jacket.png';
import controller from '../../assets/images/controller.png';
import mountain from '../../assets/images/mountain.png';
import redBanner from '../../assets/images/red-banner.svg';
import blackBanner from '../../assets/images/black-banner.svg';
import SpecsSection from '../../components/SpecsSection/SpecsSection';

function Landing() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <WhatIsSection />
    </Box>
  );
}

function HeroSection() {
  const { STATE_GREY } = Palette();
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Box sx={{ backgroundImage: `url(${noisyFilter})`, width: '100%' }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: {
              xs: '20vh',
              sm: '25vh',
            },
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
            <Typography variant='h1'>
              Be seen{' '}
              <Typography component='span' variant='h1' color='primary'>
                stay safe
              </Typography>{' '}
              : Innovation in motion
            </Typography>
            <EmptySpace under='h1' />
            <Typography variant='body1' color={STATE_GREY}>
              Introducing the Smart Jacket : the smart, stylish, and secure
              choice that enhances road safety like never before.
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
          <EmptySpace />
          <Typography textAlign='center'>
            <Typography variant='h2' sx={{ textAlign: 'center' }}>
              Lights, Cameras, Action !
            </Typography>
            <Typography variant='h2' color='primary'>
              Unveiling the IGLOW® Smart Jacket
            </Typography>
          </Typography>
          <EmptySpace under='h2' />
          <video
            controls
            style={{ width: '100%', borderRadius: 30, zIndex: '2' }}
          >
            <source src={trailer} />
          </video>
        </Container>
      </Box>
      <img
        src={subtractShape}
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          zIndex: '1',
        }}
      />
    </Box>
  );
}

function WhatIsSection() {
  const { NIGHT } = Palette();
  return (
    <Box backgroundColor='white' color={NIGHT} overflow='hidden'>
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle='WHAT IS IGLOW ?'
          title='Ride bright'
          highlight='stay in sight'
        />
        <EmptySpace under='h2' />
        <IllustratedParagraph
          overtitle='safety'
          title='High Visibility Smart Jacket'
          text='Featuring state-of-the-art LED indicators, the vest offers improved visibility, particularly in low-light conditions. Its streamlined and ergonomic design guarantees both comfort and user-friendliness, even when you carry a backpack.'
          imgSrc={smartJacket}
        />
        <EmptySpace />
        <IllustratedParagraph
          reverse
          overtitle='Flexibility'
          title='Ergonomic Remote Control'
          text='To control the turn signals, the Smart Jacket is equipped with a remote control that enables users to effortlessly activate them with a simple thumb press, without needing to glance at their fingers and while staying focused on the road.'
          imgSrc={controller}
        />
        <EmptySpace />
      </Container>
      <Box
        component='img'
        src={blackBanner}
        sx={{ width: '101%', display: { xs: 'none', sm: 'inline' } }}
      />
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle='For the nerds'
          title='Exploring the'
          highlight='specs'
        />
        <EmptySpace under='h2' />
        <SpecsSection />
        <EmptySpace />
        <SectionTitle
          overtitle='Engineered in Switzerland'
          highlight='Swiss quality'
          title='unmatched safety'
          reverse
        />
      </Container>
      <Box component='img' src={mountain} width='101%' />
      <Box
        component='img'
        src={blackBanner}
        sx={{ width: '101%', position: 'relative', top: 175 }}
      />
      <Box
        component='img'
        src={redBanner}
        sx={{ width: '101%', position: 'relative', top: 100 }}
      />
    </Box>
  );
}

export default Landing;
