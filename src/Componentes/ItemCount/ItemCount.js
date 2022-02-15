import React, {useState} from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState (0)
    const stock = 20
    const inicial = 0
    const incrementarContador = () => {
        if(counter<stock){
        setCounter(counter +1)}
    }
    const decrementarContador = () => {
        if(counter>inicial){
        setCounter(counter - 1)}
    }

    const onAdd = () => {
    
    }

  return (
    <div>
      <p>{counter}</p>
    <button onClick={incrementarContador}>Incrementar</button>
    <button onClick={decrementarContador}>Decrementar</button>
    <button type='button' onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
