import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase.jsx';
import { getDocs, collection, query, where,orderBy } from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.scss';

const ItemListContainer = () => {
    const [show,setShow] = useState(false);
    const [productFromDb, setProductFromDb] = useState([]);
    const { name } = useParams();

    /* Query aplicando filtros que se quieram
    const gourmetQuery = query(productsCollection, where('category','===','gourmet'));
    const fastfoodQuery = query(productsCollection, where('category','===','fastfood'));
    */
    useEffect(() => {
        const productsCollection = collection(db, "ItemColection")
        let productsQuery;
        if(name === undefined){
            productsQuery = query(productsCollection, orderBy('name'))
        } else {
            productsQuery = query(productsCollection, where('category','==',name))
        }
        getDocs(productsQuery)
            .then((result) => {
                const docs = result.docs;
                setProductFromDb(docs.map(products => {
                    const id = products.id;
                    const product = {
                        id,
                        ...products.data()
                    }
                    return product
                }))
                setShow(true)
            })
        },[name])
    return (
        <>
            <div className='cardContainer'>
                { show?
                    (
                    <ItemList productFromDb={productFromDb} />
                    ) : (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                    )
                }
            </div>
        </>
    );
};

export default ItemListContainer;


