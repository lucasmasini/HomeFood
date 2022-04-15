import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { context } from '../Context/CartContext';



const CartWidget = () => {
    const {CartQuantity} = useContext(context);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    let button;
    if(CartQuantity > 0 ){
        button = <StyledBadge badgeContent={CartQuantity} color='info'>
                            <ShoppingCartIcon />
                        </StyledBadge>
    } else {
        button = <ShoppingCartIcon />
    }
    return (
        <NavLink to='/cart'>
            <IconButton aria-label="cart" style={{ color: 'white',padding:'0px'}}>
                {button}
            </IconButton>
        </NavLink>
    );
}


export default CartWidget;
