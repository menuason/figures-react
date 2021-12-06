import './header.scss';
import { Logo } from '../logo';
import { NavBar } from './nav-bar';

export const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <NavBar />
    </div>
  );
};
