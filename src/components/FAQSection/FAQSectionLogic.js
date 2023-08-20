import { useState } from 'react';

const FAQSectionLogic = () => {
  const questions = [
    {
      title: 'Does it light up ?',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'How long does the battery last ?',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Where can I buy it ?',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Who is it for ?',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
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
