import { Outlet } from 'react-router-dom';
import { Page } from './page';

import './page-shell.scss';

export const PageShell = () => (
  <div className="PageShell">
    <Page />
    <Outlet />
  </div>
);
