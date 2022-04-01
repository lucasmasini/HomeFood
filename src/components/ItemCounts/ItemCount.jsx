import {useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCount = ({stock,titleAdd,titleLess,initial}) => {
    if(stock === 0){initial = 0;};
    const [stockButton,setstockButton] = useState(initial);
    const handlerAdd = () => {
        if(stockButton < stock){
            setstockButton(stockButton + 1);
        }
    };
    const handlerLess= () =>{
        if(stockButton> 0){
            setstockButton(stockButton - 1);
        }
    };
    const onAdd = () =>{
        if(stock > 0 && stockButton > 0 ){
            alert(`Se agregaron ${stockButton} productos al carrito`);
        }
    }

    return(
        <>
            <Button style={buttonHandler} onClick={handlerLess}>{titleLess}</Button>
            <Typography>{stockButton}</Typography>
            <Button style={buttonHandler} onClick={handlerAdd}>{titleAdd}</Button>
            <Button style={buttonAdd} onClick={onAdd}>Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;


const buttonHandler ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 20,
    padding:0
}
const buttonAdd ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 9,
    padding: 5
}