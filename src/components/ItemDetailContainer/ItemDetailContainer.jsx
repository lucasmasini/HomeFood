import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.jsx'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const ItemDetailContainer = () => {
    const [productById, setproductById] = useState([]);
    const [loading, setLoading] = useState(true);


    const { categoryId } = useParams();


    useEffect(() => {
        const productsCollection = collection(db, "ItemColection");
        const refDoc = doc(productsCollection, categoryId);
        getDoc(refDoc)
            .then((result) => {
                setproductById(result.data());
                setLoading(!loading);
            })
    }, [categoryId]);


    return (
        <>
            {loading ?
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                :
                <ItemDetail productById={productById} />
            }
        </>
    )
};

export default ItemDetailContainer;


