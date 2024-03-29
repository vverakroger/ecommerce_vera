import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import {Link} from "react-router-dom";


const ItemDetail = ({clothes}) => {

    const [cartAdd, setCartAdd] = useState(false);
    
    const onAddCart = () => {
        setCartAdd(!cartAdd)
    }
    
    return(
        <div key={clothes.id}>
            <div key={clothes.id}>
                <Card className="card-content" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={clothes.image} alt=""/>
                    <Card.Body className="card-body">
                        <Card.Title>{clothes.name}</Card.Title>
                        <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                        <Card.Subtitle>Price: ${clothes.price}</Card.Subtitle>
                        <Card.Subtitle>Stock: {clothes.stock}</Card.Subtitle>
                        <div className="Count">
                            <ItemCount clothes={clothes} onAddCart={onAddCart} />
                        </div>
                        <Link to="/shop"><Button className="card-btt">Purchase Items</Button></Link>
                        <Link to="/cart"><Button className="card-btt">Finish</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );

}

export default ItemDetail