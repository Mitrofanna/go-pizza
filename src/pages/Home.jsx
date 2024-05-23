import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Preloader from '../components/Preloader';
import Pagination from '../components/Pagination';
import { fetchProducts, productsSelector } from '../redux/slices/productsSlice';
import {
  filterSelector,
  setActiveCategory,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';

function Home() {
  const { activeCategory, activeSort, currentPage, searchValue } = useSelector(filterSelector);
  const { items, status } = useSelector(productsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const onChangeCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchItems = async () => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const order = activeSort.name === 'возрастанию цены' ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchProducts({ category, order, search, currentPage, activeSort }));
  };

  //Проверяем был ли первый рендер
  useEffect(() => {
    if (isMounted.current) {
      //Если нам пришли какие то параметры(обьект с данными), нужно преобразовать их в одну строку с помощью qs
      const queryString = qs.stringify({
        activeSort: activeSort.sort,
        activeCategory,
        currentPage,
      });

      //вшиваем эти данные в адресную строку с помощью useNavigate
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [activeCategory, activeSort, currentPage]);

  //проверяем URL-параметры и сохраем в редаксе
  useEffect(() => {
    //проверяем если есть что-то в адресной строке, то парсим(и убираем "?")
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const activeSort = list.find((obj) => obj.sort === params.sort);

      dispatch(setFilters({ ...params, activeSort }));
      isSearch.current = true;
    }
  }, []);

  //проверяем нужно ли делать запрос на изменение данных
  useEffect(() => {
    if (!isSearch.current) {
      fetchItems();
    }

    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, searchValue, currentPage]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories activeCategory={activeCategory} onClickCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <div className="content__error">
            <h2>К сожалению ничего не найдено.</h2>
            <p>Пожалуйста перезагрузите страницу или попробуйте зайти позже.</p>
          </div>
        ) : (
          <div className="content__items">
            {status === 'loading'
              ? [...new Array(4)].map((_, index) => <Preloader key={index} />)
              : items.map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <PizzaBlock key={item.id} {...item} />
                  </Link>
                ))}
          </div>
        )}
        <Pagination currentPage={currentPage} onClickPage={onChangePage} />
      </div>
    </div>
  );
}

export default Home;
