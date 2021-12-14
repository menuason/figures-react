import './nav-bar.scss';
import { Button } from '../button/button';

export const NavBar = () => {
  const arr = ['Points', 'Circles', 'Rectangles', 'Triangles'];

  return (
    <div className="NavBarTexts">
      {
        arr.map((item, ind) => <Button key={ind}>{item}</Button>)
      }
    </div>
  );
};
