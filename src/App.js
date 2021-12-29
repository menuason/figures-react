import './App.scss';
import { useState } from 'react';
import { Header } from './components/header';
import { Breadcrumbs } from './components/breadcrumbs';
import { PointPage } from './pages/points/point-page';

export const App = () => {

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="AppRoot">
      <Header />
      <Breadcrumbs onCreatePointCLicked={handleShowForm} showForm={showForm} />
      <PointPage showForm={showForm} hideForm={handleHideForm} />
    </div>
  );
};

export default App;
