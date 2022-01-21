import { configureStore } from '@reduxjs/toolkit';
import { circlesSlice, pointsSlice, rectanglesSlice, trianglesSlice } from './slices';

export const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
    circles: circlesSlice.reducer,
    rectangles: rectanglesSlice.reducer,
    triangles: trianglesSlice.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('points', JSON.stringify(state.points.allPoints));
  localStorage.setItem('circles', JSON.stringify(state.circles.allCircles));
  localStorage.setItem('rectangles', JSON.stringify(state.rectangles.allRectangles));
  localStorage.setItem('triangles', JSON.stringify(state.triangles.allTriangles));
});
