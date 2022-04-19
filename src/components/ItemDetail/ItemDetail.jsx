import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCounts/ItemCount';
import ItemExpanded from './itemExpanded';
import { context } from '../Context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {

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
            addItems(product, stockButton);
        }
    }

    const ruta = '/cart';

    return (
        <>
            <div className='card' style={card}>
                <Card sx={{ maxWidth: 320, minWidth: 280, border: '1px solid grey' }}>
                    <CardMedia
                        component="img"
                        src={product.urlImage}
                        alt={product.name}
                        sx={{ height: '50%' }}
                    /><div className='cardText'>
                        <CardContent sx={{ height: '125px' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '4px' }}>
                                Stock:{product.stock}
                            </Typography>
                            <Typography variant="body" sx={{ paddingTop: '4px' }}>
                                Precio:${product.price}
                            </Typography>
                            <Typography>
                                <ItemExpanded product={product} />
                            </Typography>
                        </CardContent>
                        <CardActions className='cardAction' style={cardAction}>
                            {(isAddOnCart) ? (
                                <Button style={finishButton}>
                                    <Link to={ruta} style={{ textDecoration: 'none', color: 'white' }}>
                                        Finalizar compra
                                    </Link>
                                </Button>
                            ) : (
                                <ItemCount
                                    stock={product.stock} titleAdd='+' titleLess='-' initial={0}
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

export default ItemDetail;


// ------ESTILOS--------

const card = {
    display: 'flex',
    height: '416px',
    witdh: '320px',
    padding: '5px',
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