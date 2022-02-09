import React from 'react'
import Item from './Item'
import CardGroup from 'react-bootstrap/CardGroup'

const ItemList = ({clothes}) => {
    return(
        <>
        {clothes.map(clothes =>
            <div key={clothes.id}>
                <CardGroup>
                    <Item clothes={clothes} />
                </CardGroup>
            </div>
        )}

    </>
    )
}

export default ItemList