import './nav-bar.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const arr = ['Points', 'Circles', 'Rectangles', 'Triangles'];

  return (
    <div className="NavBarTexts">
      {
        arr.map((item, ind) => <Link key={ind} to={item.toLowerCase()}>{item}</Link>)
      }
    </div>
  );
};
