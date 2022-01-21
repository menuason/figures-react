import * as classes from './header.modules.scss';
import { Logo } from '../logo';
import { NavBar } from './nav-bar';
import PatchStyles from 'patch-styles';

export const Header = () => {
  return (
    <PatchStyles classNames={classes}>
      <div className="Header">
        <Logo />
        <NavBar />
      </div>
    </PatchStyles>
  );
};
