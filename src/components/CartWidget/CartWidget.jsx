import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useContext, useState, useEffect } from 'react';
import { context } from '../../Context/CartContext';



const CartWidget = () => {
    const {cartItems} = useContext(context);
    const [cartProductsLength,SetCartProductsLenght] = useState(0);

    useEffect(()=>{
        SetCartProductsLenght(
            cartItems.reduce((previous,current)=> previous + current.quantity, 0)
        )
    },[cartItems])

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <>
        <NavLink to='/cart'>
            <IconButton aria-label="cart" style={{ color: 'white',padding:'0px'}}>
                <StyledBadge badgeContent={cartProductsLength} color='warning'>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </NavLink>
        </>
    );
}


export default CartWidget;
