import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, setActiveSort } from '../redux/slices/filterSlice';
import { TSort } from '../@types/sort';

export const list: TSort[] = [
  { name: 'популярности', sort: 'rating' },
  { name: 'убыванию цены', sort: 'price' },
  { name: 'возрастанию цены', sort: 'price' },
];

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const { activeSort } = useSelector(filterSelector);
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onChangeSort = (obj: TSort) => {
    dispatch(setActiveSort(obj));
    setIsOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().includes(sortRef.current!)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', onClickOutside);
    //удаляет обработчик
    return () => document.body.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
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
};

export default Sort;
