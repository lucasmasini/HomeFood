import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCounts/ItemCount';
import { useEffect,useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';

const ItemDetailContainer = () => {
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

