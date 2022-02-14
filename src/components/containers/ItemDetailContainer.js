import React from "react";
import {useEffect, useState} from 'react';
import {getFetch} from '../../utils/Mock';
import ItemDetail from '../itemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

function ItemDetailContainer({greeting,onAdd}){
    const [clothes, setClothes] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getFetch
        .then(res=>{
            setClothes(res)
            setLoading(false)
        })
    },[])

    const { id } = useParams()

    return(
        <div className="Items">
            <h1>{greeting}</h1>
            <h2>Items</h2> 
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <div className="Items">
                    <ItemDetail clothes={clothes[id-1]}/> 
                </div>            
            }   
        </div>
    )
}

export default ItemDetailContainer