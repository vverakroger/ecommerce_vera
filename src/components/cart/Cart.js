import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import {CartContext} from "../../context/CartContext";
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import CartItem from './CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);
    const {cart, amount, removeItem, finalAmount, clear} = cartContext;

    function removeAllCart(){
        cartContext.clear();
    }

    return(
        <>
        {cart.map(clothes =>
            <div key={clothes.id}>
                <CardGroup>
                    <CartItem clothes={clothes} />
                </CardGroup>
            </div>
        )}
        <Link to="/finish"><Button>Purchase items</Button></Link>
        <button onClick={removeAllCart}>Remove all items</button>
        <div>
            Total: {cartContext.finalAmount()}
        </div>
        </>
    );
}


export default Cart