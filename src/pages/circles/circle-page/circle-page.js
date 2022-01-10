import { useSelector } from 'react-redux';
import { circlesSlice } from '../../../store/slices/';
import { FiguresCanvas } from '../../../components/figurse-canvas/point-canvas';
import { Outlet } from 'react-router-dom';
import { CircleList } from '../circle-list';
import './circle-page.scss'
import { Breadcrumbs } from '../../../components/breadcrumbs';

export const CirclePage = () => {
  const circles = useSelector(circlesSlice.selectors.selectAll);

  const handleDeleteCircle = (selectedCircle) => {
    const newCircles = circles.filter((circle) => circle.id !== selectedCircle);
    localStorage.setItem('circles', JSON.stringify(newCircles));
  };
  return (
    <>
      <Breadcrumbs label="Circle" path="/circles/create" />
    <div className="CircleContent">
      <CircleList circles={circles} onDeleteCircle={handleDeleteCircle} />

      <div className="CanvasContainer">
        <FiguresCanvas />
        <Outlet />
      </div>
    </div>
    </>
  );
};
