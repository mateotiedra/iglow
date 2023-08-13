import { Box } from '@mui/material';

function EmptySpace({ under, height }) {
  console.log(under);
  return (
    <Box
      sx={{
        height: height
          ? { xs: height / 2, sm: height }
          : under === 'h1'
          ? { xs: 24, sm: 68 }
          : under === 'h2'
          ? { xs: 24, sm: 68 }
          : { xs: 80, sm: 140 },
      }}
    />
  );
}

export default EmptySpace;
