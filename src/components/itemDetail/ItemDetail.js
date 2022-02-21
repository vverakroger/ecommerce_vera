import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import {Link} from "react-router-dom";

const ItemDetail = ({clothes}) => {
    
    function onAddCart(){
        
    }

    return(
        <>
        <div key={clothes.id}>
            <div key={clothes.id}>
                <Card className="card-content" style={{ width: '18rem' }}>
                    <Card.Body className="card-body">
                        <Card.Title>{clothes.name}</Card.Title>
                        <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                        <Card.Text>Stock: {clothes.stock}</Card.Text>
                        <div className="Count">
                            <ItemCount stock={clothes.stock} onAddCart={onAddCart}/>
                        </div>
                        <Link to="/shop"><Button>Seguir Comprando</Button></Link>
                        <Link to="/cart"><Button>Finalizar Compra</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
    )
}


export default ItemDetail