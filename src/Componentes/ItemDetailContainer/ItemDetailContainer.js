import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = () => {
    const [data, setData] = useState ([])

    useEffect(() => {
    axios('https://fakestoreapi.com/products/1').then((res) => setData(res.data))
    },[]);



  return (
    <div>
        <ItemDetail data= {data}/>
    </div>
  );
}

export default ItemDetailContainer;
