import React from 'react';
import Card from 'react-bootstrap/card'

const Item = ({clothes}) => {
    return (
        <div key={clothes.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={clothes.image} alt=""/>
                <Card.Body>
                    <Card.Title>{clothes.name}</Card.Title>
                    <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item