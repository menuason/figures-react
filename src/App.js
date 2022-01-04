import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageShell } from './components/page-shell';
import { PointPage } from './pages/points/point-page';
import { PointForm } from './pages/points/point-form';

import './App.scss';

export class App extends Component {
  render() {

    return (
      <div className="AppRoot">

        <Routes>
          <Route path="/" element={<PageShell />}>
            <Route path="points" element={<PointPage />}>
              <Route path="create" element={<PointForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
