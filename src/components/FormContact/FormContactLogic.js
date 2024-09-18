import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  BREVO_API_KEY,
  BREVO_API_URL,
  CONTACT_EMAIL,
} from '../../config/AppConfig';

const FormContactLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async (data) => {
    if (emailSent) return;

    const emailPayload = {
      sender: { name: 'Webmaster Iglow', email: 'webmaster@iglow.bike' },
      to: [{ email: CONTACT_EMAIL }],
      subject: 'Nouveau message du formulaire de contact',
      htmlContent: `<body>
        <div>
          <h2>Nouveau message du formulaire de contact</h2>
          <div>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
          </div>
          <div>
            <p>${data.message.replaceAll('\n', '<br/>')}</p>
          </div>
        </div>
      </body>`,
    };

    try {
      const response = await axios.post(
        BREVO_API_URL + '/smtp/email',
        emailPayload,
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
        }
      );
      setEmailSent(true);
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    emailSent,
  };
};

export default FormContactLogic;
