import React from 'react';
import Card from 'react-bootstrap/card'

const ItemDetail = ({clothes}) => {
    return(
        <>
        {clothes.map(clothes =>
            <div key={clothes.id}>
                <div key={clothes.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{clothes.name}</Card.Title>
                            <Card.Subtitle>{clothes.desc}</Card.Subtitle>
                            <Card.Text>{clothes.stock}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )}

    </>
    )
}


export default ItemDetail