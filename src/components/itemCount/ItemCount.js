import React, { useState } from 'react';
import Cart from '../cart/Cart';
import ItemDetail from '../itemDetail/ItemDetail';
import ReturnCount from '../itemDetail/ItemDetail';
import Popup from 'reactjs-popup';

const ItemCount = ({clothes, id, stock, modalOpen}) =>{

  console.log('pepe'+modalOpen);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  if (modalOpen){
    setOpen(o => !o)
  }
  
  return (
    <div>
      Current count: {count}
      <hr />
      <button sign="+" onClick={() => count < stock ?  setCount(count + 1) : setCount(count)}>+</button>
      <button sign="-" onClick={() => count > 0 ?  setCount(count - 1) : setCount(count)}>-</button>
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