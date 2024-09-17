import React, { useCallback, useState } from 'react';
import axios from 'axios';
import {
  BREVO_API_KEY,
  BREVO_API_URL,
  BREVO_LIST_ID,
} from '../../config/AppConfig';

import { Box, Button, TextField } from '@mui/material';
import HaveReadCheckbox from '../HaveReadCheckbox/HaveReadCheckbox';
import { PiBellBold } from 'react-icons/pi';

function NewsletterSub() {
  const [email, setEmail] = useState('');
  console.log(email);
  console.log(BREVO_API_KEY, BREVO_API_URL, BREVO_LIST_ID);

  const handleEmailChange = useCallback(
    (e) => {
      setEmail(e.target.value);
      console.log(email);
    },
    [email]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Data to send
      const data = {
        email: email,
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true,
      };

      // Set up headers
      const headers = {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      };

      // Make the API call
      axios
        .post(BREVO_API_URL, data, { headers })
        .then((response) => {
          console.log(response.data);
          setEmail(''); // clear input field
        })
        .catch((error) => {
          console.error(error.response);
        });
    },
    [email]
  );

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
          placeholder='e-mail'
          onChange={handleEmailChange}
        >
          e-mail
        </TextField>
        <Button
          variant='contained'
          startIcon={<PiBellBold />}
          onClick={handleSubmit}
        >
          Get an alert
        </Button>
      </Box>
      <HaveReadCheckbox />
    </Box>
  );
}

export default NewsletterSub;
