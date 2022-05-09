import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCounts/ItemCount';
import { context } from '../../Context/CartContext';
import { useContext, useState} from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const item = {...product.product}
    const { addItems } = useContext(context);
    const [isAddOnCart, SetIsaddOnCart] = useState(false)

    const handleItemCount = () => {
        SetIsaddOnCart(!isAddOnCart)
    }

    const AddQuantity = (stock, stockButton, setstockButton) => {
        if (stockButton < stock) {
            setstockButton(stockButton + 1);
        }
    };
    const LessQuantity = (stockButton, setstockButton) => {
        if (stockButton > 0) {
            setstockButton(stockButton - 1);
        }
    };
    const finishBuy = (stockButton, stock) => {
        if (stock > 0 && stockButton > 0) {
            addItems(item, stockButton);
        }
    }

    const ruta = '/cart';

    return (
        <>
            <div className='card' style={card}>
                <Card sx={{ 
                        maxWidth: 320, 
                        minWidth: 320, 
                        border: '1px solid grey',
                        boxShadow:'1px 3px 3px 1px rgba(66, 19, 6, 0.5)',
                        backgroundColor:'#fde6dec4'
                }}>
                    <CardMedia
                        component="img"
                        src={item.urlImage}
                        alt={item.name}
                        sx={{ height: '50%' }}
                    /><div className='cardText'>
                        <CardContent sx={{ height: '125px' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '4px' }}>
                                Stock:{item.stock}
                            </Typography>
                            <Typography variant="body" sx={{ paddingTop: '4px' }}>
                                Precio:${item.price}
                            </Typography>
                            <Typography>
                                <Link to={`/products/${item.id}`} style={{textDecoration:'none', color: '#ac2500'}}>
                                    Ver mas detalles
                                </Link>
                            </Typography>
                        </CardContent>
                        <CardActions className='cardAction' style={cardAction}>
                            {(isAddOnCart) ? (
                                <Button style={finishButton}>
                                    <Link to={ruta} style={{ textDecoration: 'none', color: 'white' }}>
                                        Ir al carrito
                                    </Link>
                                </Button>
                            ) : (
                                <ItemCount
                                    stock={item.stock} titleAdd='+' titleLess='-' initial={0}
                                    LessQuantity={LessQuantity} AddQuantity={AddQuantity} finishBuy={finishBuy}
                                    handleItemCount={handleItemCount}
                                />)
                            }
                        </CardActions>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Item;


// ------ESTILOS--------

const card = {
    display: 'flex',
    height: '416px',
    width: '320px',
    padding: '5px'
}
const cardAction = {
    display: 'flex',
    height: '30px',
    justifyContent: 'space-between'
}
const finishButton ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 14,
    padding: 5,
    marginLeft:'5px',
    marginBottom: '20px',
}