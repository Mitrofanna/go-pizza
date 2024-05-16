import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSort } from '../redux/slices/filterSlice';

export const list = [
  { name: 'популярности', sort: 'rating' },
  { name: 'убыванию цены', sort: 'price' },
  { name: 'возрастанию цены', sort: 'price' },
];

function Sort() {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.filterSlice.activeSort);

  const [isOpen, setIsOpen] = useState(false);

  const onChangeSort = (obj) => {
    dispatch(setActiveSort(obj));
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по</b>
        <span onClick={() => setIsOpen(!isOpen)}>{activeSort.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => onChangeSort(item)}
                className={activeSort.sort === item.sort ? 'active' : ''}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
