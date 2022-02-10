import React from "react";
import {useEffect, useState} from 'react';
import {getFetch} from '../../utils/Mock';
import ItemDetail from '../itemDetail/ItemDetail';

function ItemDetailContainer({number,greeting,onAdd}){
    const [clothes, setClothes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(res=>{
            setClothes(res)
            setLoading(false)
        })
    },[])

    console.log(clothes[number-1]);

    return(
        <div className="Items">
            <h1>{greeting}</h1>
            <h2>Items</h2> 
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <div className="Items">
                    <ItemDetail clothes={clothes[number-1]}/> 
                </div>            
            }   
        </div>
    )
}

export default ItemDetailContainer