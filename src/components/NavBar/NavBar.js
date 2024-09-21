import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import '../../assets/styles/styles.css';
import { green, cyan,  } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Menus from '../Menu/Menus';


function Navbar() {
    
    const [value, setValue] = React.useState(0);
    const navegate = useNavigate();

    const handleProductclick1 = () => {
            navegate(`/`)
    }
    const handleProductclick2 = () => {
        navegate(`/calen`)
    }


    return (
        <AppBar sx={{ backgroundColor: '#9ed8ae' }} position="fixed" className="navbar">
            <Toolbar  >
                <Stack direction="row" spacing={2} sx={{}}>
                    <Menus/>
                    {/* <Avatar onClick={() => handleProductclick()} alt="Remy Sharp" id="logo" src="logo.jpg" sx={{ height:'50px', width:'50px'}}/> */}
                </Stack>
                {/* tengo que poner un boton icono algo asi */}
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingRight: '70%' }}>
                    Nudisa
                </Typography>
                <Box>
                    <Button color='inherit' onClick={() => handleProductclick1()}>Inicio sesion</Button>
                    <Button color='inherit' onClick={() => handleProductclick2()}>Registrarse</Button>
                    {/* <Button color='inherit' startIcon={<ShoppingCartIcon />}>Carrito</Button> */}
                </Box>
            </Toolbar>
            
        </AppBar>
        
    );
}

export default Navbar;
