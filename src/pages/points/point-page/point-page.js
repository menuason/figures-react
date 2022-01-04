import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { pointsSlice } from '../../../store/slices';
import { FiguresCanvas } from '../../../components/figurse-canvas/point-canvas';
import { PointList } from '../point-list';

import './point-page.scss';

export const PointPage = () => {
  const points = useSelector(pointsSlice.selectors.selectAll);


  const handleDeletePoint = (selectedPoint) => {
    const newPoints = points.filter((point) => point !== selectedPoint);
    localStorage.setItem('points', JSON.stringify(newPoints));
    // setPoints(newPoints);
  };

  return (
    <div className="PageContent">
      <PointList points={points} onDeletePoint={handleDeletePoint} />

      <div className="CanvasContainer">
        <FiguresCanvas />
        <Outlet />
      </div>
    </div>
  );
};
