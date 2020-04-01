import React from 'react';
import styled from 'styled-components';

import { Container } from '../global';

const d = new Date();

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <small>&copy; {`Copyright ${d.getFullYear()}, Shine On, All rights reserved`}</small>
    </FooterColumnContainer>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`;

const FooterColumnContainer = styled(Container)`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export default Footer;
