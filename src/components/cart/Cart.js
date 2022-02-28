import React, { useContext, useState, useEffect} from 'react';
//COMPONENTS
import CartItem from './CartItem'
//BOOTSTRAP
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//CONTEXT
import {CartContext} from "../../context/CartContext";
//REACT DOM
import {Link} from "react-router-dom";
//FIREBASE
import { addDoc, collection} from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig';

const initialState = {
    name: '',
    email: '',
    phone: '',
};

const Cart = () => {

    const cartContext = useContext(CartContext);
    const {cart, finalAmount} = cartContext;
    const [disapear, setDisapear] = useState(false);
    const[values, setValues] = useState(initialState);
    
    const onChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            values
        });
        console.log("Document written with ID: ", docRef.id);
        setValues(initialState);
    }

    function removeAllCart(){
        cartContext.clear();
    }

    useEffect(() => {
        setDisapear(cartContext.isEmpty());
    });
      
    return(
        <div>
            <div className='Items'>
                {disapear === false ? (
                    <div>
                        {cart.map(clothes =>
                            <div key={clothes.id}>
                                <CardGroup>
                                    <CartItem clothes={clothes} />
                                </CardGroup>
                            </div>
                        )}
                        <Link to="/purchase"><Button>Purchase items</Button></Link>
                        <button onClick={removeAllCart}>Remove all items</button>
                        <div>
                            Total: ${cartContext.finalAmount()}
                        </div>
                    </div>
                ) : (
                    <div>
                        Cart is Empty
                        <Link to="/shop"><Button>Search for items</Button></Link>
                    </div>
                )}
            </div>
            <div className='Form'>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={values.name} onChange={onChange} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name="phone"value={values.phone} onChange={onChange} placeholder="Enter phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" value={values.email} onChange={onChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" onSubmit={onSubmit} type="submit">
                        Purchase
                    </Button>
                </Form>
            </div>
        </div>
        
    );
}


export default Cart