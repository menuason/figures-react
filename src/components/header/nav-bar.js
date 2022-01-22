import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

export const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    NavBarTexts: {
      display: 'flex',
      paddingRight: theme.spacing(2),
      gap: theme.spacing(1),
      textDecoration: 'none',
    },
  }));

  const arr = ['Points', 'Circles', 'Rectangles', 'Triangles'];
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="NavBarTexts">
        {
          arr.map((item, ind) => <Link key={ind} to={item.toLowerCase()}>{item}</Link>)
        }
      </div>
    </PatchStyles>
  );
};
