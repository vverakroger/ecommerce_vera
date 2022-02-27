import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import {CartContext} from "../../context/CartContext";
import React, { useContext, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import CartItem from './CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);
    const {cart, isEmpty} = cartContext;
    const [disapear, setDisapear] = useState(false);

    function removeAllCart(){
        cartContext.clear();
    }

    useEffect(() => {
        setDisapear(cartContext.isEmpty());
    });

    return(
        <div>
            {disapear === false ? (
                <div>
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
                        Total: ${cartContext.finalAmount()}
                    </div>
                </div>
            ) : (
                <div>
                    Cart is Empty
                    <Link to="/shop"><Button>Purchase Items</Button></Link>
                </div>
            )}
        </div>
    );
}


export default Cart