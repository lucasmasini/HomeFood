import NavBar from './NavBar/Navbar';
import './Header.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const icon = ShoppingCartOutlinedIcon;
const pages = [
    {name:'Productos',route:'/products',id:'P1' },
    {name:'Comida Rapida', route:'/categories/fastfood',id:"R1"},
    {name:'Gourmet',route:'/categories/gourmet',id:"G1"}
];
const options = ['Perfil', 'Cuenta', 'Panel', 'Cerrar sesion'];

const Header = () =>{
    return (
        <>
            <NavBar pages={pages} options={options} icon={icon}/>
        </>
    );
};

export default Header;


