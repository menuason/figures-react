import { Header } from './header';
import { Breadcrumbs } from './breadcrumbs';
import { useState } from 'react';

import './page-shell.scss';

export const Page = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="Page">
      <Header />
      <Breadcrumbs onCreatePointCLicked={handleShowForm} showForm={showForm} />
      {/*<PointPage showForm={showForm} hideForm={handleHideForm} />*/}
    </div>
  );
};
