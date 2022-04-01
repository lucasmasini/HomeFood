import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCounts/ItemCount';


const CardsProducts = ({name,urlImage,description,stock,price})=> {
    return (
        <>
        <div className='card' style={card}>
            <Card sx={{ maxWidth: 320,minWidth: 280, border:'1px solid grey'}}>
                <CardMedia
                    component="img"
                    src={urlImage}
                    alt={name}
                    sx={{height:'50%'}}
                /><div className='cardText'>
                    <CardContent sx={{height:'145px'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{paddingTop: '3px'}}>
                            Stock:{stock}
                        </Typography>
                        <Typography variant="body">
                            Precio:${price}
                        </Typography>
                    </CardContent>
                    <CardActions className='cardAction' style={cardAction}>
                        <ItemCount stock={stock} titleAdd='+' titleLess='-' initial={1} />
                    </CardActions>
                </div>
            </Card>
        </div>
        </>
    );
};

export default CardsProducts;


// ------ESTILOS--------

const card = {
    display:'flex',
    height:'446px',
    padding:'5px',
}
const cardAction = {
    display:'flex',
    height:'32px',
    justifyContent: 'space-between'
}
