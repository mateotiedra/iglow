import Palette from '../../theme/palette.js';

import { Box, Typography, Button } from '@mui/material';
import indiegogo from '../../assets/logos/indiegogo-color.svg';
import kickstarter from '../../assets/logos/kickstarter-color.svg';
import smartJacket from '../../assets/images/smart-jacket.png';

import CountdownLogic from './CountdownLogic';
import NoisyContainer from '../NoisyContainer/NoisyContainer.js';

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
    </Box>
  );
}

export default Countdown;
