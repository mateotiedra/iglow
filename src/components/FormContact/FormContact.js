import { Box, Button } from '@mui/material';

import { PiPaperPlaneTiltBold } from 'react-icons/pi';
import FormField from '../FormField/FormField';
import FormContactLogic from './FormContactLogic';

function FormContact() {
  const { register, handleSubmit, onSubmit, errors } = FormContactLogic();

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
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
        startIcon={<PiPaperPlaneTiltBold />}
      >
        Submit
      </Button>
    </Box>
  );
}
export default FormContact;
