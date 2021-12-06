import './nav-bar.scss';
import { Button } from '../button/button';

export const NavBar = () => {
  const arr = ['Points', 'Circles', 'Rectangles', 'Triangles'];

  return (
    <div className="NavBarTexts">
      {
        arr.map((item) => <Button type="button" className="Button">{item}</Button>)
      }
    </div>
  );
};
