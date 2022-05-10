import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import icono from '../../../assets/icono.png';
import './NavBar.scss';
import CartWidget from '../../CartWidget/CartWidget';
import { NavLink, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const NavBar = ({ pages, options }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [searchData,setSearchData] = useState({
        search:''
    });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleSeachInput = (event)=>{
        setSearchData({
            ...searchData,
            [event.target.value]:event.target.value
        });
        console.log(event.target.value);
    }

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'secondary',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.4),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.5),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

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
                        <div style={{ margin: 'auto', paddingRight: 25, paddingTop: 6, display: 'block', }}>
                            <CartWidget />
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
                                sx={{ my: 2, paddingLeft: 1.5, paddingRight: 1.5, display: 'block' }}
                            >
                                <NavLink to={page.route} style={{ textDecoration: 'none', color: 'white' }}>
                                    {page.name}
                                </NavLink>
                            </Button>
                        ))}
                        <Button onClick={handleCloseNavMenu}
                            sx={{
                                my: 2, paddingLeft: 1.5, paddingRight: 1.5,
                                marginBottom: 1, display: 'block',
                            }}
                        >
                            <CartWidget />
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Buscar.."
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleSeachInput}
                                name={'search'}
                            />
                        </Search>
                        <Menu
                            sx={{ mt: '45px' }}
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