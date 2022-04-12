import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useState,useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
    const [products,setProducts] = useState([]);
    const [loanding,setLoanding] = useState(true);   
    const [error,setError] = useState(false);
    const {name} = useParams();

    const getItem = async ()=>{
        try{
            const response = await fetch('https://mocki.io/v1/26013644-68fd-4f36-a1dc-5d7392e653b5');
            const data = await response.json();
            (name)? 
            (setProducts(data.filter(product => product.category === name))
            ):(
            setProducts(data));
        }
        catch{
            setError(true);
        }
        finally{
            setLoanding(false);
        }
    }



    useEffect(()=>{
        setTimeout(()=>{getItem()},1500);
    },[name])
    



    return (
        <>
            <div className='cardContainer' style={cardContainer}>
            {(loanding) ? 
                (<Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                ):( error ?
                    (<h1>Lo sentimos, no se pudo cargar los productos</h1>                     
                ):(
                    <ItemDetailContainer products={products}/>
                    )
                )
            }
            
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
    marginBottom: '300px',
};
