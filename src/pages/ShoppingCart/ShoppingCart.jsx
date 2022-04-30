import { context } from '../../Context/CartContext';
import { useContext } from 'react';
import ItemCart from './CartItems/ItemCart';
import './ShoppingCartStyle.scss'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const { cartItems, clear } = useContext(context);

    const total = cartItems.reduce((previous,current)=> previous + current.quantity * current.price, 0);

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
                        </>
                    )}

                </div>
            )}

        </>
    )
}

export default ShoppingCart;


