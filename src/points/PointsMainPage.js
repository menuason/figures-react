import { Component } from 'react';
import { Header } from './Header';
import { BreadCrumbs } from './Breadcrumbs';
import { PointPage } from './PointPage';

export const PointsMainPage = () => {
  return (
    <div className="MainPage">
      <Header />
      <div className="PageContent">
        <BreadCrumbs />
        <PointPage />
      </div>
    </div>
  );
};
