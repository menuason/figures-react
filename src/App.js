import './App.scss';
import { Component } from 'react';
import { PointsMainPage } from './points/PointsMainPage'

class App extends Component {
  render() {
    return (
      <div className="AppRoot">
        <PointsMainPage />
      </div>
    );
  }
}

export default App;
