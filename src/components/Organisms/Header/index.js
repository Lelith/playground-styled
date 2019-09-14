import React from 'react';
import Logo from './logo.png';
import './header.css';

const Header = () => {
  return (
  <header className="header">
    <img src={Logo} alt="Pawclub" className="header__logo"/>
  </header>
  );
};


export default Header;
