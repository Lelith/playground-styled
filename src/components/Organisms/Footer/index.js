import React from 'react';
import styled from 'styled-components/macro';

const FooterStyle = styled.footer`
 grid-area: footer;
`

const Footer = () => {
  return (
  <FooterStyle>
  made by <a href="https://github.com/Lelith/playground-styled" target="_blank" rel="noopener noreferrer" info="github repository"> Kathrin </a>
  </FooterStyle>
  );
};


export default Footer;
