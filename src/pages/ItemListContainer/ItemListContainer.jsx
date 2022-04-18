import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { padding } from '@mui/system';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loanding, setLoanding] = useState(true);
    const [error, setError] = useState(false);
    const { name } = useParams();

    const getItem = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/26013644-68fd-4f36-a1dc-5d7392e653b5');
            const data = await response.json();
            (name) ?
                (setProducts(data.filter(product => product.category === name))
                ) : (
                    setProducts(data));
        }
        catch {
            setError(true);
        }
        finally {
            setLoanding(false);
        }
    }

    useEffect(() => {
        setTimeout(() => { getItem() }, 1500);
    }, [name])

    const ruta = '/cart';
    return (
        <>
            <div className='cardContainer' style={cardContainer}>
                {(loanding) ?
                    (<Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                    ) : (error ?
                        (<h1>Lo sentimos, no se pudo cargar los productos</h1>
                        ) : (
                            <ItemDetailContainer products={products} />
                        )
                    )
                }
            </div>
            <div style={finishButtonContainer}>
                <Button style={finishButton}> 
                    <Link to={ruta} style={{ textDecoration: 'none', color: 'white' }}>
                        Finalizar compra
                    </Link>
                </Button>
            </div>

        </>
    );
};

export default ItemListContainer;




// ------ESTILOS--------

const cardContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 320px)',
    gridTemplateRows: '420px',
    justifyItems: 'center',
    alingItems: 'center',
    padding: '2em 0 0 1.2em',
    rowGap: '2.5em',
    columnGap: '.5em',
    
};

const finishButtonContainer = {
    display: 'flex',
    justifyContent : 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 20
}

const finishButton ={
    backgroundColor: '#c94c2a',
    border: '0.1px solid black',
    color:'white',
    height:'100%',
    fontSize: 14,
    padding: 5,
    marginBottom: '50px',
}