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
import { HashLink } from 'react-router-hash-link';

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
        message: 'You must accept the privacy policy above',
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

    const emailPayload = {
      sender: { name: 'Iglow', email: 'contact@iglow.bike' },
      to: [{ email: data.email }],
      subject: 'Get Ready to Discover the IGLOW Smart Jacket!',
      htmlContent: `<body>
    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <h1>Get Ready to Discover the IGLOW Smart Jacket!</h1>
                            <p>Dear Future Backers,</p>
                            <p>Thank you for signing up to be notified about the launch of the world’s first reflective smart jacket with integrated brake lights and turn signals! 🎉</p>
                            <p>We’re thrilled to let you know that our Indiegogo campaign is just around the corner! As a future backer, you’ll be among the first to know when sales go live and have the chance to reserve your IGLOW Smart Jacket at an exclusive price. 🚀</p>
                            
                            <h2>What can you expect?</h2>
                            <ul>
                                <li>A special offer reserved just for you, our early supporters.</li>
                                <li>A jacket that will revolutionize your safety on the road with Swiss precision technology.</li>
                                <li>Discounts of up to 53% during the campaign.</li>
                            </ul>
                            
                            <p>Stay tuned! We’ll be sending you an email soon with all the details on how to access the campaign and secure your IGLOW jacket.</p>
                            
                            <p>Thank you for your interest and for joining us on this exciting journey!</p>
                            
                            <p>Warm regards,</p>
                            <p>The IGLOW Team<br>
                               Lausanne, Switzerland<br>
                               iglow.swiss
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>`,
    };

    // Make the API call
    axios
      .post(BREVO_API_URL + '/contacts', data, { headers })
      .then((response) => {
        axios
          .post(BREVO_API_URL + '/smtp/email', emailPayload, {
            headers: {
              'Content-Type': 'application/json',
              'api-key': BREVO_API_KEY,
            },
          })
          .then((response) => {
            setSubscribed(true);
          })
          .catch((error) => {
            console.error(error.response);
          });
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
        gap: '10px',
        maxWidth: '600px',
      }}
    >
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
        <Typography
          component={HashLink}
          to='/privacy-policy#start'
          variant='body2'
          fontSize='min(3vw, 20px)'
          color='primary'
        >
          the privacy policy
        </Typography>
      </Typography>
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
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/,
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
    </Box>
  );
}

export default NewsletterSub;
