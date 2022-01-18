import genUid from 'light-uid';

const { createSlice } = require('@reduxjs/toolkit');

const getInitialState = () => {
  return {
    allRectangles: JSON.parse(localStorage.getItem('rectangles')) ?? [],
  };
};

const slice = createSlice({
  name: 'rectangles',
  initialState: getInitialState(),
  reducers: {
    createRectangle: (state, { payload }) => {
      state.allRectangles.push({ id: genUid(), ...payload.rectangle });
    },
    deleteRectangle: (state, { payload: id }) => {
      state.allRectangles = state.allRectangles.filter((rectangle) => rectangle.id !== id);
    },
  },
});

const selectors = {
  selectAll: (state) => state.rectangles.allRectangles,
};

export const rectanglesSlice = {
  selectors,
  ...slice,
};

