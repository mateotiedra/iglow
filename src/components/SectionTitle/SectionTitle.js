import Palette from '../../theme/palette';

import { Typography } from '@mui/material';

function SectionTitle({ overtitle, reverse, highlight, title }) {
  const { STATE_GREY } = Palette();
  return (
    <>
      <Typography
        variant='subtitle1'
        textAlign='center'
        transform='uppercase'
        mb={2}
        color={STATE_GREY}
      >
        {overtitle}
      </Typography>
      <Typography variant='h2' textAlign='center'>
        {reverse ? (
          <>
            <Typography component='span' variant='inherit' color='primary'>
              {highlight}
            </Typography>
            {' ' + title}
          </>
        ) : (
          <>
            {title + ' '}
            <Typography component='span' variant='inherit' color='primary'>
              {highlight}
            </Typography>
          </>
        )}
      </Typography>
    </>
  );
}

export default SectionTitle;