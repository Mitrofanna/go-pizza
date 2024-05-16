import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sort: 'rating',
  },
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = action.payload.currentPage;
      state.activeSort.sort = action.payload.activeSort;
      state.activeCategory = action.payload.activeCategory;
    },
  },
});

export const { setActiveCategory, setActiveSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
