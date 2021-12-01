import { Button } from '../components/Button';

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
