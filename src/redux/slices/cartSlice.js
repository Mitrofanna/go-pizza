import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    removeitem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeitem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;