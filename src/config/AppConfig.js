export const BREVO_API_KEY = process.env.REACT_APP_BREVO_API_KEY;
export const BREVO_API_URL = process.env.REACT_APP_BREVO_API_URL;
export const BREVO_LIST_ID = process.env.REACT_APP_BREVO_LIST_ID;

// Black Friday weekend sale, through Cyber Monday.
// Env vars override these if set, so a future campaign only needs new
// Infomaniak env values - but the countdown no longer breaks if nobody sets them.
const BLACK_FRIDAY_START = '2026-11-27T00:00:00+01:00';
const BLACK_FRIDAY_END = '2026-12-01T00:00:00+01:00';

export const LAUNCH_DATE = new Date(
  process.env.REACT_APP_BREVO_LAUNCH_DATE || BLACK_FRIDAY_START
);
export const END_CAMPAIGN_DATE = new Date(
  process.env.REACT_APP_BREVO_END_CAMPAIGN_DATE || BLACK_FRIDAY_END
);
export const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL;
export const SENDER_EMAIL = process.env.REACT_APP_SENDER_EMAIL;
