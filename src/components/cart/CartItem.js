import {CartContext} from "../../context/CartContext";
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'

const Item = ({clothes}) => {

    const cartContext = useContext(CartContext);
    const {cart, removeItem} = cartContext;

    function removeFromCart(){
        cartContext.removeItem(clothes);
    }

    return (
        <div key={clothes.id}>
            <Card className="card-content" style={{ width: '14rem' }} >
                <Card.Img variant="top" src={clothes.image} alt=""/>
                <Card.Body className="card-body">
                    <Card.Title>{clothes.name}</Card.Title>
                    <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                    <Card.Text>Quantity: {clothes.quantity}</Card.Text>
                    <button onClick={removeFromCart}>Remove this item</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item