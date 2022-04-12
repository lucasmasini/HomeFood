import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCounts/ItemCount';



const ItemDetail = ({product})=> {
    const AddQuantity = (stock,stockButton,setstockButton) => {
        if(stockButton < stock){
            setstockButton(stockButton + 1);
        }
    };
    const LessQuantity= (stockButton,setstockButton) =>{
        if(stockButton> 0){
            setstockButton(stockButton - 1);
        }
    };
    const finishBuy = (stockButton,stock) =>{
        if(stock > 0 && stockButton > 0 ){
            alert(`Se agregaron ${stockButton} productos al carrito`)
        }
    }
    return (
        <>
        <div className='card' style={card}>
            <Card sx={{ maxWidth: 320,minWidth: 280, border:'1px solid grey'}}>
                <CardMedia
                    component="img"
                    src={product.urlImage}
                    alt={product.name}
                    sx={{height:'50%'}}
                /><div className='cardText'>
                    <CardContent sx={{height:'145px'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{paddingTop: '3px'}}>
                            Stock:{product.stock}
                        </Typography>
                        <Typography variant="body">
                            Precio:${product.price}
                        </Typography>
                    </CardContent>
                    <CardActions className='cardAction' style={cardAction}>
                        <ItemCount 
                        stock={product.stock} titleAdd='+' titleLess='-' initial={1} 
                        AddQuantity={AddQuantity} LessQuantity={LessQuantity} finishBuy={finishBuy}
                        />
                    </CardActions>
                </div>
            </Card>
        </div>
        </>
    );
};

export default ItemDetail;


// ------ESTILOS--------

const card = {
    display:'flex',
    height:'446px',
    witdh:'320px',
    padding:'5px',
}
const cardAction = {
    display:'flex',
    height:'32px',
    justifyContent: 'space-between'
}
