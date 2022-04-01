import CardsProducts from '../CardsProducts/CardsProducts';
import ItemCount from '../ItemCounts/ItemCount';
import { useEffect,useState } from 'react';


const ItemListCards = ({productList}) => {
    const productsPromise = new Promise((res,rej) =>{
        res(productList);
        rej('No se pudieron leer los productos');
    });
    
    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        setTimeout(()=>{
            productsPromise.then((e)=>{
                setProducts(e);
            })
            .catch((error) => {
                console.log(error);
            })}
            , 5000)},[])

    return (
        <>
            {products.map((product) => {
                return (
                    <CardsProducts key={product.id} name={product.name} urlImage={product.urlImage} description={product.description} stock={product.stock} price={product.price}>
                        <ItemCount />
                    </CardsProducts>

                )
            })}
        </>
    )
}


export default ItemListCards;