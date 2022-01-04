import './point-form.scss';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../store/slices';
import { Link } from 'react-router-dom';

const DEFAULT_POINT_VALUE = {
  x: '',
  y: '',
  name: '',
};

export const PointForm = () => {
  const dispatch = useDispatch();
  const [draftPoint, setDraftPoint] = useState(DEFAULT_POINT_VALUE);

  const handleItem = (ev) => {
    // setDraftPoint(ev.target.value);
    const { name, value } = ev.target;
    setDraftPoint({ ...draftPoint, [name]: value });
  };

  const handleSave = () => {
    handleCreate(draftPoint);
    setDraftPoint(DEFAULT_POINT_VALUE)

    // onAddItem(draftPoint);
  };
  //
  // const cancelItems = () => {
  //   onHideForm();
  // };

  const handleCreate = (point) => {
    dispatch(pointsSlice.actions.createPoint({ point }));
  };

  return (
    <div className="CreatePointFormComponent">
      <div className="InputContainer">
        <Input label="x axis" name="x" value={draftPoint.x} onChange={handleItem} />
        <Input label="y axis" name="y" value={draftPoint.y} onChange={handleItem} />
        <Input label="name" name="name" value={draftPoint.name} onChange={handleItem} />
      </div>

      <div className="ActionsContainer">
        <Link to="..">CANCEL</Link>
        <Button
          variant="outlined"
          size="big"
          onClick={() => handleSave()}
          disabled={!draftPoint.x || !draftPoint.y || !draftPoint.name}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};
