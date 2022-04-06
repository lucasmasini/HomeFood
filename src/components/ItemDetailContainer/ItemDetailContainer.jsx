import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCounts/ItemCount';
import { useEffect,useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const ItemDetailContainer = () => {
    const [products,setProducts] = useState([]);
    const [loanding,setLoanding] = useState(true);   
    const [error,setError] = useState(false);

    const getItem = async ()=>{
        try{
            const response = await fetch('https://mocki.io/v1/e7158b60-7446-4e2d-9b83-268102e8c1a4');
            const data = await response.json();
            setProducts(data);
        }
        catch{
            setError(true);
        }
        finally{
            setLoanding(false);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{getItem()},2000);
    },[])

    return (
        <>
            {(loanding) ? 
                (<Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                ):( error ?
                    (<h1>Lo sentimos, no se pudo cargar los productos</h1>                     
                ):(
                    products.map((product) => {
                    return (
                        <ItemDetail product={product}>
                            <ItemCount />
                        </ItemDetail>
                    )
                })))
            }
        </>
    )
}


export default ItemDetailContainer;

