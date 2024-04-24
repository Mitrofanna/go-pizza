function Categories({ activeCategory, onClickCategory }) {
  const categoriesList = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeCategory === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
