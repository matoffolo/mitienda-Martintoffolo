import React, {useState,useEffect} from 'react';
import Item from '../Item/Item';
import axios from 'axios'
import './ItemListContainer.css'
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const ItemListConteiner = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios('https://fakestoreapi.com/products').then((res) =>
    setProducts(res.data)
		);	setTimeout(() => {
			setIsLoading(false);
		}, 2000);}, []);

  return (
    <>
    {isLoading ? (
				<Spinner />
			) : (
    <div className='itemList'>
      {products.map((prod)=>{
          return(
              <div key={prod.id}>
                 <Link to={`/detail/${prod.id}`} className='Link'>
                  <Item data = {prod}/>  
                </Link>   
              </div>
          )
      })}
    </div>
      )}
    </>
  );
}

export default ItemListConteiner;
