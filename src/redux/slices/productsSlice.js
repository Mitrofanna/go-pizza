import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_ITEMS } from '../../api';

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async (params) => {
  const { category, order, search, currentPage, activeSort } = params;
  const { data } = await axios.get(
    `${API_ITEMS}?page=${currentPage}&limit=4&${category}&sortBy=${activeSort.sort}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
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
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
