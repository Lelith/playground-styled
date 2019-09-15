import React from 'react';
import Logo from './logo.png';
import styled from 'styled-components/macro';

const HeaderStyle = styled.header`
  grid-area: header;
  background: rgba(224, 100, 230, 0.3);
`;
const Header = () => {
  return (
  <HeaderStyle>
    <img src={Logo} alt="Pawclub" className="header__logo"/>
  </HeaderStyle>
  );
};


export default Header;
