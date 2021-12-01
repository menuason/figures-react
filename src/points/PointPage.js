import { Component } from 'react';
import { PointList } from './PointList';
import { PointCanvas } from './PointCanvas';

export const PointPage = () => {
  const points = [
    {
      x: 7,
      y: 1,
      name: 'A',
    },

    {
      x: 10,
      y: 4,
      name: 'B',
    },

  ];
  return (
    <div className="PointPage">
      <PointList points={points} />
      <PointCanvas />
    </div>
  );
};
