import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css';

const Item = ({clothes}) => {
    return (
        <div key={clothes.id}>
            <Card className="card-content" style={{ width: '14rem' }} >
                <Card.Img variant="top" src={clothes.image} alt=""/>
                <Card.Body className="card-body">
                    <Card.Title>{clothes.name}</Card.Title>
                    <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item