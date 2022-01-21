import * as classes from './nav-bar.modules.scss';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';

export const NavBar = () => {
  const arr = ['Points', 'Circles', 'Rectangles', 'Triangles'];

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
