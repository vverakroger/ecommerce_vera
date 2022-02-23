import React, {createContext, useState} from 'react';

export const CartContext = createContext ();

export const CartProvider = ({children}) => {

    const[clothes, setClothes] = useState( 
        { id: 1, name: "ItemName", desc: "Description", stock: 5, amount: 3}
    );

    return( 
        <CartContext.Provider value={{clothes}}>
            {children}
        </CartContext.Provider>
    );
}