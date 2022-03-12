import {CartContext} from "../../context/CartContext";
import './CartItem.css';
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'

const Item = ({clothes}) => {

    const cartContext = useContext(CartContext);
    const {cart, removeItem} = cartContext;

    function removeFromCart(){
        cartContext.removeItem(clothes);
    }

    return (
        <div className='CartItem' key={clothes.id}>
            <Card className="card-content" style={{ width: '14rem' }} >
                <Card.Img className="card-content-img" variant="top" src={clothes.image} alt=""/>
                <Card.Body className="card-body">
                    <Card.Title>{clothes.name}</Card.Title>
                    <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                    <Card.Subtitle>Quantity: {clothes.quantity}</Card.Subtitle>
                    <button className='CartBtt' onClick={removeFromCart}>Remove this item</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item