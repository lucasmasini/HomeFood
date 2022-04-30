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
    },[cartItems])
    
    // funcion por la cual se agraga un producto al carrito, con su cantidad seleccionada. No se puede superar el stock
    const addItems = (item,quantity)=>{
        const newCartProduct = {
            ...item, 
            quantity
        }
        if(isInCart(item.id)){
            const inCart = cartItems.find((productInCart)=> productInCart.id === item.id);
            SetcartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.item.id === item.id && inCart.quantity < item.stock){
                        return {...inCart, quantity: inCart.quantity + quantity}
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
    // funcion que elimina un producto entero del carrito segun su ID
    const deleteItem = (id) =>{
        if(isInCart(id)){
            SetcartItems(
                cartItems.filter((productInCart)=>productInCart.id !== id)
            )
        }
    }
    // funcion por la cual se disminuye en 1 la cantidad de un producto, segun su ID
    const removeOneItem = (item,quantity)=>{
        const inCart = cartItems.find((productInCart)=> productInCart.id === item.id);
        if(inCart.quantity === 1 ){
            SetcartItems(
                cartItems.filter((productInCart)=>productInCart.id !== item.id)
            );
        } else {
            SetcartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === item.id){
                        return {...inCart, quantity: inCart.quantity - 1}
                    } else {
                        return productInCart;
                    }
                })
            ); 
        }
    };
    //funcion por la cual se agrega de a 1 la cantidad de productos en el carrito, segun su ID
    const addOneItem = (item)=>{
        if(isInCart(item.id)){
            const inCart = cartItems.find((productInCart)=> productInCart.id === item.id);
            SetcartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === item.id && inCart.quantity < item.stock){
                        return {...inCart, quantity: inCart.quantity + 1}
                    } else {
                        return productInCart;
                    }
                }
                )
            )
        }
    };
    // funcion con la cual se consulta si el producto seleccionado ya esta agregado al carrito. Devuelve true or faslse
    const isInCart = (id)=>{
        const inCart = cartItems.find((productInCart)=> productInCart.id === id);
        if(inCart){
            return true 
        } else {
            return false
        }
    };
    // funcion con la cual se borran todos los elementos del carrito
    const clear = ()=>{
        SetcartItems([])
    };

    const values = {
        addItems,
        deleteItem,
        removeOneItem,
        addOneItem,
        isInCart,
        clear,
        cartItems
    }
    return(
        <Provider value={values}>
            {children}
        </Provider>
        )
}

export default CartProvider;