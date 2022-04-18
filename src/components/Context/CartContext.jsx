import { createContext, useEffect, useState } from "react";

export const context = createContext();
const {Provider} = context;

const CartProvider = ({children})=>{
    
    // Se declara el state de los productos del carrito y se guardan en localStorage cuando se van agregando
    const [cartItems,SetcartItems] = useState(()=>{
        try{
            const productsInLocalStorage = localStorage.getItem('cartProducts');
            return productsInLocalStorage? JSON.parse(productsInLocalStorage) : [];
        }
        catch (error) {
            return [];
        }
    })

    // Se gurdan los nuevos productos en el localStorage y se vuelven string los mismos
    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        console.log(cartItems);
    },[cartItems])
    
    // funcion por la cual se agraga un producto al carrito, con su cantidad seleccionada. No se puede superar el stock
    const addItem = async (item,quantity)=>{
        const newCartProduct = {
            item: item, 
            quantity: quantity
        }
        const inCart = cartItems.find((productInCart)=> productInCart.item.id === item.id);
        if(inCart){
            SetcartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.item.id === item.id && inCart.quantity < item.stock){
                        return {...inCart, quantity: inCart.quantity + 1}
                    } else {
                        return productInCart;
                    }
                }
                )
            )
        } else {
            SetcartItems([...cartItems,newCartProduct])
        }
    };
    // funcion por la cual se elimina un producto del carrito, por medio de su ID
    const removeItem = (item,quantity)=>{
        const inCart = cartItems.find((productInCart)=> productInCart.item.id === item.id);
        if(inCart.quantity === 1 ){
            SetcartItems(
                cartItems.filter((productInCart)=>productInCart.item.id !== item.id)
            );
        } else {
            SetcartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.item.id === item.id){
                        return {...inCart, quantity: inCart.quantity - 1}
                    } else {
                        return productInCart;
                    }
                })
            ); 
        }
    };
    // funcion con la cual se consulta si el producto seleccionado ya esta agregado al carrito
    const isInCart = (id)=>{
        if(cartItems){
        const productMatch = cartItems.find((product)=>product.item.id === id)
        productMatch ? (alert(`El producto ${productMatch.item.name} ya se encuentra en el carrito`)
        ):(
            (alert(`El producto seleccionado no esta en el carrito`))
        )} else {
            alert(`El producto seleccionado no esta en el carrito`)
        }
    };
    // funcion con la cual se borran todos los elementos del carrito
    const clear = ()=>{
        SetcartItems([])
    };

    return(
        <Provider value={{addItem , removeItem , isInCart , clear, cartItems}}>
            {children}
        </Provider>
        )
}

export default CartProvider;