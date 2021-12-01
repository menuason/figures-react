import { Component } from 'react';
import { Logo } from './logo/Logo';

export const LogoAndText = () => {
  return (
    <div className="PartOfTheLogo">
      <Logo />
      <h2 className="HeaderFigures"> Figures </h2>
    </div>
  );
};
