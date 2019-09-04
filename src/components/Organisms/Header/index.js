import React from 'react';
import Logo from './logo.png'
const Header = () => {
  return (
  <header className="header">
    <img src={Logo} alt="Pawclub" className="header__logo"/>
  </header>
  );
};


export default Header;
