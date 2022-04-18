import { context } from '../../components/Context/CartContext';
import { useContext, useEffect, useState } from 'react';
import ItemCart from './CartItems/ItemCart';
import ShoppingCartStyle from './ShoppingCartStyle.scss'
import { Button } from '@mui/material';

const ShoppingCart = () => {
    const { cartItems, clear } = useContext(context);

    const total = cartItems.reduce((previous,current)=> previous + current.quantity * current.item.price, 0);

    return (
        <>
            {cartItems && (
                <div className='ShoppingCartPage'>
                    <h2>Tu carrito</h2>
                    {cartItems.length === 0 ? (<p>Tu carrito esta vacio</p>)
                    :(
                        <>
                            <div className='CartItemsContainer'>
                                {cartItems.map((product,i)=>(                                
                                    <ItemCart key={i} product={product}/>))
                                }
                            </div>
                            <h2>Total: ${total}</h2>
                            <Button className='deleteButton' onClick={()=>clear()}>
                                Vaciar carrito
                            </Button>
                        </>
                    )}

                </div>
            )}

        </>
    )
}

export default ShoppingCart;


