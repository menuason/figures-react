import { useSelector } from 'react-redux';
import { circlesSlice } from '../../../store/slices/';
import { Outlet } from 'react-router-dom';
import { CircleList } from '../circle-list';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  CircleContent: {
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(1),
  },

  CanvasContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    flex: 1,
  },
}));
export const CirclePage = () => {
  const classes = useStyles();
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
