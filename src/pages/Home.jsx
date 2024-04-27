import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Preloader from '../components/Preloader';
import { API_ITEMS } from '../api';
import Pagination from '../components/Pagination';

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const order = activeSort.name === 'возрастанию цены' ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    setIsLoading(true);
    fetch(`${API_ITEMS}?${category}&sortBy=${activeSort.sort}&order=${order}${search}`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={(i) => setActiveCategory(i)}
          />
          <Sort activeSort={activeSort} onClickSort={(i) => setActiveSort(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Preloader key={index} />)
            : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
