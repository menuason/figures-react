import { Button } from '../button';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Breadcrumbs: {
    display: 'flex',
    color: '#d0cfd5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: [0, theme.spacing(3)],
  },
}));


export const Breadcrumbs = ({ label, path }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="Breadcrumbs">
        <Button size="small">{label}</Button>
        <Link
          to={path}
        >
          CREATE
        </Link>
      </div>
    </PatchStyles>
  );
};
