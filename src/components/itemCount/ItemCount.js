import React, { useState } from 'react';
import Cart from '../cart/Cart';

const ItemCount = ({clothes, id, stock, onAdd}) =>{

  const [count, setCount] = useState(0);
  
  if (onAdd){
    return <>
      <Cart clothes={clothes} amount={count}/> 
    </>;
  }

  return (
    <div>
      Current count: {count}
      <hr />
      <button sign="+" onClick={() => count < stock ?  setCount(count + 1) : setCount(count)}>+</button>
      <button sign="-" onClick={() => count > 0 ?  setCount(count - 1) : setCount(count)}>-</button>
    </div>
  );
}

export default ItemCount;