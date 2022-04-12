import { Modal } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ItemExpanded = ({ product }) => {
    const [open, setOpen] = useState(false)
    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false)
    }
    return (
        <>
            <Button onClick={() => { setOpen(true) }} style={{ padding: 0, paddingTop: 6 }}>
                    Ver mas detalles
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
                style={{width:'100%', height:'100vh',display: 'flex',justifyContent:'center',alignItems:'center'}}
            >
                <div style={modalStyle}>
                    <span>
                        <Card sx={{ maxWidth: 500, minWidth: 280, border: '1px solid grey' }}>
                            <CardMedia
                                component="img"
                                src={product.urlImage}
                                alt={product.name}
                                sx={{ height: '50%' }}
                            /><div className='cardText'>
                                <CardContent sx={{ height: '145px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '4px' }}>
                                        Stock:{product.stock}
                                    </Typography>
                                    <Typography variant="body" sx={{ paddingTop: '4px' }}>
                                        Precio:${product.price}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </span>
                </div>
            </Modal>
        </>
    )
}

export default ItemExpanded;


const modalStyle = {
    width:'500px',
    height:'600px',
}