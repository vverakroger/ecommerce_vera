import CartWidgetAdd from "../../imgs/CartWidget.png"
import {CartContext} from "../../context/CartContext";
import React, { useState, useContext, useEffect } from 'react';
import './CartWidget.css';

const CartWidget = () =>{

    const [disapear, setDisapear] = useState(false);
    const [quantity, setQuantity] = useState(false);
    const cartContext = useContext(CartContext);
    const {cart, isEmpty, itemAmount} = cartContext;
    
    useEffect(() => {
        //setDisapear(cartContext.isEmpty());
        setQuantity(cartContext.itemAmount());
    });

    return(
        <div>
            {disapear === false ? (
                <div className="CartWidget">
                    <img src={CartWidgetAdd} alt="logo" style={{width:"50%"}}/>
                    <a className="Quantity">{quantity}</a>
                </div>
            ) : (
                <div className="CartWidget"> 
                </div>
            )}
        </div>
    );
}

export default CartWidget;