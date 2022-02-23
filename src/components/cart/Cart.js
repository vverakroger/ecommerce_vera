import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import {CartContext} from "../../context/CartContext";
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import CartItem from './CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);
    const {cart, amount, removeItem, finalAmount} = cartContext;

    function removeFromCart(){
        
    }

    return(
        <>
        {cart.map(clothes =>
            <div key={clothes.id}>
                <CardGroup>
                    <CartItem clothes={clothes} removeFromCart={removeFromCart} />
                </CardGroup>
            </div>
        )}
        <Link to="/finish"><Button>Finalizar Compra</Button></Link>
        <div>
            Total: {}
        </div>
        </>
    );
}


export default Cart