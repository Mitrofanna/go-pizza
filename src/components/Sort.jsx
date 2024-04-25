import { useState } from 'react';

function Sort({ activeSort, onClickSort }) {
  const sortList = [
    { name: 'популярности', sort: 'rating' },
    { name: 'убыванию цены', sort: 'price' },
    { name: 'возрастанию цены', sort: 'price' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const onChangeSort = (index) => {
    onClickSort(index);
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
            {sortList.map((item, index) => (
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
