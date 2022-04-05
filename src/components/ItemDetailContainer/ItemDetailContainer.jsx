import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCounts/ItemCount';
import { useEffect,useState } from 'react';


const ItemDetailContainer = ({}) => {
    const [products,setProducts] = useState([]);
    
    const getItem = useEffect(() => {
        setTimeout(()=>{
            fetch('https://mocki.io/v1/e7158b60-7446-4e2d-9b83-268102e8c1a4')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.log(error))
        },2000)},[]);

    return (
        <>
            {products.map((product) => {
                return (
                    <ItemDetail key={product.id} name={product.name} urlImage={product.urlImage} description={product.description} stock={product.stock} price={product.price}>
                        <ItemCount />
                    </ItemDetail>

                )
            })}
        </>
    )
}


export default ItemDetailContainer;