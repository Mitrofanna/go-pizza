import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCard } from '../../@types/card';
import { RootState } from '../store';

type TCartSlice = {
  items: TCard[];
  totalPrice: number;
};

const initialState: TCartSlice = {
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
        findItem.count!++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count! + sum, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count!--;
      }
    },
  },
});

export const cartItemSelector = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
export const cartSelector = (state: RootState) => state.cart;
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
