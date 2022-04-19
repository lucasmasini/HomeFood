import { Button } from '@mui/material';
import { useContext } from 'react';
import { context } from '../../../components/Context/CartContext';
import './ItemCartStyle.scss'

const ItemCart = ({product})=>{
    const {removeOneItem, deleteItem, addOneItem} = useContext(context);

    return(
        <>
        <div className='CartBackground'>
            <div className="CartList">
                <ul>
                    <li><img src={product.item.urlImage} alt={product.item.name}/></li>
                    <li>{product.item.name}</li>                    
                    <Button className='CartButton' onClick={()=>addOneItem(product.item)}>
                        +
                    </Button>
                    <li>{product.quantity}</li>
                    <Button className='CartButton' onClick={()=>removeOneItem(product.item, product.quantity)}>
                        -
                    </Button>
                    <li>$ {(product.item.price * product.quantity)}</li>
                    <Button className='DeleteCartButton' onClick={()=>deleteItem(product.item.id)}>
                        x
                    </Button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ItemCart;