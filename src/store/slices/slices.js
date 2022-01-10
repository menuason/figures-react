import genUid from 'light-uid';

const { createSlice } = require('@reduxjs/toolkit');

const getInitialState = () => {
  return {
    allPoints: JSON.parse(localStorage.getItem('points')) ?? [],
  };
};

const slice = createSlice({
  name: 'points',
  initialState: getInitialState(),
  reducers: {
    createPoint: (state, { payload }) => {
      state.allPoints.push({ id: genUid(), ...payload.point });
    },
    deletePoint: (state, { payload: id }) => {
      state.allPoints = state.allPoints.filter((point) => point.id !== id);
    },
  },
});

const selectors = {
  selectAll: (state) => state.points.allPoints,
};

export const pointsSlice = {
  selectors,
  ...slice,
};
