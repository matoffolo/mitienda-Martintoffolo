import React, {useState} from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState (0)

    const incrementarContador = () => {
      setCounter(counter +1)
    }
  return (
    <div>
      <p>{counter}</p>
    <button onClick={incrementarContador}>Incrementar</button>
    <button onClick={()=> setCounter(counter-1)}>Decrementar</button>
    </div>
  );
}

export default ItemCount;
