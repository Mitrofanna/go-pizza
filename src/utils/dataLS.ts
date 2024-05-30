import { getTotalPrice } from './totalPrice';

export const getDataLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
