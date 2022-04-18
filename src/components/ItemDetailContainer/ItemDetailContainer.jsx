import ItemDetail from '../ItemDetail/ItemDetail';
import ItemExpanded from '../ItemDetail/itemExpanded';


const ItemDetailContainer = ({products}) => {
    const ruta = '/cart';
    return (
        <>
            {
            products.map((product) => {
                return (
                <ItemDetail key={product.id} product={product}>
                    <ItemExpanded product={product}/>
                </ItemDetail>)
            })
            }
        </>
    )
};

export default ItemDetailContainer;

