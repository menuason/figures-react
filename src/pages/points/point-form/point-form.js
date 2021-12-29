import './point-form.scss';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';
import { useState } from 'react';

const DEFAULT_POINT_VALUE = {
  x: '',
  y: '',
  name: '',
};

export const PointForm = ({ onAddItem, onHideForm }) => {
  const [draftPoint, setDraftPoint] = useState(DEFAULT_POINT_VALUE);

  const handleItem = (ev) => {
    // setDraftPoint(ev.target.value);
    const { name, value } = ev.target;
    setDraftPoint({ ...draftPoint, [name]: value });
  };

  const handleSave = () => {
    onAddItem(draftPoint);
  };

  const cancelItems = () => {
    onHideForm();
  };

  return (
    <div className="CreatePointFormComponent">
      <div className="InputContainer">
        <Input label="x axis" name="x" value={draftPoint.x} onChange={handleItem} />
        <Input label="y axis" name="y" value={draftPoint.y} onChange={handleItem} />
        <Input label="name" name="name" value={draftPoint.name} onChange={handleItem} />
      </div>

      <div className="ActionsContainer">
        <Button type="button" onClick={cancelItems}>CANCEL</Button>
        <Button
          variant="outlined"
          size="big"
          onClick={handleSave}
          disabled={!draftPoint.x || !draftPoint.y || !draftPoint.name}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};
