import { useState } from 'react';

function Sort() {
  const sortList = ['популярные', 'по убыванию цены', 'по возрастанию цены'];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const onClickSort = (index) => {
    setActiveSort(index);
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sortList[activeSort]}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortList.map((sort, index) => (
              <li
                key={sort}
                onClick={() => onClickSort(index)}
                className={activeSort === index ? 'active' : ''}>
                {sort}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
