import { useState } from 'react';
import { Input } from '../../../components/input';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/button';
import { circlesSlice } from '../../../store/slices';
import { useDispatch } from 'react-redux';

const DEFAULT_CIRCLES_VALUE = {
  x: '',
  y: '',
  radius: '',
};

export const CircleForm = () => {
  const dispatch = useDispatch();
  const [draftCircle, setDraftCircle] = useState(DEFAULT_CIRCLES_VALUE);

  const handleItem = (ev) => {
    // setDraftPoint(ev.target.value);
    const { value, name } = ev.target;
    setDraftCircle({ ...draftCircle, [name]: value });
  };

  const handleSave = () => {
    handleCreate(draftCircle);
    setDraftCircle(DEFAULT_CIRCLES_VALUE);
  };

  const handleCreate = (circle) => {
    dispatch(circlesSlice.actions.createCircle({ circle }));
  };

  return (
    <div className="CreatePointFormComponent">
      <div className="InputContainer">
        <Input label="x axis" name="x" value={draftCircle.x} onChange={handleItem} />
        <Input label="y axis" name="y" value={draftCircle.y} onChange={handleItem} />
        <Input label="radius" name="radius" value={draftCircle.radius} onChange={handleItem} />
      </div>
      <div className="ActionsContainer">
        <Link to="..">CANCEL</Link>
        <Button
          variant="outlined"
          size="big"
          onClick={() => handleSave()}
          disabled={!draftCircle.x || !draftCircle.y || !draftCircle.radius}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};
