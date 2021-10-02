import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    cities:(state,action)=>{
      
    }
  },
});

export const { cities} = appSlice.actions;

export const selectCities = (state) => state.app.cities;

export default appSlice.reducer;
