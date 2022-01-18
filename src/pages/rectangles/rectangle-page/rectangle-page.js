import { useSelector } from 'react-redux';
import { rectanglesSlice } from '../../../store/slices';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { FiguresCanvas } from '../../../components/figurse-canvas/point-canvas';
import { Outlet } from 'react-router-dom';

import './rectangle-page.scss';
import { RectangleList } from '../rectangle-list';

export const RectanglePage = () => {
  const rectangles = useSelector(rectanglesSlice.selectors.selectAll);

  const handleDeleteRectangle = (selectedRectangle) => {
    const newRectangles = rectangles.filter((rectangle) => rectangle.id !== selectedRectangle);
    localStorage.setItem('rectangles', JSON.stringify(newRectangles));
  };
  return (
    <>
      <Breadcrumbs label="Rectangle" path="/rectangles/create" />
      <div className="RectangleContent">
        <RectangleList rectangles={rectangles} onDeleteCircle={handleDeleteRectangle} />
        <div className="CanvasContainer">
          <FiguresCanvas />
          <Outlet />
        </div>
      </div>
    </>
  );
};
