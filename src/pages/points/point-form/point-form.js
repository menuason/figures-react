import './point-form.scss';
import { Input } from '../../../components/input/input';
import { Button } from '../../../components/button/button';
import { Component } from 'react';

export class PointForm extends Component {
  state = {
    x: '',
    y: '',
    name: '',
  };

  render() {
    const handleItemX = (ev) => {
      this.setState({ x: ev.target.value });
    };

    const handleItemY = (ev) => {
      this.setState({ y: ev.target.value });
    };

    const handleItemName = (ev) => {
      this.setState({ name: ev.target.value });
    };

    const handleSave = () => {
      this.props.onAddItem(this.state);
    };

    const cancelItems = () => {
      this.props.onHideForm();
    };

    return (
      <div className="CreatePointFormComponent">
        <div className="InputContainer">
          <Input label="x axis" value={this.state.x} onChange={handleItemX} />
          <Input label="y axis" value={this.state.y} onChange={handleItemY} />
          <Input label="name" value={this.state.name} onChange={handleItemName} />
        </div>

        <div className="ActionsContainer">
          <Button type="button" onClick={cancelItems}>CANCEL</Button>
          <Button
            variant="outlined"
            size="big"
            onClick={handleSave}
            disabled={!this.state.x || !this.state.y || !this.state.name}
          >
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}
