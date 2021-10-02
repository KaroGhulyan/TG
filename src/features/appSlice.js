import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [
    { id: 1, city: 'New York' },
    { id: 2, city: 'San Francisco' },
    { id: 3, city: 'San Diego' },
    { id: 4, city: 'Chicago' },
    { id: 5, city: 'Boston' },
    { id: 6, city: 'Austin' },
  ],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = appSlice.actions;

export const selectCities = (state) => state.app.cities;

export default appSlice.reducer;
