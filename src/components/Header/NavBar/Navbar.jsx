import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import icono from '../../../assets/icono.png';
import './NavBar.scss';
import CartWidget from '../../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



const NavBar = ({pages,options}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar style={ContainerStyle} className="AppBar" position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavLink to="/">
                        <img src={icono} alt="icono de la pagina">
                        </img>
                    </NavLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <NavLink to={page.route} style={{ textDecoration: 'none', color: '#ff7c58' }}> 
                                        {page.name} 
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                        <div style={{margin:'auto', paddingRight: 25,paddingTop:6, display: 'block',}}>
                            <CartWidget/>
                        </div>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        HomeFood
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2,paddingLeft: 1.5, paddingRight: 1.5, display: 'block' }}
                            > 
                                <NavLink to={page.route}  style={{ textDecoration: 'none', color: 'white' }}>
                                    {page.name}
                                </NavLink>
                            </Button>
                        ))}
                        <Button onClick={handleCloseNavMenu} 
                        sx={{my: 2,paddingLeft: 1.5, paddingRight: 1.5, 
                            marginBottom:1, display: 'block',}}
                        >
                            <CartWidget/>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open options">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src="../../../assets/icono-persona.png"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {options.map((option) => (
                                <MenuItem style={UserMenuStyle} key={option} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;


// ESTILOS

let ContainerStyle = {
    backgroundImage: 'linear-gradient(to left, #f4af9d, #fc967a, #ff7c58)',
    borderBottom: "2px solid #fc967a"
};
let UserMenuStyle = {
    borderBottom: "1.5px dashed #fc967a"
}