import redBanner from '../../assets/images/red-banner.svg';
import blackBanner from '../../assets/images/black-banner.svg';
import { Box } from '@mui/material';

function Banner({ variant = 'both' }) {
  const bannerStyle = {
    width: '101%',
    minWidth: '650px',
    position: 'relative',
    left: -1,
  };
  return (
    <Box>
      {(variant == 'black' || variant == 'both') && (
        <Box
          component='img'
          src={blackBanner}
          sx={{
            ...bannerStyle,
            top: variant == 'both' ? 'max(3vw, 20px)' : 0,
          }}
        />
      )}
      {(variant == 'red' || variant == 'both') && (
        <Box component='img' src={redBanner} sx={bannerStyle} />
      )}
    </Box>
  );
}

export default Banner;