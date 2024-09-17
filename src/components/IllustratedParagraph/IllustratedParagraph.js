import { Box, Typography } from '@mui/material';
import Palette from '../../theme/palette';

function IllustratedParagraph({ reverse, imgSrc, title, overtitle, text }) {
  const { NIGHT, STATE_GREY } = Palette();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: reverse ? 'row-reverse' : 'row',
        },
        alignItems: 'center',
        justifyContent: 'space-around',
        maxWidth: '1100px',
        gap: {
          xs: 4,
          sm: '15%',
        },
      }}
    >
      <Box color={STATE_GREY}>
        <Typography variant='subtitle1' mb={2} textTransform={'uppercase'}>
          {overtitle}
        </Typography>
        <Typography variant='h3' mb={2} color={NIGHT}>
          {title}
        </Typography>
        {text}
      </Box>
      <Box
        component='img'
        src={imgSrc}
        sx={{ width: { xs: '70vw', sm: '200%' }, maxWidth: '300px' }}
      />
    </Box>
  );
}

export default IllustratedParagraph;
