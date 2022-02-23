import CartWidgetLogo from './CartWidget.png';
import {CartContext} from "../../context/CartContext";
import React, { useContext } from 'react';

const CartWidget = () =>{

    const cartContext = useContext(CartContext);
    const {cart} = cartContext;

    return(
        <div className="CartWidget">
            <img src={CartWidgetLogo} alt="logo" style={{width:"50%"}}/>
            <div className="Quantity">{cart.length}</div>
        </div>
    );
}

export default CartWidget;