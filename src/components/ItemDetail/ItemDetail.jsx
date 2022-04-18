import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCounts/ItemCount';
import ItemExpanded from './itemExpanded';
import { context } from '../Context/CartContext';
import { useContext } from 'react';
import { Button } from '@mui/material';

const ItemDetail = ({product})=> {

    const {addItem , isInCart } = useContext(context);

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
            addItem(product,stockButton);
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
                        {/* Es la descripcion del producto, para que se vea en la card o no */}
                        {/* <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography> */} 
                        <Typography variant="body1" color="text.secondary" sx={{paddingTop: '4px'}}>
                            Stock:{product.stock}
                        </Typography>
                        <Typography variant="body" sx={{paddingTop: '4px'}}>
                            Precio:${product.price}
                        </Typography>
                        <Typography>
                            <ItemExpanded product={product}/>
                        </Typography>
                        <Typography>
                            <Button style={{padding:'1px',paddingTop:'2px'}} onClick={()=>isInCart(product.id)}>
                                Esta en carrito?
                            </Button>
                        </Typography>
                    </CardContent>
                    <CardActions className='cardAction' style={cardAction}>
                        <ItemCount 
                        stock={product.stock} titleAdd='+' titleLess='-' initial={0} 
                        LessQuantity={LessQuantity} AddQuantity={AddQuantity}  finishBuy={finishBuy}
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
