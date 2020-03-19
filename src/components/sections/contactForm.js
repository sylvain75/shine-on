import React from 'react';
import styled from 'styled-components';
import Recaptcha from 'react-recaptcha';

import { Container, Section } from '../global';

const ContactForm = () => (
  <StyledSection>
    <GetStartedContainer>
      <GetStartedTitle>A Form will go here</GetStartedTitle>
      <TryItButton>Get early access</TryItButton>
      <Recaptcha
        sitekey={process.env.GATSBY_RE_CAPTCHA_SITE_KEY}
        onloadCallback={() => {
          console.log('LOADED', );}}
        verifyCallback={() => {
          console.log('VERIFY', );}}
        expiredCallback={() => {
          console.log('EXPIRED', );}}
        render='explicit'
      />
    </GetStartedContainer>
  </StyledSection>
);

export default ContactForm;

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`;

const GetStartedContainer = styled(Container)`
  display: flex;
  background-color: hotpink;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //padding: 80px 0 40px;
  padding: 20px 0 60px;
`;

const GetStartedTitle = styled.h3`
  //margin: 0 auto 32px;
  text-align: center;
`;

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  margin-bottom: 40px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`;

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`;
