import { Component } from 'react';
import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';

export const Logo = () => {
  return (
    <div className="HeaderLogo">
      <LogoSvg />
    </div>
  );
};
