import {addDoc, collection, serverTimestamp, updateDoc, doc} from 'firebase/firestore';
import { useContext,useEffect,useState } from 'react';
import { context } from '../../Context/CartContext.jsx';
import { db } from '../../firebase/firebase.jsx'
import BuyForm from './BuyForm.jsx';



const Cart = ()=>{
    const {cartItems,total} = useContext(context);

    const [formData, setformData] = useState({
        name:'',
        surname:'',
        email:''
    });

    // trayendo el ID de los productos comprados
    // const id = cartItems.map(result => result.id)
    // console.log(id)

    const [idSell,setIdSell] = useState('')
    const [IdItemSell,setIdItemSell] = useState('')
    
    const finishItemsBuy = ()=>{
        const ventaCollection = collection(db, "ventas")
            addDoc(ventaCollection,{
                formData,
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
            <BuyForm formData={formData} setformData={setformData} finishItemsBuy={finishItemsBuy}/>
        </>
    )
}


export default Cart;