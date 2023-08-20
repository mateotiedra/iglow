import Palette from '../../theme/palette';

import { Checkbox, Typography } from '@mui/material';

function HaveReadCheckbox() {
  const { STATE_GREY } = Palette();
  return (
    <Typography variant='body2' color={STATE_GREY} fontSize='min(3vw, 20px)'>
      <Checkbox style={{ position: 'relative', bottom: '2px' }} />I have read
      and I accept{' '}
      <Typography component='a' variant='body2' color='primary'>
        the privacy policy
      </Typography>
    </Typography>
  );
}

export default HaveReadCheckbox;
