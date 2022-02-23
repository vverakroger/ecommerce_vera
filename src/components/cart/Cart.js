import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {CartContext} from "../../context/CartContext";
import React, { useContext } from 'react';
import {Link} from "react-router-dom";

const Cart = () => {

    const cartContext = useContext(CartContext);
    const {cart, addItem} = cartContext;
    

    return(
        <>
        {cart.clothes.map(clothes =>
            <div key={clothes.id}>
                <CardGroup>
                    <Card className="card-content" style={{ width: '14rem' }} >
                        <Card.Img variant="top" src={clothes.image} alt=""/>
                        <Card.Body className="card-body">
                            <Card.Title>{clothes.name}</Card.Title>
                            <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )}
        <Link to="/finish"><Button>Finalizar Compra</Button></Link>
        </>
    );
}


export default Cart