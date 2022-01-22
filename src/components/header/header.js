import { Logo } from '../logo';
import { NavBar } from './nav-bar';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Header: {
    width: '100%',
    height: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    background: '#1b1538',
    justifyContent: 'space-between',
    padding: '0 16px',
    boxSizing: 'border-box',
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="Header">
        <Logo />
        <NavBar />
      </div>
    </PatchStyles>
  );
};
