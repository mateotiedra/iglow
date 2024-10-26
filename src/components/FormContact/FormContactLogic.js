import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  BREVO_API_KEY,
  BREVO_API_URL,
  CONTACT_EMAIL,
  SENDER_EMAIL,
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

    const emailPayloads = [
      {
        sender: { name: 'Webmaster Iglow', email: SENDER_EMAIL },
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
      },
      {
        sender: { name: 'Iglow', email: SENDER_EMAIL },
        to: [{ email: data.email }],
        subject: 'Weclome to Iglow',
        htmlContent: `
        <body>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <table width="600" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <h1>Thank You for Contacting Us!</h1>
                      <p>Hello ${data.name},</p>
                      <p>We have successfully received your message. One of our team members will get back to you shortly.</p>
                      <p>Here are the details of your submission:</p>
                        <strong>Name:</strong> ${data.name}<br/>
                        <strong>Message:</strong>
                        <p style="font-style: italic;">${data.message.replaceAll(
                          '\n',
                          '<br/>'
                        )}</p>
                      <p>Best regards,</p>
                      <p>The Iglow Team</p>
                    </td>
                  </tr>
                  <tr>
                  <td>
                    <p>&copy; 2024 Iglow. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
      </body>`,
      },
    ];

    try {
      for (const emailPayload of emailPayloads) {
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
        console.log('Email sent successfully:', response.data);
      }

      setEmailSent(true);
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
