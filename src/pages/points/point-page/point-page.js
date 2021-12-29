import './point-page.scss';
import { FiguresCanvas } from '../../../components/figurse-canvas/point-canvas';
import { useState } from 'react';
import { PointForm } from '../point-form/point-form';
import { PointList } from '../point-list';
import { genId } from '../../../utils/gen-id';

export const PointPage = ({ hideForm, showForm }) => {
  const [points, setPoints] = useState(() => {
    return JSON.parse(localStorage.getItem('points')) ?? [];
  });

  const handleAddItem = (point) => {
    const pointWithId = { ...point, id: genId() };
    const newPoints = [...points, pointWithId];

    localStorage.setItem('points', JSON.stringify(newPoints));
    setPoints(newPoints);
    hideForm();
  };

  const handleHideForm = () => {
    hideForm();
  };

  const handleDeletePoint = (selectedPoint) => {
    const newPoints = points.filter((point) => point !== selectedPoint);
    localStorage.setItem('points', JSON.stringify(newPoints));
    setPoints(newPoints);
  };

  return (
    <div className="PageContent">
      <PointList points={points} onDeletePoint={handleDeletePoint} />

      <div className="CanvasContainer">
        <FiguresCanvas />

        {
          showForm && <PointForm onAddItem={handleAddItem} onHideForm={handleHideForm} />
        }
      </div>
    </div>
  );
};
