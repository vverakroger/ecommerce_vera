import React from "react";
import {useEffect, useState} from 'react';
import {getFetch} from '../../utils/Mock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting,onAdd}){
    const [clothes, setClothes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(res=>{
            setClothes(res)
            setLoading(false)
        })
    },[])
    console.log(clothes);

    return(
        <div>
            <h1>{greeting}</h1>
            <h2>Clothes</h2> 
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <ItemList clothes={clothes}/>             
            }
        </div>
    )
}

export default ItemListContainer