import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import { useContext} from 'react';
import { context } from '../../Context/CartContext.jsx';
import { db } from '../../firebase/firebase.jsx'
import BuyForm from './BuyForm/BuyForm.jsx';
import Swal from "sweetalert2";



const Cart = ()=>{
    const {cartItems,total} = useContext(context);

    let idSell;     
    const finishItemsBuy = (buyerData)=>{
        const ventaCollection = collection(db, "ventas")
            addDoc(ventaCollection,{
                buyerData,
                items: cartItems,
                date: serverTimestamp(),
                total
            })
            .then( result => {
                idSell = result.id;
                console.log(result.id);
                console.log(idSell);
                }
            )
        };   
        const BuyAlert = ()=>{
            const idSellNumber = new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        idSell
                    })
                }, 2100)
            })
            Swal.fire({
                title: 'Compra realizada',
                confirmButtonText: '<a href="/products" style="text-decoration: none; color: white">Aceptar</a>',
                confirmButtonColor: "#c94c2a",
                text: 'Codigo de compra: ',
                input:'radio',
                inputOptions: idSellNumber,
                timer: 6000,
                backdrop: 'rgba(255, 173, 83, 0.39)'
            })
        };

    return(
        <>
            <BuyForm finishItemsBuy={finishItemsBuy} cartItems={cartItems} BuyAlert={BuyAlert}/>
        </>
    )
}


export default Cart;