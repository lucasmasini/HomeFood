import ItemDetail from '../ItemDetail/ItemDetail';
import ItemExpanded from '../ItemDetail/itemExpanded';

const ItemDetailContainer = ({products}) => {
    return (
        <>
            {
            products.map((product) => {
                return (
                <ItemDetail product={product}>
                    <ItemExpanded product={product}/>
                </ItemDetail>)
            })
            }
        </>
    )
};

export default ItemDetailContainer;

