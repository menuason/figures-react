import { Component } from 'react';
import { LogoAndText } from './LogoAndText';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <div className="Header">
      <LogoAndText />
      <NavBar />
    </div>
  );
};
