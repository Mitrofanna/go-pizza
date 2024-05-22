import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
