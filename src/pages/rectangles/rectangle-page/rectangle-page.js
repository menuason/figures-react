import { useSelector } from 'react-redux';
import { rectanglesSlice } from '../../../store/slices';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Outlet } from 'react-router-dom';
import { RectangleList } from '../rectangle-list';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  RectangleContent: {
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(1),
  },
  CanvasContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    flex: 1,
  },
}));

export const RectanglePage = () => {
  const classes = useStyles();
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
