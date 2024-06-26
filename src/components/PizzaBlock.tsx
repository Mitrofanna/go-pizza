import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addItem, cartItemSelector } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { TCard } from '../@types/card';
import { useAppDispatch } from '../redux/store';

const PizzaBlock: React.FC<TCard> = (props) => {
  const { id, title, imageUrl, type, size, price } = props;
  const dispatch = useAppDispatch();
  const cartItem = useSelector(cartItemSelector(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const typeNames = ['тонкое', 'традиционное'];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onAddItem = () => {
    const item = {
      id,
      title,
      imageUrl,
      type: typeNames[activeType],
      size: size[activeSize],
      price,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block">
      <Link to={`/product/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Фото пиццы." />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {type.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}>
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {size.map((itemSize, index) => (
            <li
              key={itemSize}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'active' : ''}>
              {itemSize} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button onClick={onAddItem} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount! > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
