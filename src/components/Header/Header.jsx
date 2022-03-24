import NavBar from './NavBar/Navbar';
import './Header.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const icon = ShoppingCartOutlinedIcon;
const pages = ['Productos', 'Nosotros'];
const options = ['Perfil', 'Cuenta', 'Panel', 'Cerrar sesion'];

const Header = () =>{
    return (
        <>
            <NavBar pages={pages} options={options} icon={icon}/>
        </>
    );
};

export default Header;


