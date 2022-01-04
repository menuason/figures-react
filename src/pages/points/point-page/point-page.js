import './point-page.scss';
import { FiguresCanvas } from '../../../components/figurse-canvas/point-canvas';
import { PointForm } from '../point-form/point-form';
import { PointList } from '../point-list';
import { pointsSlice } from '../../../store/slices/slices';
import { useSelector } from 'react-redux';

export const PointPage = ({ hideForm, showForm }) => {
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

        {
          showForm && <PointForm />
        }
      </div>
    </div>
  );
};
