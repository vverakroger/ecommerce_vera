import React, { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
import {CartContext} from "../../context/CartContext";
import './ItemCount.css';
import ItemDetail from '../itemDetail/ItemDetail';

const ItemCount = ({ clothes, onAddCart}) =>{
  
  const [count, setCount] = useState(0);
  const [disapear, setDisapear] = useState(false);
  const [open, setOpen] = useState(false);
  const stock = clothes.stock;

  const closeModal = () => setOpen(false);

  const cartContext = useContext(CartContext);
  const {cart, addItem} = cartContext;
  
  function onAddCart(){
    setDisapear(true);
    setOpen(true);
    cartContext.addItem(clothes, count)
  }

  return (
    <div>
      {disapear == false ? (
        <div>
          Current count: {count}
          <hr />
          <button className="sign" sign="+" onClick={() => count < stock ?  setCount(count + 1) : setCount(count)}>+</button>
          <button className="sign" sign="-" onClick={() => count > 0 ?  setCount(count - 1) : setCount(count)}>-</button>
          <hr />
          <button className="btt" onClick={onAddCart}>Add to cart</button>
        </div>
       ) : (
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            {count} items have been added to cart
          </div>
        </Popup>
      )}
    </div>
  );
}

export default ItemCount;