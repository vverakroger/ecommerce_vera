import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css';
import { NavLink} from "react-router-dom";

const Item = ({clothes}) => {
    return (
        <div key={clothes.id}>
            <Card className="card-content" style={{ width: '14rem' }} >
                <Card.Img className="card-content-img" variant="top" src={clothes.image} alt=""/>
                <Card.Body className="card-body">
                    <Card.Title className="card-body-title">{clothes.name}</Card.Title>
                    <Card.Subtitle >{clothes.desc}</Card.Subtitle>
                    <Card.Subtitle >$ {clothes.price}</Card.Subtitle>
                    <NavLink to={`/details/${clothes.id}`}><Button className="card-body-btt" >Details</Button></NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item