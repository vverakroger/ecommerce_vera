import React, { useState } from 'react';

function ItemCount() {

  const [count, setCount] = useState(0);
  const stock = 5;
  
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