import React from "react";
import {useEffect, useState} from 'react';
import {getFetch} from '../../utils/Mock';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({greeting,productsData}){
    
    const [loading, setLoading] = useState(true)
    //const [clothes, setClothes] = useState([])
    
    useEffect(()=>{
        getFetch
        .then(res=>{
            //setClothes(res)
            setLoading(false)
        })
    },[])

    return(
        <div className="ListOfItems">
            <h1>{greeting}</h1>
            <h2>Clothes</h2> 
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <div className="Items">
                    <ItemList clothes={productsData}/> 
                </div>            
            }   
        </div>
    )
}

export default ItemListContainer