import PatchStyles from 'patch-styles';
import * as classes from './triangle-form.modules.scss';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { pointsSlice, trianglesSlice } from '../../../store/slices';
import { useState } from 'react';

const DEFAULT_TRIANGLE_VALUE = {
  pointIds: [],
};

export const TriangleForm = () => {
  const points = useSelector(pointsSlice.selectors.selectAll);
  const [draftTriangle, setDraftTriangle] = useState(DEFAULT_TRIANGLE_VALUE);
  const dispatch = useDispatch();

  const handleSelect = (ev) => {
    setDraftTriangle({ ...draftTriangle, pointIds: ev.target.value });
  };

  const handleSave = () => {
    handleCreate(draftTriangle);
    setDraftTriangle(DEFAULT_TRIANGLE_VALUE);
  };

  const handleCreate = ({ pointIds }) => {
    const triangle = {
      points: pointIds.map((pointId) => points.find((point) => point.id === pointId)),
    };
    dispatch(trianglesSlice.actions.createTriangle({ triangle }));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CreateTriangleFormComponent">
        <div className="InputContainer">
          <TextField
            className="CheckVertexes"
            label="Vertex"
            select
            SelectProps={{
              multiple: true,
            }}
            onChange={handleSelect}
            value={draftTriangle.pointIds}
            error={draftTriangle.pointIds.length !== 3}
            helperText={draftTriangle.pointIds.length !== 3 ? 'Please pick 3 points' : ''}
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
                ),
              )
            }
          </TextField>
        </div>

        <div className="ActionsContainer">
          <Link to="..">CANCEL</Link>
          <div className="ActionsButton">
            <Button
              variant="outlined"
              size="big"
              onClick={() => handleSave()}
            >
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </PatchStyles>
  );
};
