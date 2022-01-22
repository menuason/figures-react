import { Route, Routes } from 'react-router-dom';

import { PageShell } from './components/page-shell';
import { PointPage } from './pages/points/point-page';
import { PointForm } from './pages/points/point-form';

import { CirclePage } from './pages/circles/circle-page';
import { CircleForm } from './pages/circles/circle-form/circles-form';
import { RectangleForm } from './pages/rectangles/rectangles-form';
import { RectanglePage } from './pages/rectangles/rectangle-page';
import { TrianglePage } from './pages/triangle/treangle-page';
import { TriangleForm } from './pages/triangle/triangle-form/triangle-form';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  AppRoot: {
    height: '100%',
    backgroundColor: '#2b2a50',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="AppRoot">
        <Routes>
          <Route path="/" element={<PageShell />}>
            <Route path="points" element={<PointPage />}>
              <Route path="create" element={<PointForm />} />
            </Route>
            <Route path="circles" element={<CirclePage />}>
              <Route path="create" element={<CircleForm />} />
            </Route>
            <Route path="rectangles" element={<RectanglePage />}>
              <Route path="create" element={<RectangleForm />} />
            </Route>
            <Route path="triangles" element={<TrianglePage />}>
              <Route path="create" element={<TriangleForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </PatchStyles>
  );
};

export default App;
