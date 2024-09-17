import { useEffect, useState } from 'react';

import { BREVO_CNTDWN_DATE } from '../../config/AppConfig';

const CountdownLogic = () => {
  const now = new Date().getTime();
  const launchDate = new Date(BREVO_CNTDWN_DATE).getTime();
  const [countdown, setCountdown] = useState(launchDate - now);

  const timeLeftFormatted = {
    days: Math.floor(countdown / (1000 * 60 * 60 * 24)),
    hours: Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((countdown % (1000 * 60)) / 1000),
  };

  Object.keys(timeLeftFormatted).forEach((key) => {
    if (timeLeftFormatted[key] < 10) {
      timeLeftFormatted[key] = `0${timeLeftFormatted[key]}`;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { ...timeLeftFormatted };
};

export default CountdownLogic;
