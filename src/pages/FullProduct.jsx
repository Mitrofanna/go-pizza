import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_ITEMS } from '../api';

function FullProduct() {
  const { id } = useParams();
  const [fullProduct, setFullProduct] = useState();

  useEffect(() => {
    const fetchFullProduct = async () => {
      try {
        const { data } = await axios.get(`${API_ITEMS}/${id}`);
        setFullProduct(data);
      } catch (error) {
        console.log('Ошибка при получении данных', error);
      }
    };
    fetchFullProduct();
  }, []);

  if (!fullProduct) {
    return 'Загрузка';
  }

  return (
    <section className="container">
      <img src={fullProduct.imageUrl}></img>
      <h2>{fullProduct.title}</h2>
      <span>{fullProduct.price}</span>
    </section>
  );
}

export default FullProduct;