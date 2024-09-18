import React, { useCallback, useState } from 'react';
import axios from 'axios';
import {
  BREVO_API_KEY,
  BREVO_API_URL,
  BREVO_LIST_ID,
} from '../../config/AppConfig';

import { Box, Button, Checkbox, Typography } from '@mui/material';
import { PiBellBold, PiCheckBold } from 'react-icons/pi';
import Palette from '../../theme/palette';
import { useForm } from 'react-hook-form';
import FormField from '../FormField/FormField';

function NewsletterSub() {
  const { STATE_GREY } = Palette();

  const [policyChecked, setPolicyChecked] = useState(false);
  const handlePolicyCheck = useCallback(() => {
    setPolicyChecked((p) => !p);
  }, []);

  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const postEmail = ({ email }) => {
    if (!policyChecked) {
      setError('email', {
        type: 'custom',
        message: 'You must accept the privacy policy below',
      });
      return;
    }
    console.log(email);

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
      .post(BREVO_API_URL + '/contacts', data, { headers })
      .then((response) => {
        setSubscribed(true);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };

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
        component='form'
        onSubmit={handleSubmit(postEmail)}
      >
        <FormField
          noLabel
          erroAbsPos
          variant='outlined'
          label='Email'
          register={register}
          id='email'
          options={{
            required: 'Email adress is required',
            pattern: {
              message: 'Invalid email address',
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            },
          }}
          error={errors.email}
          sx={{ borderRadius: 20 }}
        />
        <Button
          variant='contained'
          startIcon={subscribed ? <PiCheckBold /> : <PiBellBold />}
          onClick={handleSubmit(postEmail)}
        >
          {subscribed ? 'Subscribed!' : 'Get an alert'}
        </Button>
      </Box>
      <Typography
        variant='body2'
        color={STATE_GREY}
        fontSize='min(3vw, 20px)'
        onClick={handlePolicyCheck}
        sx={{ cursor: 'pointer' }}
      >
        <Checkbox
          style={{ position: 'relative', bottom: '2px' }}
          checked={policyChecked}
        />
        I have read and I accept{' '}
        <Typography component='a' variant='body2' color='primary'>
          the privacy policy
        </Typography>
      </Typography>
    </Box>
  );
}

export default NewsletterSub;
