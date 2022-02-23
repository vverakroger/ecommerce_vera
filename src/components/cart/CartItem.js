import {CartContext} from "../../context/CartContext";
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'

const Item = ({clothes, removeFromCart}) => {

    const cartContext = useContext(CartContext);
    const {cart, removeItem} = cartContext;

    function removeFromCart(){
        cartContext.removeItem(clothes);
        console.log("ci"+clothes);
    }

    return (
        <div key={clothes.id}>
            <Card className="card-content" style={{ width: '14rem' }} >
                <Card.Img variant="top" src={clothes.image} alt=""/>
                <Card.Body className="card-body">
                    <Card.Title>{clothes.name}</Card.Title>
                    <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                    <button onClick={removeFromCart}>Remove this item</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item