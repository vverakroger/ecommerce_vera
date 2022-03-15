import React from "react";
import {useState} from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';
import Button from 'react-bootstrap/Button'

function ItemListContainer({greeting, productsData}){
    
    const [loading, setLoading] = useState(true);
    const[filter, setFilter] = useState("all");

    setTimeout(() => {
        if (typeof productsData[0] !== "undefined"){
            setLoading(false);
        }
    }, 1000);

    const productsData2 = [];
    if (typeof productsData[0] !== "undefined"){
        if((filter == "women") || (filter == "men")){
            var count = 0;
            for (let i = 0; i < productsData.length; i++) {
                if(productsData[i].category == filter){
                    productsData2[count] = productsData[i];
                    count = count + 1;
                }
            }
        }else{
            var count = 0;
            for (let i = 0; i < productsData.length; i++) {
                productsData2[count] = productsData[i];
                count = count + 1;
            }
        }
    }
    

    return(
        <div className="ItemListTitle">
            <h1>{greeting}</h1>
            <h2>Clothes</h2>
            <div className="clothes-btt">
                <Button className="card-body-btt" onClick={() => setFilter("all")}>All</Button>
                <Button className="card-body-btt" onClick={() => setFilter("men")}>Men</Button>
                <Button className="card-body-btt" onClick={() => setFilter("women")}>Women</Button>
            </div>
            {   loading ? 
                    <h3>Loading...</h3> 
                :   
                <div className="ItemList">
                        <ItemList clothes={productsData2}/> 
                </div>
            }               
        </div>
    )
}

export default ItemListContainer