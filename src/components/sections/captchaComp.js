import Recaptcha from 'react-recaptcha';
import React from 'react';

export const CaptchaComp = () => {
  return (
    <Recaptcha
      sitekey={process.env.GATSBY_RE_CAPTCHA_SITE_KEY}
      onloadCallback={() => {
        console.log('LOADED!');
      }}
      verifyCallback={() => {
        console.log('VERIFY!');
      }}
      expiredCallback={() => {
        console.log('EXPIRED!');
      }}
      render="explicit"
    />
  );
};
