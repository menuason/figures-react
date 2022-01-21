import { Outlet } from 'react-router-dom';
import { Page } from './page';

import * as classes from './page-shell.modules.scss';
import PatchStyles from 'patch-styles';

export const PageShell = () => (
  <PatchStyles classNames={classes}>
    <div className="PageShell">
      <Page />
      <Outlet />
    </div>
  </PatchStyles>
);
