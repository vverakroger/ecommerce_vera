import React, { useContext, useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
//STYLES
import './Cart.css';
//COMPONENTS
import CartItem from './CartItem';
//BOOTSTRAP
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//CONTEXT
import {CartContext} from "../../context/CartContext";
//REACT DOM
import {Link} from "react-router-dom";
//FIREBASE
import { doc, addDoc, collection, updateDoc, getDocs, query, where} from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig';

const initialState = {
    name: '',
    surname: '',
    email: '',
    confemail: '',
    phone: '',
};

const Cart = () => {

    // Pop up after purchase an item
    const [cartPurchased, setCartPurchased] = useState(false);
    const [cartPurchasedId, setCartPurchasedId] = useState(false);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    // Context
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;
    const [disapear, setDisapear] = useState(false);
    const[buyer, setBuyer] = useState(initialState);
    const items = cartContext.returnItems();
    const total = cartContext.finalAmount();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
        const q = query(collection(db, 'clothes'), where('stock', '>', 0));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id });
        });
        setProductsData(docs);
        };
        getProducts();
    }, []);
   
    const onChange = (e) => {
        const {value, name} = e.target;
        setBuyer({...buyer, [name]: value});
    }

    const sendData = async (e) => {
        const docRef = await addDoc(collection(db, "purchases"), {
            buyer,
            items,
            date,
            total
        });
        console.log("Document written with ID: ", docRef.id);
        setCartPurchasedId(docRef.id);
        setBuyer(initialState);
        for (let i = 0; i < items.length; i++) {
            var stock = 0;
            for (let j = 0; j < productsData.length; j++) {
                if (productsData[j].id == items[i].id) {
                    stock = productsData[j].stock;
                }
            }
            stock = stock - items[i].quantity;
            const stockRef = doc(db, "clothes", items[i].id);
            await updateDoc(stockRef, {
            stock: stock
            });
        }
        cartContext.clear();
        setCartPurchased(true);
        setOpen(true);
    }

    function removeAllCart(){
        cartContext.clear();
    }

    useEffect(() => {
        setDisapear(cartContext.isEmpty());
    });
      
    return(
        <div>
        {cartPurchased == false ? (
            <div className='CartContainer'>
                <div className='CartForm'>
                    <Form className='CartForm2'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={buyer.name} onChange={onChange} placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Surname</Form.Label>
                            <Form.Control name="surname" value={buyer.surname} onChange={onChange} placeholder="Enter surname" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="phone"value={buyer.phone} onChange={onChange} placeholder="Enter phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" value={buyer.email} onChange={onChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm email address</Form.Label>
                            <Form.Control name="confemail" value={buyer.confemail} onChange={onChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button className='CartBtt' onClick={sendData}>
                            Purchase
                        </Button>
                    </Form>
                </div>
                <div className='CartItems'>
                    {disapear === false ? (
                        <div>
                            {cart.map(clothes =>
                                <div key={clothes.id}>
                                    <CardGroup>
                                        <CartItem clothes={clothes} />
                                    </CardGroup>
                                </div>
                            )}
                            <button className='CartBtt' onClick={removeAllCart}>Remove all items</button>
                            <div>
                                Total: ${cartContext.finalAmount()}
                            </div>
                        </div>
                    ) : (
                        <div>
                            Cart is Empty
                            <Link to="/shop"><Button className='CartBtt'>Search for items</Button></Link>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="modal">
                <a className="close" onClick={closeModal}>
                &times;
                </a>
                Your identification number is: {cartPurchasedId}
            </div>
            </Popup>
        )}
        </div>
        
    );
}


export default Cart