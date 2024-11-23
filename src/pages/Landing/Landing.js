import React from 'react';
import Palette from '../../theme/palette';

import { CONTACT_EMAIL } from '../../config/AppConfig';
import jacketHero from '../../assets/images/jacket-hero.png';
import schoeller from '../../assets/images/partners/schoeller.png';
import systronic from '../../assets/images/partners/systronic.png';
import trailer16x9 from '../../assets/videos/trailer/16x9.mp4';
import topspot1x1 from '../../assets/videos/topspot/1x1.mp4';
import topspot16x9 from '../../assets/videos/topspot/16x9.mp4';
import trailerThumbnail from '../../assets/images/trailer-thumbnail.png';
import subtractShape from '../../assets/images/subtract.png';
import smartJacket from '../../assets/images/smart-jacket.png';
import controller from '../../assets/images/controller.png';
import appMockup from '../../assets/images/app-mockup.png';
import mountain from '../../assets/images/mountain.png';

import { Box, Container, Typography } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import Countdown from '../../components/Countdown/Countdown';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import IllustratedParagraph from '../../components/IllustratedParagraph/IllustratedParagraph';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SpecsSection from '../../components/SpecsSection/SpecsSection';
import Banner from '../../components/Banner/Banner';
import IdCard from '../../components/IdCard/IdCard';
import FAQSection from '../../components/FAQSection/FAQSection';
import FormContact from '../../components/FormContact/FormContact';
import Footer from '../../components/Footer/Footer';
import NoisyContainer from '../../components/NoisyContainer/NoisyContainer';

function Landing() {
  return (
    <Box overflow='hidden'>
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
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
        backgroundColor: 'black',
      }}
    >
      <NoisyContainer>
        <Box
          sx={{
            width: '100%',
            marginBottom: '60px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: { xs: '30px', sm: 'calc(60px-10vw)', xl: 0 },
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                height: '100px',
                width: '100%',
                position: 'absolute',
                top: 0,
                background: 'linear-gradient(180deg, black, transparent)',
              }}
            />
            <Box
              component='video'
              src={topspot1x1}
              sx={{
                width: '100vw',
                display: { xs: 'inline', sm: 'inline', md: 'none' },
              }}
              alt='teaser'
              autoPlay
              loop
              muted
              playsInline
            />
            <Box
              component='video'
              src={topspot16x9}
              sx={{
                width: '100vw',
                display: { xs: 'none', sm: 'none', md: 'inline' },
              }}
              alt='teaser'
              autoPlay
              loop
              muted
              playsInline
            />
            <Box
              sx={{
                height: '100px',
                width: '100%',
                position: 'relative',
                top: '-100px',
                background: 'linear-gradient(0deg, black, transparent)',
              }}
            />
          </Box>
        </Box>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: {
              xs: '60vh',
              sm: '80vh',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: '20',
            }}
            maxWidth='770px'
          >
            <Typography variant='h1'>
              IGLOW : The Smart Bike Jacket -{' '}
              <Typography component='span' variant='h1' color='primary'>
                Be Seen
              </Typography>
              {', '}
              Be Safe
            </Typography>
            <EmptySpace under='h1' />
            <Typography variant='body1' color={STATE_GREY}>
              The world's first smart jacket – the ultimate fusion of style,
              technology and Swiss quality.
            </Typography>
          </Box>
          <img
            src={jacketHero}
            style={{
              width: '80vw',
              maxWidth: '600px',
              marginTop: '60px',
              marginBottom: '40px',
              position: 'relative',
              left: '10px',
            }}
            alt='jacket'
          />
          <Countdown />
          <EmptySpace />
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Lights, Cameras, Action !
          </Typography>
          <Typography variant='h2' color='primary' sx={{ textAlign: 'center' }}>
            Unveiling the IGLOW® Smart Jacket
          </Typography>
          <EmptySpace under='h2' />
          <video
            controls
            style={{ width: '100%', borderRadius: 30, zIndex: '2' }}
            poster={trailerThumbnail}
          >
            <source src={trailer16x9} />
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
      <Container sx={{ width: '100%' }}>
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
          title='The Smart Remote'
          text='Keep your eyes on the road while controlling your safety with the iGlow remote – effortless visibility at your fingertips.'
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            gap: { xs: 2, sm: 10 },
          }}
        >
          <img src={schoeller} style={{ maxWidth: '30%' }} alt='schoeller' />
          <Typography color={STATE_GREY} textAlign='center'>
            X
          </Typography>
          <img src={systronic} style={{ maxWidth: '50%' }} alt='systronic' />
        </Box>
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
  return (
    <NoisyContainer>
      <Banner top='min(-17vw, -120px)' />
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* <SectionTitle
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
        <EmptySpace /> */}
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
          <IdCard src='fabrice.png' name='Fabrice' role='Founder' />
          <IdCard src='alena.png' name='Alena' role='Sewing queen' />
          <IdCard src='mateo.png' name='Mateo' role='Lead Developer' />
          <IdCard src='lucas.png' name='Lucas' role='Electronic Engineer' />
          <IdCard src='maxime.png' name='Maxime' role='Lead Brand Designer' />
          <IdCard
            src='jean-baptiste.png'
            name='Jean-Baptiste'
            role='Videographer'
          />
          <IdCard src='sam.png' name='Sam' role='Digital Media Specialist' />
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
                href={'mailto:' + CONTACT_EMAIL}
                color={NIGHT}
              >
                {CONTACT_EMAIL}
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
