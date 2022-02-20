import React, { useState } from 'react';
import Cart from '../cart/Cart';
import ItemDetail from '../itemDetail/ItemDetail';
import ReturnCount from '../itemDetail/ItemDetail';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button'

const ItemCount = ({ stock, onAdd}) =>{

  const [count, setCount] = useState(0);
  const [disapear, setDisapear] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => open = false;
  
  function onAddCart(){
    setDisapear(true);
    setOpen(true);
  }
  
  if (disapear) return null;
  return (
    <div>
      <div>
        Current count: {count}
        <hr />
        <button sign="+" onClick={() => count < stock ?  setCount(count + 1) : setCount(count)}>+</button>
        <button sign="-" onClick={() => count > 0 ?  setCount(count - 1) : setCount(count)}>-</button>
        <button onClick={onAddCart}>Add to cart</button>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          {count} added
        </div>
      </Popup>
    </div>
  );
}

export default ItemCount;