import './point-page.scss';
import { FiguresCanvas } from '../../../components/figurse-canvas/point-canvas';
import { Component } from 'react';
import { PointForm } from '../point-form/point-form';
import { PointList } from '../point-list/point-list';
import { genId } from '../../../utils/gen-id';

export class PointPage extends Component {
  state = {
    points: JSON.parse(localStorage.getItem('points')) ?? [],
  };

  render() {
    const handleAddItem = (point) => {
      const pointWithId = { ...point, id: genId() };
      const newPoints = [...this.state.points, pointWithId];

      localStorage.setItem('points', JSON.stringify(newPoints));
      this.setState({ points: newPoints });
      this.props.hideForm();
    };

    const handleHideForm = () => {
      this.props.hideForm();
    };

    const handleDeletePoint = (selectedPoint) => {
      const points = this.state.points.filter((point) => point !== selectedPoint);
      localStorage.setItem('points', JSON.stringify(points));
      this.setState({ points });
    };

    return (
      <div className="PageContent">
        <PointList points={this.state.points} onDeletePoint={handleDeletePoint} />

        <div className="CanvasContainer">
          <FiguresCanvas />

          {
            this.props.showForm && <PointForm onAddItem={handleAddItem} onHideForm={handleHideForm} />
          }
        </div>
      </div>
    );
  }
}
