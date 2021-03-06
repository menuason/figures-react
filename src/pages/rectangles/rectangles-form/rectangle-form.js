import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, TextField } from '@mui/material';

import { pointsSlice, rectanglesSlice } from '../../../store/slices';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/button';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const DEFAULT_RECTANGLE_VALUE = {
  pointIds: [],
};

const useStyles = makeStyles((theme) => ({
  CreateRectangleFormComponent: {
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
    gap: theme.spacing(1),
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
    width: theme.spacing(20),
  },
}));

export const RectangleForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [draftRectangle, setDraftRectangle] = useState(DEFAULT_RECTANGLE_VALUE);
  const points = useSelector(pointsSlice.selectors.selectAll);

  const handleSave = () => {
    handleCreate(draftRectangle);
    setDraftRectangle(DEFAULT_RECTANGLE_VALUE);
  };

  const handleCreate = ({ pointIds }) => {
    const rectangle = {
      points: pointIds.map((id) => points.find((point) => point.id === id)),
    };
    dispatch(rectanglesSlice.actions.createRectangle({ rectangle }));
  };
  const handleSelect = (ev) => {
    setDraftRectangle({ ...draftRectangle, pointIds: ev.target.value });
    console.log(draftRectangle);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CreateRectangleFormComponent">
        <div className="InputContainer">
          <TextField
            className="CheckVertexes"
            label="Vertex"
            select
            SelectProps={{
              multiple: true,
            }}
            onChange={handleSelect}
            value={draftRectangle.pointIds}
            error={draftRectangle.pointIds.length !== 4}
            helperText={draftRectangle.pointIds.length !== 4 ? 'Please pick 4 points' : ''}
            fullWidth
          >
            {
              points.map((point) => (
                <MenuItem
                  key={point.id}
                  value={point.id}
                >
                  x: {point.x} y: {point.y}
                </MenuItem>
              ))
            }
          </TextField>
        </div>
        <div className="ActionsContainer">
          <Link to="..">CANCEL</Link>
          <Button
            variant="outlined"
            size="big"
            disabed = {draftRectangle.pointIds.length !== 4}
            onClick={() => handleSave()}
          >
            SAVE
          </Button>
        </div>
      </div>
    </PatchStyles>
  );
};
