import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая</h2>
      <p>
        Вы еще ничего не добавили,<br></br> для того чтобы заказать, перейдите на главную
      </p>
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
