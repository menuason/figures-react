import PatchStyles from 'patch-styles';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { TriangleList } from '../trinagle-list';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TriangleContent: {
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

export const TrianglePage = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <Breadcrumbs label="Triangle" path="/triangles/create" />
      <div className="TriangleContent">
        <TriangleList />
        <div className="CanvasContainer">
          {/*<FiguresCanvas/>*/}
          <Outlet />
        </div>
      </div>
    </PatchStyles>
  );
};
