import Palette from '../../theme/palette';

import { Box, Typography } from '@mui/material';
import EmptySpace from '../EmptySpace/EmptySpace';

function IdCard({ src, name, role }) {
  const { STATE_GREY } = Palette();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: { xs: '130px', sm: '200px', md: '250px' },
      }}
    >
      <Box component='img' src={'/images/team/' + src} width='100%' />
      <EmptySpace height={16} />
      <Typography variant='h4' textTransform='capitalize'>
        {name}
      </Typography>
      <EmptySpace under='h4' />
      <Typography
        variant='subtitle2'
        color={STATE_GREY}
        textTransform='uppercase'
      >
        {role}
      </Typography>
    </Box>
  );
}

export default IdCard;
