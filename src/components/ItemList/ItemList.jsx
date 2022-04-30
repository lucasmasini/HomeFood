import Item from '../Item/Item'

const ItemList = ({productFromDb}) => {
    console.log(productFromDb)

    return (
        <>
            {
            productFromDb.map((product) => {
                return (                    
                        <Item key={product.id} product={{product}}/>)
            })
            }
        </>
    )
};

export default ItemList;