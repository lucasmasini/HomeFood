import {useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ButtonCount = ({stock,titleAdd,titleLess,initial}) => {
    if(stock === 0){initial = 0;};
    const [stockButton,setstockButton] = useState(initial);
    const onAdd = () => {
        if(stockButton < stock){
            setstockButton(stockButton + 1);
        }
    };
    const onLess= () =>{
        if(stockButton> 0){
            setstockButton(stockButton - 1);
        }
    };
    console.log(stock)

    return(
        <>
            <Button style={button} onClick={onLess}>{titleLess}</Button>
            <Typography>{stockButton}</Typography>
            <Button style={button} onClick={onAdd}>{titleAdd}</Button>
        </>
    );
}

export default ButtonCount;


const button ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 20,
    padding:0
}