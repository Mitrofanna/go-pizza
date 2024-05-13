import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sort: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;
