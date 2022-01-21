import { useSelector } from 'react-redux';
import { rectanglesSlice } from '../../../store/slices';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Outlet } from 'react-router-dom';

import * as classes from './rectangle-page.modules.scss';
import { RectangleList } from '../rectangle-list';
import PatchStyles from 'patch-styles';

export const RectanglePage = () => {
  const rectangles = useSelector(rectanglesSlice.selectors.selectAll);

  const handleDeleteRectangle = (selectedRectangle) => {
    console.log(selectedRectangle);
    const newRectangles = rectangles.filter((rectangle) => rectangle.id !== selectedRectangle.id);
    localStorage.setItem('rectangles', JSON.stringify(newRectangles));
  };
  return (
    <PatchStyles classNames={classes}>
      <Breadcrumbs label="Rectangle" path="/rectangles/create" />
      <div className="RectangleContent">
        <RectangleList rectangles={rectangles} onDeleteRectangle={handleDeleteRectangle} />
        <div className="CanvasContainer">
          {/*<FiguresCanvas />*/}
          <Outlet />
        </div>
      </div>
    </PatchStyles>
  );
};
