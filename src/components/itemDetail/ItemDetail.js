import React from 'react';
import Card from 'react-bootstrap/card'
import './ItemDetail.css';

const ItemDetail = ({clothes}) => {
    return(
        <>
        {clothes.map(clothes =>
            <div key={clothes.id}>
                <div key={clothes.id}>
                    <Card className="card-content" style={{ width: '18rem' }}>
                        <Card.Body className="card-body">
                            <Card.Title>{clothes.name}</Card.Title>
                            <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                            <Card.Text>Stock: {clothes.stock}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )}

    </>
    )
}


export default ItemDetail