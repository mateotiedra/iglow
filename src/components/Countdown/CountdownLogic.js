import { useEffect, useState } from 'react';

const CountdownLogic = (admin) => {
  const now = new Date().getTime();
  const launchDate = new Date('September 16, 2024 00:00:00').getTime();
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
