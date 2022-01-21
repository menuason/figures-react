import { Header } from './header';

import * as classes from './page-shell.modules.scss';
import PatchStyles from 'patch-styles';

export const Page = () => {

  return (
    <PatchStyles classNames={classes}>
      <div className="Page">
        <Header />
        {/*<PointPage showForm={showForm} hideForm={handleHideForm} />*/}
      </div>
    </PatchStyles>
  );
};
