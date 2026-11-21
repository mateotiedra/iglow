import { Box, Typography } from '@mui/material';
import Palette from '../../theme/palette';

function IllustratedParagraph({
  reverse,
  imgSrc,
  imgTopSrc,
  circleColor,
  imgMaxWidth,
  textMaxWidth,
  title,
  overtitle,
  text,
}) {
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
      <Box color={STATE_GREY} sx={{ maxWidth: textMaxWidth }}>
        <Typography variant='subtitle1' mb={2} textTransform={'uppercase'}>
          {overtitle}
        </Typography>
        <Typography variant='h3' mb={2} color={NIGHT}>
          {title}
        </Typography>
        {text}
      </Box>
      {imgTopSrc ? (
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '80vw', sm: '200%' },
            maxWidth: imgMaxWidth || '300px',
            minHeight: '380px',
          }}
        >
          {circleColor && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '92%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                backgroundColor: circleColor,
                zIndex: 0,
              }}
            />
          )}
          <Box
            component='img'
            src={imgTopSrc}
            sx={{ width: '54%', zIndex: 1, position: 'relative' }}
          />
          <Box
            component='img'
            src={imgSrc}
            sx={{ width: '80%', mt: '-6%', zIndex: 1, position: 'relative' }}
          />
        </Box>
      ) : (
        <Box
          component='img'
          src={imgSrc}
          sx={{ width: { xs: '70vw', sm: '200%' }, maxWidth: '300px' }}
        />
      )}
    </Box>
  );
}

export default IllustratedParagraph;
