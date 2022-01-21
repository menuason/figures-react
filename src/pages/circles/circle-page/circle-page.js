import { useSelector } from 'react-redux';
import { circlesSlice } from '../../../store/slices/';
import { Outlet } from 'react-router-dom';
import { CircleList } from '../circle-list';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import * as classes from './circle-page.modules.scss';
import PatchStyles from 'patch-styles';

export const CirclePage = () => {
  const circles = useSelector(circlesSlice.selectors.selectAll);

  const handleDeleteCircle = (selectedCircle) => {
    const newCircles = circles.filter((circle) => circle.id !== selectedCircle);
    localStorage.setItem('circles', JSON.stringify(newCircles));
  };
  return (
    <PatchStyles classNames={classes}>
      <Breadcrumbs label="Circle" path="/circles/create" />
      <div className="CircleContent">
        <CircleList circles={circles} onDeleteCircle={handleDeleteCircle} />

        <div className="CanvasContainer">
          {/*  <FiguresCanvas />*/}
          <Outlet />
        </div>
      </div>
    </PatchStyles>
  );
};
