import genUid from 'light-uid';

const { createSlice } = require('@reduxjs/toolkit');

const getInitialState = () => {
  return {
    allTriangles: JSON.parse(localStorage.getItem('triangles')) ?? [],
  };
};

const slice = createSlice({
  name: 'triangles',
  initialState: getInitialState(),
  reducers: {
    createTriangle: (state, { payload }) => {
      state.allTriangles.push({ id: genUid(), ...payload.triangle });
    },
    deleteTriangle: (state, { payload: id }) => {
      state.allTriangles = state.allTriangles.filter((triangle) => triangle.id !== id);
    },
  },
});

const selectors = {
  selectAll: (state) => state.triangles.allTriangles,
};

export const trianglesSlice = {
  selectors,
  ...slice,
};
