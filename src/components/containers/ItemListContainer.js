import React from "react";
import {useState} from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({greeting, productsData}){
    
    const [loading, setLoading] = useState(true)
    
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return(
        <div className="ItemListTitle">
            <h1>{greeting}</h1>
            <h2>Clothes</h2>
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <div className="ItemList">
                        <ItemList clothes={productsData}/> 
                </div>
            }               
        </div>
    )
}

export default ItemListContainer