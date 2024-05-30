import { TCard } from '../@types/card';

export const getTotalPrice = (items: TCard[]) => {
  return items.reduce((sum, item) => item.price * item.count! + sum, 0);
};
