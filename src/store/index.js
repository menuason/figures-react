import { configureStore } from '@reduxjs/toolkit';
import { circlesSlice, pointsSlice } from './slices';

export const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
    circles: circlesSlice.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('points', JSON.stringify(state.points.allPoints));
  localStorage.setItem('circles', JSON.stringify(state.circles.allCircles));
});

