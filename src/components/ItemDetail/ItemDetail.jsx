import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './ItemDetail.scss';


const ItemList = ({productById})=>{
    return(
        <>
            <div className='cardDetailContainer'>
                <div className='cardDetail'>
                    <Card sx={{ 
                        maxWidth: 620, 
                        minWidth: 480, 
                        border: '1px solid grey',
                        boxShadow:'1px 3px 3px 1px rgba(66, 19, 6, 0.5)',
                        backgroundColor:'#fde6dec4'
                    }}>
                        <CardMedia
                            component="img"
                            src={productById.urlImage}
                            alt={productById.name}
                            sx={{ height: '60%' }}
                        /><div className='cardText'>
                            <CardContent sx={{ height: '95px' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {productById.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '4px' }}>
                                    Stock:{productById.stock}
                                </Typography>
                                <Typography variant="body" sx={{ paddingTop: '4px' }}>
                                    Precio:${productById.price}
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize:'16px', fontWeight:'500' ,paddingTop: '10px' }}>
                                    {productById.description}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
            <div className='backButtonContainer'>
                <Button className='backButton'>
                    <Link to={'/products'}>
                        Volver a los productos
                    </Link>
                </Button>
            </div>
        </>
    )
}


export default ItemList;