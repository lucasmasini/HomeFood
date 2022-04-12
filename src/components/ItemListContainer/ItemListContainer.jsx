import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const ItemListContainer = () => {
    return (
        <>
            <div className='cardContainer' style={cardContainer}>
                <ItemDetailContainer />
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
