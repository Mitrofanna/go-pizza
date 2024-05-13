import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Preloader from '../components/Preloader';
import { API_ITEMS } from '../api';
import Pagination from '../components/Pagination';
import Context from '../context';
import { setActiveCategory } from '../redux/slices/filterSlice';

function Home() {
  const activeCategory = useSelector((state) => state.filterSlice.activeCategory);
  const dispatch = useDispatch();

  const { searchValue } = useContext(Context);

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  const onChangeCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  useEffect(() => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const order = activeSort.name === 'возрастанию цены' ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    setIsLoading(true);
    fetch(
      `${API_ITEMS}?page=${currentPage}&limit=8&${category}&sortBy=${activeSort.sort}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, searchValue, currentPage]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategory={activeCategory} onClickCategory={onChangeCategory} />
          <Sort activeSort={activeSort} onClickSort={(i) => setActiveSort(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Preloader key={index} />)
            : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
        <Pagination onClickPage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
}

export default Home;
