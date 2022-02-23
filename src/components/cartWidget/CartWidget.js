import CartWidgetLogo from './CartWidget.png';
import {CartContext} from "../../context/CartContext";
import React, { useState, useContext } from 'react';

const CartWidget = () =>{
    const [disapear, setDisapear] = useState(false);
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;
    
    //if (cart.length == 0){
      //  disapear = false;
    //}

    return(
        <div>
        {disapear == false ? (
            <div className="CartWidget">
                <img src={CartWidgetLogo} alt="logo" style={{width:"50%"}}/>
                <div className="Quantity">{cart.length}</div>
            </div>
        ) : (
            <div>
            </div>
        )}
        </div>
    );
}

export default CartWidget;