import { useState } from 'react';

function Categories() {
  const categoriesList = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategory, setActiveCategory] = useState('Все');

  const onClickCategory = (item) => {
    setActiveCategory(item);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item) => (
          <li
            key={item}
            onClick={() => onClickCategory(item)}
            className={activeCategory === item ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
