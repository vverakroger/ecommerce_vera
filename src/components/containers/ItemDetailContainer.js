import React from "react";
import {useEffect, useState} from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
//FIREBASE
import { collection, query, where, getDocs, FieldPath, documentId } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig';


const ItemDetailContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
		const getProduct = async () => {
			const q = query(collection(db, 'clothes'), where(documentId(), '==', id));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setProductData(docs);
		};
		getProduct();
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

    return(
        <div className="Items">
            <h1>{greeting}</h1>
            <h2>Items</h2> 
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <div className="Items">
                    <ItemDetail clothes={productData[0]}/> 
                </div>            
            }   
        </div>
    )
}

export default ItemDetailContainer