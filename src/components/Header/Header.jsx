import NavBar from './NavBar/Navbar';
import './Header.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const icon = ShoppingCartOutlinedIcon;
const pages = [{name:'Productos',route:'/products',id:1 },{name:'Nosotros',route:'nosotros',id:2}];
const options = ['Perfil', 'Cuenta', 'Panel', 'Cerrar sesion'];

const Header = () =>{
    return (
        <>
            <NavBar pages={pages} options={options} icon={icon}/>
        </>
    );
};

export default Header;


