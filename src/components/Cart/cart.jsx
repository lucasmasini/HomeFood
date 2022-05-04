import {addDoc, collection, serverTimestamp, updateDoc, doc} from 'firebase/firestore';
import { useContext,useState } from 'react';
import { context } from '../../Context/CartContext.jsx';
import { db } from '../../firebase/firebase.jsx'
import BuyForm from './BuyForm.jsx';



const Cart = ()=>{
    const {cartItems,total} = useContext(context);

    // trayendo el ID de los productos comprados
    // const id = cartItems.map(result => result.id)
    // console.log(id)

    const [idSell,setIdSell] = useState('')
    const [IdItemSell,setIdItemSell] = useState('')
    
    const finishItemsBuy = (buyerData)=>{
        const ventaCollection = collection(db, "ventas")
            addDoc(ventaCollection,{
                buyerData,
                items: cartItems,
                date: serverTimestamp(),
                total
            })
            .then( result => {
                console.log(result.id);
                console.log(IdItemSell)
                }
            )
        };    
    // const orderDoc = doc(db,'ItemColection', cartItems.id)
    //     updateDoc(orderDoc, {stock: (cartItems.stock - cartItems.quantity)})
    return(
        <>
            <BuyForm finishItemsBuy={finishItemsBuy} cartItems={cartItems}/>
        </>
    )
}


export default Cart;