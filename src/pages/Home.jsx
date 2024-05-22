import { useContext, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Preloader from '../components/Preloader';
import { API_ITEMS } from '../api';
import Pagination from '../components/Pagination';
import Context from '../context';
import { setActiveCategory, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

function Home() {
  const { activeCategory, activeSort, currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchValue } = useContext(Context);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

    setIsLoading(true);
    try {
      const res = await axios.get(
        `${API_ITEMS}?page=${currentPage}&limit=4&${category}&sortBy=${activeSort.sort}&order=${order}${search}`,
      );
      setItems(res.data);
    } catch (error) {
      console.log('Ошибка при получении данных', error);
    } finally {
      setIsLoading(false);
    }
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
        <div className="content__items">
          {isLoading
            ? [...new Array(4)].map((_, index) => <Preloader key={index} />)
            : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
        <Pagination currentPage={currentPage} onClickPage={onChangePage} />
      </div>
    </div>
  );
}

export default Home;
