import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, TextField } from '@mui/material';


import { Input } from '../../../components/input';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/button';
import { circlesSlice, pointsSlice } from '../../../store/slices';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const DEFAULT_CIRCLES_VALUE = {
  point: null,
  pointId: '',
  radius: '',
};

const useStyles = makeStyles((theme) => ({
  CreateCircleFormComponent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    backgroundColor: '#c4c4c4',
    padding: [theme.spacing(2), 0],
  },
  ActionsContainer: {
    display: 'flex',
    gap: theme.spacing(3),
  },
  InputCheckBox: {
    display: 'flex',
  },
  InputContainer: {
    display: 'flex',
  },
  PointListSelect: {
    display: 'flex',
    gap: theme.spacing(1),
  },
  CheckBoxColor: {
    color: '#03f4a7',
  },
  SelectCircle: {
    display: 'flex',
    gap: theme.spacing(1),
  },
  CheckPointsForCenter: {
    width: theme.spacing(25),
  },
}));

export const CircleForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [draftCircle, setDraftCircle] = useState(DEFAULT_CIRCLES_VALUE);
  const points = useSelector(pointsSlice.selectors.selectAll);

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
    const point = points.find((point) => point.id === circle.pointId);
    circle.point = point;
    dispatch(circlesSlice.actions.createCircle({ circle }));
  };

  const handleSelect = (ev) => {
    console.log(ev.target.value);
    setDraftCircle({ ...draftCircle, pointId: ev.target.value });
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CreateCircleFormComponent">
        <div className="InputContainer">
          <div className="SelectCircle">
            <div className="PointListSelect">
              <TextField
                className="CheckPointsForCenter"
                label="Center"
                value={draftCircle.pointId}
                select
                onChange={handleSelect}
              >
                {
                  points.map((point) => (
                    <MenuItem
                      key={point.id}
                      value={point.id}>
                      coordinate x: {point.x} y: {point.y}
                    </MenuItem>
                  ))
                }
              </TextField>
            </div>
            <Input label="radius" name="radius" value={draftCircle.radius} onChange={handleItem} />
          </div>
        </div>
        <div className="ActionsContainer">
          <Link to="..">CANCEL</Link>
          <Button
            variant="outlined"
            size="big"
            onClick={() => handleSave()}
            disabled={!draftCircle.pointId || !draftCircle.radius}
          >
            SAVE
          </Button>
        </div>
      </div>
    </PatchStyles>
  );
};
