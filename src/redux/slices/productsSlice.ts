import { TSort } from './../../@types/sort';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_ITEMS, Status } from '../../consts';
import { RootState } from '../store';
import { TCard } from '../../@types/card';

type TFetchProductsParams = {
  category: string;
  order: string;
  search: string;
  currentPage: string;
  activeSort: TSort;
};

// Асинхронный экшн
export const fetchProducts = createAsyncThunk<TCard[], TFetchProductsParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { category, order, search, currentPage, activeSort } = params;
    const { data } = await axios.get<TCard[]>(
      `${API_ITEMS}?page=${currentPage}&limit=4&${category}&sortBy=${activeSort.sort}&order=${order}${search}`,
    );
    return data;
  },
);

type TProductsSlice = {
  items: TCard[];
  status: Status;
};

const initialState: TProductsSlice = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const productsSelector = (state: RootState) => state.products;
export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
