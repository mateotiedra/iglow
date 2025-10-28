import { useState } from 'react';

const FAQSectionLogic = () => {
  const questions = [
    {
      title:
        'When and how will I receive my IGLOW smart vest after supporting the campaign?',
      details:
        'After the campaign ends, we will maintain complete transparency regarding the production process and updates to ensure all contributors are satisfied. One of our key advantages is that production will be done locally, with both the electronics and textiles manufactured in Switzerland. This proximity allows us to maintain high quality and efficiency, ensuring you receive your IGLOW vest as soon as possible after the end of the campaign.',
    },
    {
      title: 'What inspired the creation of the IGLOW smart vest ?',
      details:
        'IGLOW was born from the personal experience of its creator, who, after purchasing a scooter to commute to work, realized how dangerous it was not to be visible on the road. With their expertise in textiles and fashion, having worked with luxury brands, the creators of IGLOW developed an innovative and stylish safety solution.',
    },
    {
      title:
        'How does IGLOW improve the safety of cyclists and users of various types of bikes?',
      details:
        'The IGLOW smart vest is designed to make users of all types of bikes, whether cargo bikes, powerful e-bikes or conventional bikes, highly visible thanks to its integrated LEDs, reflective strips and Bluetooth remote control. Drawing on their experience in the fashion industry, the designers have ensured that every aspect of the vest combines functionality, comfort, lightness and aesthetics for maximum safety, day and night.',
    },
    {
      title: 'What are the features and benefits of the IGLOW smart vest ?',
      details:
        'IGLOW is a lightweight and comfortable safety vest made with high-quality materials. It comes equipped with numerous features, including flashing LEDs, a rechargeable battery with over 48 hours of autonomy, practical pockets, and an emergency card information window. The creators, who have experience in the luxury industry, also ensured that the vest can be worn over a backpack, offering both style and safety.',
    },
    {
      title: 'How is IGLOW different from other safety smart vest ?',
      details:
        "In addition to being equipped with brake lights and turn signals for cyclists, the IGLOW vest is versatile and can be used in various situations. It's perfect for evening or early morning runners  to ensure you're seen, and it can also be used in case of a roadside breakdown to signal your presence with its built-in warning lights. The IGLOW smart vest is unique and designed to accompany you every day, providing both safety and style wherever you go.",
    },
    {
      title: 'Is IGLOW compatible with all types of bikes and scooters?',
      details:
        'Yes, the IGLOW vest is designed to be compatible with all types of bikes, including cargo bikes, powerful electric bikes, and scooters. Its Bluetooth remote control easily attaches to the handlebar, and the vest can be comfortably worn with or without a backpack.',
    },
    {
      title:
        'Why is the IGLOW smart vest so affordable given that it’s made in Switzerland?',
      details:
        'The affordable price of the IGLOW smart vest is an exceptional offer exclusively for Indiegogo contributors. Normally, the price is higher, but we have deliberately set this attractive price to allow as many people as possible to benefit from using IGLOW. Our goal is to make the IGLOW smart vest a global reference in safety. By producing locally in Switzerland, we ensure top-notch quality, combining advanced technology, safety, and style at a price point that’s truly a rare opportunity.',
    },
  ];

  const [openAccordionId, setopenAccordionId] = useState(-1);

  const handleAccordionChange = (id) => (event, isExpanded) => {
    setopenAccordionId(isExpanded ? id : -1);
  };

  return {
    questions,
    openAccordionId,
    handleAccordionChange,
  };
};

export default FAQSectionLogic;
