import { Outlet } from 'react-router-dom';
import { Page } from './page';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  PageShell: {
    background: '#2b2a50',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const PageShell = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="PageShell">
        <Page />
        <Outlet />
      </div>
    </PatchStyles>
  );
};
