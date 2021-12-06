import './App.scss';
import { Component } from 'react';
import { Header } from './components/header/header';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';
import { PointPage } from './pages/points/point-page/point-page';

class App extends Component {
  state = {
    showForm: false
  }
  render() {
    const handleShowForm =(ev) =>{
      this.setState({showForm: true})
    }

    const handleHideForm = () => {
      this.setState({showForm: false})
    }

    return (
      <div className="AppRoot">
        <Header />
        <Breadcrumbs onCreatePointCLicked={handleShowForm} showForm={this.state.showForm}/>
        <PointPage showForm={this.state.showForm} hideForm = {handleHideForm}/>
      </div>
    );
  }
}

export default App;
