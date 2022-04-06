import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const CartWidget = ()=>{
    return(
        <NavLink to='/cart' style={{color: 'white'}}>
            <ShoppingCartIcon/>
        </NavLink>
    );
};

export default CartWidget;
