import { context } from '../../Context/CartContext';
import { useContext, useState } from 'react';
import ItemCart from './CartItems/ItemCart';
import './ShoppingCartStyle.scss'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Cart from '../../components/Cart/cart';


const ShoppingCart = () => {
    const { cartItems, clear, total} = useContext(context);

    return (
        <>
            {cartItems && (
                <div className='ShoppingCartPage'>
                    <h2>Tu carrito</h2>
                    {cartItems.length === 0 ? (
                        <>
                            <p>Tu carrito esta vacio</p>
                            <Button className='BackToProductsButton'>
                                <Link to='/products'>  
                                    Volver a los productos
                                </Link>
                            </Button>
                        </>
                    )
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
                            <div>
                                <Cart/>
                            </div>
                        </>
                    )}

                </div>
            )}

        </>
    )
}

export default ShoppingCart;


