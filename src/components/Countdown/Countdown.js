import Palette from '../../theme/palette.js';

import { Box, Typography } from '@mui/material';
import indiegogo from '../../assets/logos/indiegogo-color.svg';
import kickstarter from '../../assets/logos/kickstarter-color.svg';

import CountdownLogic from './CountdownLogic';
import NewsletterSub from '../NewsletterSub/NewsletterSub.js';

function Countdown() {
  const { days, hours, minutes, seconds, campaignRunning } = CountdownLogic();
  const { STATE_GREY } = Palette();

  const timerDescriptionProps = {
    variant: 'body2',
    color: STATE_GREY,
    fontSize: 'min(3vw, 20px)',
  };

  const logosStyle = { height: { xs: '16px', sm: '20px' } };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '30px',
        maxWidth: '600px',
      }}
    >
      <Typography textAlign='center'>
        <Typography
          variant='h2'
          sx={{ textAlign: 'center', mb: 'minutes(50px,, 30vw)' }}
        >
          Get ready to grab your{' '}
        </Typography>
        <Typography component='span' variant='h2' color='primary'>
          IGLOW® Smart Jacket
        </Typography>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          maxWidth: '500px',
          gap: '10px',
          mb: '20px',
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='countdown'>{days}</Typography>
          <Typography {...timerDescriptionProps}>Days</Typography>
        </Box>
        <Typography variant='countdown'>:</Typography>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='countdown'>{hours}</Typography>
          <Typography {...timerDescriptionProps}>Hours</Typography>
        </Box>
        <Typography variant='countdown'>:</Typography>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='countdown'>{minutes}</Typography>
          <Typography {...timerDescriptionProps}>Minutes</Typography>
        </Box>
        <Typography variant='countdown'>:</Typography>
        <Box display='flex' flexDirection='column' alignItems='start'>
          <Typography variant='countdown'>{seconds}</Typography>
          <Typography
            {...timerDescriptionProps}
            sx={{
              position: 'relative',
              left: '0.2em',
              width: '5em',
            }}
          >
            Seconds
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'baseline' },
          gap: '8px',
          marginBottom: '30px',
        }}
      >
        <Typography variant='body2' textAlign='center'>
          {campaignRunning ? 'Currently on' : 'Coming soon on'}
        </Typography>
        <Typography variant='body2'>
          <Box
            component='img'
            src={indiegogo}
            alt='indiegogo'
            sx={logosStyle}
          />
          &nbsp; & &nbsp;
          <Box
            component='img'
            src={kickstarter}
            alt='kickstarter'
            sx={logosStyle}
          />
        </Typography>
      </Box>
      <NewsletterSub />
    </Box>
  );
}

export default Countdown;
