import Palette from '../../theme/palette.js';

import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import indiegogo from '../../assets/logos/indiegogo-color.svg';
import kickstarter from '../../assets/logos/kickstarter-color.svg';
import { PiBellBold } from 'react-icons/pi';

import CountdownLogic from './CountdownLogic';

function Countdown() {
  const { days, hours, minutes, seconds } = CountdownLogic();
  const { STATE_GREY } = Palette();
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
      <Typography variant='h2' textAlign='center' mb='50px'>
        Get ready to grab your{' '}
        <Typography component='span' variant='h2' color='primary'>
          IGLOW® Smart Jacket
        </Typography>{' '}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          width: '500px',
          gap: '10px',
          mb: '20px',
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='countdown' sx={{}}>
            {days}
          </Typography>
          <Typography variant='body2' color={STATE_GREY}>
            Days
          </Typography>
        </Box>
        <Typography variant='countdown'>:</Typography>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='countdown' sx={{}}>
            {hours}
          </Typography>
          <Typography variant='body2' color={STATE_GREY}>
            Hours
          </Typography>
        </Box>
        <Typography variant='countdown'>:</Typography>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='countdown' sx={{}}>
            {minutes}
          </Typography>
          <Typography variant='body2' color={STATE_GREY}>
            Minutes
          </Typography>
        </Box>
        <Typography variant='countdown'>:</Typography>
        <Box display='flex' flexDirection='column' alignItems='start'>
          <Typography variant='countdown' sx={{}}>
            {seconds}
          </Typography>
          <Typography
            variant='body2'
            color={STATE_GREY}
            sx={{
              position: 'relative',
              left: '10px',
            }}
          >
            Seconds
          </Typography>
        </Box>
      </Box>

      <Typography variant='body2'>
        Coming soon on &nbsp;
        <img src={indiegogo} alt='indiegogo' style={{ height: '20px' }} />
        &nbsp; & &nbsp;
        <img src={kickstarter} alt='kickstarter' style={{ height: '20px' }} />
      </Typography>

      <Box>
        <TextField
          sx={{
            flexGrow: 1,
            mr: '20px',
          }}
        >
          e-mail
        </TextField>

        <Button variant='contained' startIcon={<PiBellBold />}>
          Get an alert
        </Button>
      </Box>
    </Box>
  );
}

export default Countdown;
