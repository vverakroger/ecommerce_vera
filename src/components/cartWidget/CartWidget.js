import CartWidgetAdd from "../../imgs/CartWidget.png"
import {CartContext} from "../../context/CartContext";
import React, { useState, useContext, useEffect } from 'react';

const CartWidget = () =>{

    const [disapear, setDisapear] = useState(false);
    const [quantity, setQuantity] = useState(false);
    const cartContext = useContext(CartContext);
    const {cart, isEmpty, itemAmount} = cartContext;
    
    useEffect(() => {
        setDisapear(cartContext.isEmpty());
        setQuantity(cartContext.itemAmount());
    });

    return(
        <div>
            {disapear === false ? (
                <div className="CartWidget">
                    <img src={CartWidgetAdd} alt="logo" style={{width:"50%"}}/>
                    <div className="Quantity">{quantity}</div>
                </div>
            ) : (
                <div className="CartWidget"> 
                </div>
            )}
        </div>
    );
}

export default CartWidget;