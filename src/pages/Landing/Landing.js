import React from 'react';
import Palette from '../../theme/palette';

import { LAUNCH_DATE, END_CAMPAIGN_DATE } from '../../config/AppConfig';
import jacketRedBack from '../../assets/images/jacket-red-back.png';
import trailer from '../../assets/videos/trailer.mp4';
import teaser from '../../assets/videos/teaser.mp4';
import subtractShape from '../../assets/images/subtract.png';
import smartJacket from '../../assets/images/smart-jacket.png';
import controller from '../../assets/images/controller.png';
import appMockup from '../../assets/images/app-mockup.png';
import mountain from '../../assets/images/mountain.png';
import { PiQuotesFill } from 'react-icons/pi';

import { Box, Container, Typography } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import Countdown from '../../components/Countdown/Countdown';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import IllustratedParagraph from '../../components/IllustratedParagraph/IllustratedParagraph';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SpecsSection from '../../components/SpecsSection/SpecsSection';
import Banner from '../../components/Banner/Banner';
import NoisyContainer from '../../components/NoisyContainer/NoisyContainer';
import IdCard from '../../components/IdCard/IdCard';
import FAQSection from '../../components/FAQSection/FAQSection';
import FormContact from '../../components/FormContact/FormContact';
import Footer from '../../components/Footer/Footer';

function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function HeroSection() {
  const { STATE_GREY } = Palette();

  const now = new Date().getTime();
  const heroVideo = now >= LAUNCH_DATE.getTime() ? trailer : teaser;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <NoisyContainer>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: {
              xs: '20vh',
              sm: '22vh',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
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
          <Box
            sx={{
              width: '100vw',
              position: 'relative',
              minWidth: '500px',
              maxWidth: '700px',
              px: '8%',
            }}
          >
            <img
              src={jacketRedBack}
              style={{
                width: '110%',
                marginBottom: '60px',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              alt='jacket'
            />
            <img
              src={jacketRedBack}
              style={{
                width: '110%',
                opacity: 0,
              }}
              alt='jacket'
            />
          </Box>
          <Countdown />
          <EmptySpace />
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Lights, Cameras, Action !
          </Typography>
          <Typography variant='h2' color='primary'>
            Unveiling the IGLOW® Smart Jacket
          </Typography>
          <EmptySpace under='h2' />
          <video
            controls
            style={{ width: '100%', borderRadius: 30, zIndex: '2' }}
          >
            <source src={heroVideo} />
          </video>
        </Container>
      </NoisyContainer>
      <img
        src={subtractShape}
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          zIndex: '1',
        }}
        alt='substract shape'
      />
    </Box>
  );
}

function WhatIsSection() {
  const { NIGHT, STATE_GREY } = Palette();
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
        <IllustratedParagraph
          overtitle='APPLICATION'
          title='GlowSafe: Your Road Safety Companion'
          text="GlowSafe is your go-to mobile app for searching routes and synchronizing Smart Jacket's indicators. Effortlessly find your way and seamlessly control the vest's blinkers for enhanced visibility."
          imgSrc={appMockup}
        />
      </Container>
      <Banner variant='black' />
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
        <EmptySpace under='h2' />
        <Typography color={STATE_GREY} textAlign='center'>
          The Smart Jacket is the culmination of over 3 years of Swiss research
          and engineering. We are dedicated to offering our customers
          unparalleled quality and adherence to safety standards. All electronic
          components and intelligent technical fabrics are entirely developed by
          Swiss companies, further solidifying our commitment to Swiss
          craftsmanship and innovation.
        </Typography>
      </Container>
      <Box component='img' src={mountain} width='101%' />
      <EmptySpace />
    </Box>
  );
}

function SocialSection() {
  const { STATE_GREY, RED } = Palette();
  return (
    <NoisyContainer>
      <Banner top='min(-17vw, -120px)' />
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <SectionTitle
          overtitle='They talk about us'
          title='IGLOW® also'
          highlight='shine in the press'
        />
        <EmptySpace under='h2' />
        <PiQuotesFill color={RED} size={70} style={{ marginBottom: '20px' }} />
        <Typography color={STATE_GREY} textAlign='center'>
          IGLOW® captures the interest of the cycling community with the launch
          of its Smart Jacket, a high-visibility vest made in Switzerland and
          designed to improve road safety. An ambitious global crowdfunding
          campaign is currently underway on Kickstarter and Indiegogo. With a
          dual focus on safety and style, the Smart Jacket IGLOW emerges as a
          pioneering extension of the cycling gear market, inviting cyclists to
          protect themselves against the daily perils of the road.
        </Typography>
        <EmptySpace />
        <SectionTitle
          overtitle='About us'
          title='Discover the'
          highlight='team behind IGLOW®'
        />
        <EmptySpace under='h2' />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'min(10vw, 80px)',
            justifyContent: 'center',
          }}
        >
          <IdCard src='fabrice.png' name='Fabrice' role='Co-founder' />
          <IdCard src='lucas.png' name='Lucas' role='Co-founder' />
          <IdCard src='alena.png' name='Alena' role='Sweing queen' />
          <IdCard src='mateo.png' name='Mateo' role='Developer' />
          <IdCard
            src='jean-baptiste.png'
            name='Jean-Baptiste'
            role='Videographer'
          />
          <IdCard
            src='maxime.png'
            name='Maxime'
            role='Visual identity manager'
          />
        </Box>
        <EmptySpace />
        {/* <SectionTitle
          overtitle='Stay tuned'
          title='Join the'
          highlight='community'
        />
        <EmptySpace under='h2' /> */}
      </Container>
    </NoisyContainer>
  );
}

function ContactSection() {
  const { NIGHT, STATE_GREY } = Palette();
  return (
    <Box backgroundColor='white' color={NIGHT} overflow='hidden'>
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle='F. A. Q.'
          title='Let us'
          highlight='enlighten you !'
        />
        <EmptySpace under='h2' />
        <FAQSection />
        <EmptySpace />
        <SectionTitle
          overtitle='Contact'
          title='Need help ?'
          highlight='We are here for you !'
        />
        <EmptySpace under='h2' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 10,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: 8,
              pb: { xs: 0, sm: 0, md: 10 },
            }}
          >
            <Typography color={STATE_GREY} variant='body1'>
              Have a question or interested in a partnership? We'd love to hear
              from you ! Contact our team by filling out the form below, and
              we'll get back to you as soon as possible !
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography variant='h3'>IGLOW® Switzerland</Typography>
              <Typography variant='body1'>
                Iglow, BP590,
                <br />
                1001 Lausanne,
                <br />
                Switzerland
              </Typography>
              <Typography
                component='a'
                href='mailto:contact@iglow.bike'
                color={NIGHT}
              >
                contact@iglow.bike
              </Typography>
            </Box>
          </Box>
          <FormContact />
        </Box>
      </Container>
      <EmptySpace />
    </Box>
  );
}

export default Landing;
