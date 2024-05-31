import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { API_ITEMS } from '../consts';

const FullProduct = () => {
  const { id } = useParams();

  const [fullProduct, setFullProduct] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const navigate = useNavigate();
  const notify = () => toast.error('Ошибка при получении данных', { autoClose: 1500 });

  useEffect(() => {
    const fetchFullProduct = async () => {
      try {
        const { data } = await axios.get(`${API_ITEMS}/${id}`);
        setFullProduct(data);
      } catch (error) {
        notify();
        navigate('/');
      }
    };
    fetchFullProduct();
  }, []);

  if (!fullProduct) {
    return (
      <div className="product__loading">
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <section className="product">
      <img src={fullProduct.imageUrl}></img>
      <h2>{fullProduct.title}</h2>
      <span>{fullProduct.price} ₽</span>
    </section>
  );
};

export default FullProduct;
