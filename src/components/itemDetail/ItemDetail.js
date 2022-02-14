import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import { NavLink} from "react-router-dom";

const ItemDetail = ({clothes}) => {

    function onAdd(){
        return <>
            <ItemCount clothes={clothes} id={clothes.id} stock={clothes.stock} onAdd={true} /> 
        </>;
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
                            <ItemCount stock={clothes.stock} onAdd={false}/>
                        </div> 
                        <Button variant="primary" onClick={onAdd}><NavLink to={`/cart`}>Add to Cart</NavLink></Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
    )
}


export default ItemDetail