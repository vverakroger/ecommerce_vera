import React from 'react'
import Item from './Item'

const ItemList = ({clothes}) => {
    return(
        <>
        {clothes.map(clothes =>
            <div key={clothes.id}>
                <Item clothes={clothes} />
            </div>
        )}

    </>
    )
}

export default ItemList