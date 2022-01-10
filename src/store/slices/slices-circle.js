import genUid from 'light-uid';

const { createSlice } = require('@reduxjs/toolkit');

const getInitialState = () => {
  return {
    allCircles: JSON.parse(localStorage.getItem('circles')) ?? [],
  };
};

const slice = createSlice({
  name: 'circles',
  initialState: getInitialState(),
  reducers: {
    createCircle: (state, { payload }) => {
      state.allCircles.push({ id: genUid(), ...payload.circle });
    },
    deleteCircle: (state, { payload: id }) => {
      state.allCircles = state.allCircles.filter((circle) => circle.id !== id);
    },
  },
});

const selectors = {
  selectAll: (state) => state.circles.allCircles,
};

export const circlesSlice = {
  selectors,
  ...slice,
};
