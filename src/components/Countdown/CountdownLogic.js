import { useEffect, useState } from 'react';

import { LAUNCH_DATE, END_CAMPAIGN_DATE } from '../../config/AppConfig';

const CountdownLogic = () => {
  const now = new Date().getTime();
  const campaignRunning = now >= LAUNCH_DATE.getTime();
  const countDownDate = campaignRunning ? END_CAMPAIGN_DATE : LAUNCH_DATE;
  const [countdown, setCountdown] = useState(countDownDate - now);

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

  return { ...timeLeftFormatted, campaignRunning };
};

export default CountdownLogic;
