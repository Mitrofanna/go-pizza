import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TSort } from '../../@types/sort';

type TFilterSlice = {
  searchValue: string;
  activeCategory: number;
  activeSort: TSort;
  currentPage: number;
};

const initialState: TFilterSlice = {
  searchValue: '',
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sort: 'rating',
  },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setActiveSort(state, action: PayloadAction<TSort>) {
      state.activeSort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = action.payload.currentPage;
      state.activeSort.sort = action.payload.activeSort; //sort
      state.activeCategory = action.payload.activeCategory;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setSearchValue, setActiveCategory, setActiveSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
