import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  LogoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  LogoText: {
    color: '#2ba6a7',
    margin: 0,
  },
}));

export const Logo = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="LogoContainer">
        <LogoSvg />
        <h2 className="LogoText">Figures</h2>
      </div>
    </PatchStyles>
  );
};
