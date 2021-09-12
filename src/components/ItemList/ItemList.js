import React from 'react'
import Item from './Item'

const ItemList = ({clothes}) => {
    return(
        <>
        {clothes.map(clothes=> <Item clothes={clothes}/>)}
        </>
    )
}

export default ItemList