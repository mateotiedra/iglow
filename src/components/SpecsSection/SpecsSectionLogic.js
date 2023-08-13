import { useState } from 'react';

const SpecsSectionLogic = () => {
  const specs = [
    {
      title: 'High Visibility LEDs',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Hyper Resistant Technical Textile',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Waterproof IPXX',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'High Autonomy Battery',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Induction Charging Hanger',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Automatic Braking Detection',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Light and Breathable',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Rescue Card',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ];

  const [openAccordionId, setopenAccordionId] = useState(-1);

  const handleAccordionChange = (id) => (event, isExpanded) => {
    setopenAccordionId(isExpanded ? id : -1);
  };

  return {
    specs,
    openAccordionId,
    handleAccordionChange,
  };
};

export default SpecsSectionLogic;
