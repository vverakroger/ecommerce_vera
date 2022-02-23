import React, {createContext, useState} from 'react';

export const CartContext = createContext ();

export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);

    const isInCart = (item) =>{
        var isIn = false;
        if(cart.some(el => el.id == item.id)){
            isIn = true;
        }
        return isIn;
    }

    const addItem = (item, quantity) => {
        if(isInCart(item)){
            let index = cart.findIndex(el => el.id == item.id);
            let clothes = cart[index];
            if ((clothes.quantity + quantity) <= clothes.stock){
                clothes.quantity = clothes.quantity + quantity;
            }else{
                console.log("Insufficient stock");
            }
            const newCart = [... cart];
            newCart.splice(index,1,clothes);
            setCart([... newCart])
        }else{

            let clothes = {... item, quantity}
            setCart([... cart, clothes])
        }
    }

    const removeItem = (item) => {
        if(isInCart(item)){
            let index = cart.findIndex(el => el.id == item.id);
            const newCart = [... cart];
            newCart.splice(index,1);
            setCart([... newCart])
        }else{
            console.log("Item not in cart");
        }
    }

    const clear = () => {
        setCart([]);
    }

    const finalAmount = () => {
        var finalAmount = 0;
        for (let i = 0; i < cart.length; i++) {
            finalAmount = finalAmount + cart[i].price;
        }
        return finalAmount;
    }

    console.log(cart);

    return( 
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear, finalAmount}}>
            {children}
        </CartContext.Provider>
    );
}