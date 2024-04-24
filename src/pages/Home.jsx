import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Preloader from '../components/Preloader';
import { API_ITEMS } from '../api';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  //const [activeSort, setActiveSort] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_ITEMS + '?category=' + activeCategory)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={(index) => setActiveCategory(index)}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Preloader key={index} />)
            : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
