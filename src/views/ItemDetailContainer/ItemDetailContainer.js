import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDetail from '../../Componentes/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'




const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  let id = useParams();

	let prodID = id.id;
 
useEffect(() => {
  axios(`https://fakestoreapi.com/products/${prodID}`).then((res) => 
  setProducts(res.data))},
  [prodID]);

 
  return (
    <div className='container'>
      {products.map((prod) => {
        return (
          <div key={prod.id}>
            <ItemDetail data={prod} />
          </div>
        );
      })}
    </div>
);
};

export default ItemDetailContainer;
