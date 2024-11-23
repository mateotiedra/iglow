import { Box } from '@mui/material';

import noisyFilter from '../../assets/images/noisy-filter.png';

function NoisyContainer({ children, ...props }) {
  return (
    <Box sx={{ width: '100%' }} {...props}>
      {children}
    </Box>
  );
}

export default NoisyContainer;
