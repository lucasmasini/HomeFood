import Cards from '../CardsProducts/Cards';
import ButtonCount from '../ItemCounts/ItemCount'
import { useEffect,useState } from 'react';

const productList = [
    { name: 'Paella', urlImage: 'https://images.aws.nestle.recipes/original/bad4d3b51ce0e061b4ed00574e00ed03__0015_16_-__Paella.jpg', description: 'Plato tipico español. Se trata de una base de mariscos con arroz y verduras', stock: 4, id: 'F1', price: 1200 },
    { name: 'Milanesa', urlImage: 'https://static3.diariovasco.com/www/multimedia/202107/16/media/cortadas/MILANESA-R7jYwhgmCWZSZc1g1kG5qzM-624x385@Diario%20Vasco.jpg', description: 'Plato tipico argentino. Puede ser de pollo o carne y se acompaña con papas fritas', stock: 8, id: 'F2', price: 900 },
    { name: 'Sushi', urlImage: 'https://static2.abc.es/media/bienestar/2021/06/18/sushi-casero-1-kQKB--1200x630@abc.jpeg', description: 'Plato tipico de la cultura oriental. Se trata de rolls de arroz y pescado', stock: 0, id: 'F3', price: 1500 },
    { name: 'Hamburguesa', urlImage: 'https://www.saborusa.com/wp-content/uploads/2019/10/Rompe-la-rutina-con-una-suculenta-hamburguesa-con-queso-Foto-destacada.png', description: 'Plato tipico estadounidense. Se trata de un sanguche de carne con varios toppings a eleccion', stock: 3, id: 'F4', price: 1000 },
    { name: 'Ravioles', urlImage: 'https://placeralplato.com/files/2015/05/ravioles.jpg', description: 'Plato tipico de italia. Se trata de pasta rellena, acompañanda de una salsa a eleccion', stock: 7, id: 'F5', price: 700 },
    { name: 'Pizza', urlImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-pizza-on-table-royalty-free-image-995467932-1559051477.jpg', description: 'Plato tipico de italia. Se trata de una maza decorada con tomate y queso por encima', stock: 6, id: 'F6', price: 1100 }
];

const productsPromise = new Promise((res,rej) =>{
    res(productList);
    rej('No se pudieron leer los productos');
});

const ItemListContainer = () => {

    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        setTimeout(()=>{
            productsPromise.then((e)=>{
                setProducts(e);
            })
            .catch((error) => {
                console.log(error);
            })}
            , 2000)
    

    }, [])
    

    return (
        <>
            <div className='cardContainer' style={cardContainer}>
                {products.map((product) =>{
                    return(
                    <Cards key={product.id} name={product.name} urlImage={product.urlImage} description={product.description} stock={product.stock} price={product.price}>
                        <ButtonCount/>
                    </Cards>
                    
                    )
                })}
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
    marginBottom: '300px'
};
