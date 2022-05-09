import {useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.scss';

const ItemCount = ({stock,titleAdd,titleLess,initial,AddQuantity,LessQuantity,finishBuy,handleItemCount}) => {
    if(stock === 0){initial = 0;};
    const [stockButton,setstockButton] = useState(initial);
    const handlerAdd = () => {
        AddQuantity(stock,stockButton,setstockButton);
    };
    const handlerLess= () =>{
            LessQuantity(stockButton,setstockButton);
    };
    const onAdd = () =>{
        finishBuy(stockButton,stock);
        handleItemCount();
    }

    return(
        <>
            <Button className='buttonHandler' onClick={handlerAdd}>{titleAdd}</Button>
            <Typography>{stockButton}</Typography>
            <Button className='buttonHandler' onClick={handlerLess}>{titleLess}</Button>
            <Button className='buttonAdd' onClick={onAdd} on>
                <AddShoppingCartIcon/>
            </Button>
        </>
    );
}

export default ItemCount;
