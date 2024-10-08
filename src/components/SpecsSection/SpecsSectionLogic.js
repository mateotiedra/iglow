import { useState } from 'react';
import jacketLeds from '../../assets/images/jacket-leds.png';
import ergonomicRemote from '../../assets/images/ergonomic-remote.png';
import automaticBraking from '../../assets/images/automatic-braking.png';
import waterResistant from '../../assets/images/water-resistant.png';
import phonePocket from '../../assets/images/phone-pocket.png';
import creditCardPocket from '../../assets/images/credit-card-pocket.png';
import waterBottlePocket from '../../assets/images/water-bottle-pocket.png';
import retractableKeyholder from '../../assets/images/retractable-keyholder.png';
import emergencyCard from '../../assets/images/emergency-card.png';
import backpackCompatible from '../../assets/images/backpack-compatible.png';
import smartphoneApp from '../../assets/images/smartphone-app.png';

const SpecsSectionLogic = () => {
  const specs = [
    {
      title: 'High Visibility LEDs',
      details:
        "Stay visible with 360° high-intensity LEDs, ensuring you're seen in all conditions.",
      image: jacketLeds,
    },
    {
      title: 'Ergonomic Handlebar Remote Control',
      details:
        'Easily control turn signals without taking your eyes off the road.',
      image: ergonomicRemote,
    },
    {
      title: 'Automatic Braking Detection',
      details:
        'Smart sensors activate brake lights automatically for added safety.',
      image: automaticBraking,
    },
    {
      title: 'Water Resistant Design',
      details:
        'Lightweight, waterproof fabric and zippers keep you and your gear dry.',
      image: waterResistant,
    },
    {
      title: 'Phone Pocket',
      details:
        'Secure, accessible pocket to keep your phone within reach while riding.',
      image: phonePocket,
    },
    {
      title: 'Credit Card Pocket',
      details:
        'Handy pocket for quick access to your credit card and small essentials.',
      image: creditCardPocket,
    },
    {
      title: 'Water Bottle Pocket',
      details:
        'Conveniently store your water bottle for easy access on the go.',
      image: waterBottlePocket,
    },
    {
      title: 'Retractable Keyholder',
      details:
        'Keep your keys secure and within reach with the built-in retractable keyholder.',
      image: retractableKeyholder,
    },
    {
      title: 'Emergency Card',
      details:
        'Store your medical info for quick access by first responders in case of an emergency.',
      image: emergencyCard,
    },
    {
      title: 'Backpack Compatible',
      details:
        'Designed to fit comfortably over your backpack without compromising function.',
      image: backpackCompatible,
    },
    {
      title: 'Smartphone App',
      details:
        'Control signals and track your route seamlessly with the integrated smartphone app.',
      image: smartphoneApp,
    },
  ];

  const [openAccordionId, setopenAccordionId] = useState(1);

  const handleAccordionChange = (id) => (event, isExpanded) => {
    setopenAccordionId(id);
  };

  return {
    specs,
    openAccordionId,
    handleAccordionChange,
  };
};

export default SpecsSectionLogic;
