import { Box } from '@mui/material';
import Footer from '../../components/Footer/Footer';

function Landing() {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pt: { xs: 0, sm: 0, md: 20 },
          mt: { xs: 20, sm: 20, md: 0 },
        }}
      >
        <Footer />
      </Box>
    </>
  );
}

export default Landing;
