import { Box, Button, TextField } from '@mui/material';
import HaveReadCheckbox from '../HaveReadCheckbox/HaveReadCheckbox';
import { PiBellBold } from 'react-icons/pi';

function NewsletterSub() {
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <TextField
          sx={{
            flexGrow: 1,
            mx: '20px',
          }}
          variant='outlined'
          placeholder='E-mail'
        >
          e-mail
        </TextField>
        <Button variant='contained' startIcon={<PiBellBold />}>
          Get an alert
        </Button>
      </Box>
      <HaveReadCheckbox />
    </Box>
  );
}

export default NewsletterSub;
