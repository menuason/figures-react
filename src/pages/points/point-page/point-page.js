import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { pointsSlice } from '../../../store/slices';
import { PointList } from '../point-list';

import { Breadcrumbs } from '../../../components/breadcrumbs';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  PageContent: {
    flex: 1,
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(1),
    justifyContent: 'space-between',
  },
  CanvasContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    flex: 1,
  },
}));

export const PointPage = () => {
  const classes = useStyles();
  const points = useSelector(pointsSlice.selectors.selectAll);

  const handleDeletePoint = (selectedPoint) => {
    const newPoints = points.filter((point) => point !== selectedPoint);
    localStorage.setItem('points', JSON.stringify(newPoints));
    // setPoints(newPoints);
  };

  return (
    <PatchStyles classNames={classes}>
      <Breadcrumbs label="Point" path="/points/create" />
      <div className="PageContent">
        <PointList points={points} onDeletePoint={handleDeletePoint} />

        <div className="CanvasContainer">
          {/*  <FiguresCanvas />*/}
          <Outlet />
        </div>
      </div>
    </PatchStyles>
  );
};


