import { Button } from '@mui/material';
import { useContext } from 'react';
import { context } from '../../../Context/CartContext';
import './ItemCartStyle.scss'

const ItemCart = ({product})=>{
    const {removeOneItem, deleteItem, addOneItem} = useContext(context);

    return(
        <>
        <div className='CartBackground'>
            <div className="CartList">
                <ul>
                    <li><img src={product.urlImage} alt={product.name}/></li>
                    <li>{product.name}</li>                    
                    <Button className='CartButton' onClick={()=>addOneItem(product)}>
                        +
                    </Button>
                    <li>{product.quantity}</li>
                    <Button className='CartButton' onClick={()=>removeOneItem(product, product.quantity)}>
                        -
                    </Button>
                    <li>$ {(product.price * product.quantity)}</li>
                    <Button className='DeleteCartButton' onClick={()=>deleteItem(product.id)}>
                        x
                    </Button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ItemCart;