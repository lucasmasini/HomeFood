import { createContext, useState } from "react";

export const context = createContext();
const {Provider} = context;

const CartProvider = ({children})=>{
    
    const [selectProducts,SetselectProducts] = useState([]);
    
    const addItem = (item,quantity)=>{
        if(selectProducts){
            const duplicateProduct = [];
            const searchDuplicate = selectProducts.filter((product)=>product.item.id === item.id)
            duplicateProduct.push(searchDuplicate);
            duplicateProduct.quantity += quantity;
            SetselectProducts(duplicateProduct);
        } else {
            SetselectProducts({item: item, quantity: quantity})
        }
    };
    const removeItem = (id)=>{
        const removeProduct = selectProducts.filter((product)=>product.item.id!==id);
        SetselectProducts(removeProduct);     
    };

    const isInCart = (id)=>{
        if(selectProducts){
        const productMatch = selectProducts.find((product)=>product.item.id === id)
        productMatch ? (alert(`El producto ${productMatch.item.name}ya se encuentra en el carrito`)
        ):(
            (alert(`El producto seleccionado no esta en el carrito`))
        )} else {
            alert(`El producto seleccionado no esta en el carrito`)
        }
    };
    
    const clear = ()=>{
        SetselectProducts([])
    };
    const CartQuantity = ()=>{
        let index = 0;
        selectProducts.map((product)=>index+=product.quantity)
        return index;
    };


    return(
        <Provider 
        value={{addItem , removeItem , isInCart , clear, CartQuantity , selectProducts}}
        >
            {children}
        </Provider>
        )
}

export default CartProvider;