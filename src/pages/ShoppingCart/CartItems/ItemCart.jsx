import { Button } from '@mui/material';
import { useContext } from 'react';
import { context } from '../../../components/Context/CartContext';
import ItemCartStyle from './ItemCartStyle.scss'

const ItemCart = ({product})=>{
    const {removeItem, addItem} = useContext(context);

    return(
        <>
        <div className='CartBackground'>
            <div className="CartList">
                <ul>
                    <li><img src={product.item.urlImage} alt={product.item.name}/></li>
                    <li>{product.item.name}</li>                    
                    <Button className='CartButton' onClick={()=>addItem(product.item, product.quantity)}>
                        +
                    </Button>
                    <li>{product.quantity}</li>
                    <Button className='CartButton' onClick={()=>removeItem(product.item, product.quantity)}>
                        -
                    </Button>
                    <li>$ {(product.item.price * product.quantity)}</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ItemCart;