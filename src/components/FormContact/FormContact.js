import { Box, Button } from '@mui/material';

import { PiCheckBold, PiPaperPlaneTiltBold } from 'react-icons/pi';
import FormField from '../FormField/FormField';
import FormContactLogic from './FormContactLogic';

function FormContact() {
  const { register, handleSubmit, onSubmit, errors, emailSent } =
    FormContactLogic();

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: 1,
      }}
    >
      <FormField
        label='Name'
        register={register}
        id='name'
        options={{ required: 'Name is required' }}
        error={errors.name}
      />
      <FormField
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
      />
      <FormField
        label='Message'
        placeholder='Your message'
        rows={8}
        register={register}
        id='message'
        options={{
          required: 'Message is empty',
        }}
        error={errors.message}
      />
      <Button
        LinkComponent='input'
        type='submit'
        variant='contained'
        startIcon={emailSent ? <PiCheckBold /> : <PiPaperPlaneTiltBold />}
        sx={{
          cursor: emailSent ? 'default' : 'pointer',
        }}
      >
        {emailSent ? 'Envoyé' : 'Send'}
      </Button>
    </Box>
  );
}
export default FormContact;
