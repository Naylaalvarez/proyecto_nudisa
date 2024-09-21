import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    
    
  }));


function Comida() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//   const MenuItem: ExtendButtonBase<MenuItemTypeMap>{},

// const pregu = document.getElementsByClassName('.pregu');
// const infoPreg = document.getElementsByClassName('.info_preg');
// // const preguDesplega= document.querySelector ('pregunta_deslisable');



//     pregu.addEventListener('click', ()=>{
//         infoPreg.classList.toggle("desple");

//         let height = 0;
//         let menu= infoPreg;
//         console.log (menu.scrollHeight)
//         if (menu.clienHeight == '0' ){
//             height=menu.scrollHeight;
//         }
        
//         menu.style.height = `${height}px`;
//     })


  return (
    <Box sx={{ flexGrow: 1 }}> {/* 1 */}
    <Grid container spacing={1}>

        <Grid sx={{ margin:'46.5%' }} />
            <Grid size={{ xs: 6, md: 100 }}>

            {/* titulo */}
                <Item>
                    <Typography variant="h7" component="div" sx={{ flexGrow: 1}}>
                        DULCE
                    </Typography>
                </Item>

            </Grid>

        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        <Grid size={{ xs: 6, md: 100 }} >
          {/* titulo */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black'}}>
                    Infusión con tostadas de pan integral con queso blanco y mermelada sin azúcar
                </Typography>
            </Item>
        </Grid>
        </Button>
        <Menu
        id="fade-menu"
        MenuListProps={{
        'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose} >
                <Grid size={{ xs: 6, md: 4 }}>
                    {/* foto */}
                    <Item>
                        <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
                    </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                {/* texto */}
                    <Item>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex',  }}>
                        Ingredientes: Pan integral, queso blanco descremado, dulce de batata sin azúcar. <br/>
                        1. Tostar pan integral, servir la porción (el resto se puede congelar).<br/>
                        2. Untar queso y mermelada sin azúcar.<br/>
                        3. Servir junto a la infusión a elección (te, café, mate cocido, mate). Si desea endulzar, 
                        utilizar edulcorante sin azúcar
                        </Typography>
                    </Item>
                </Grid>
            </MenuItem>
        </Menu>

        
        <Grid size={{ xs: 6, md: 100 }}>
          {/* titulo */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                    Yogurt con frutas y semillas
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
            {/* texto */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
                Ingredientes: yogurt, frutas (frutilla, durazno, arándanos, etc.) <br/>
                1. Calentar leche entera de sachet a 40°C (no debe quemar al tacto). <br/>
                2. Colocar una cucharada de leche en polvo y edulcorante. <br/>
                3. Verter un yogur entero de pote y mezclar bien. <br/>
                4. Colocar en recipiente hermético y dejar reposar a temperatura ambiente durante 6 a 8
                hrs. (Puede envolver el recipiente con bolsa de tela para mantener la temperatura). <br/>
                5. Servir en porciones y refrigerar. (Consumir dentro de los 3 días luego de la preparación). <br/>
                6. Añadir semillas de chía, amapola o lino y frutas (frutilla, durazno natural, arándanos o
                manzana)
                </Typography>
            </Item>
        </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
                {/* foto */}
            <Item>
                <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
            </Item>
            </Grid>
        </Grid>


    <Box sx={{ flexGrow: 1 }}>  {/* 2 */}

        <Grid container spacing={1}>
            
            <Grid sx={{ margin:'1px' }} />

            <Grid size={{ xs: 6, md: 100 }} >
            {/* titulo */}
                <Item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black'}}>
                        Infusión con galletas de avena y coco
                    </Typography>
                </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
                {/* foto */}
                <Item>
                    <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
                </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
                {/* texto */}
                <Item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex',  }}>
                    Ingredientes: 1 taza de avena, 1/2 taza de coco rallado sin azúcar, 2 claras de huevo, 1
                    cucharada de aceite, edulcorante opcional. <br/>
                    1. Mezclar todos los ingredientes hasta formar una masa. <br/>
                    2. Formar pequeñas galletas y colocarlas en una bandeja para horno. <br/>
                    3. Hornear a 180°C durante 12-15 minutos, hasta que estén doradas. <br/>
                    4. Dejar enfriar y servir con infusión a elección.

                    </Typography>
                </Item>
            </Grid>

            <Grid size={{ xs: 6, md: 100 }}>
            {/* titulo */}
                <Item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        Infusión con Magdalenas
                    </Typography>
                </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
                {/* texto */}
                <Item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
                    Ingredientes: 1 taza de harina integral o de avena, 1/2 taza de harina de almendra, 1/2 taza
                    de puré de manzana, 2 huevos, 1/4 taza de aceite de coco o de oliva, 1/4 taza de leche
                    descremada o vegetal sin azúcar, 1/2 cucharadita de polvo de hornear, 1 cucharadita de
                    canela, 1 cucharadita de esencia de vainilla, 1/2 taza de arándanos frescos o frutillas en
                    trozos. <br/>
                    1. Precalentar el horno a 180°C y preparar moldes para muffins con capacillos o engrasar
                    ligeramente. <br/>
                    2. Mezclar los ingredientes húmedos en un bol: batir los huevos, puré de manzana, aceite,
                    leche y vainilla. <br/>
                    3. Incorporar los ingredientes secos: Añadir la harina integral, harina de almendra, polvo de
                    hornear y canela. Mezcla hasta que estén bien integrados. <br/>
                    4. Incorpora suavemente los arándanos o frutillas a la mezcla. <br/>
                    5. Vertir la mezcla en los moldes llenando 3/4 de su capacidad. <br/>
                    6. Hornear por 20-25 minutos, o hasta que un palillo insertado en el centro salga limpio. <br/>
                    7. Enfriar y servir con infusión.

                    </Typography>
                </Item>
            </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    {/* foto */}
                <Item>
                    <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
                </Item>
                </Grid>
            </Grid>
    </Box>


    <Box sx={{ flexGrow: 1 }}>  {/* 3 */}

        <Grid container spacing={1}>
        
        <Grid sx={{ margin:'1px' }} />
        <Grid size={{ xs: 6, md: 100 }} >
            {/* titulo */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black'}}>
                    Infusión con barritas de cereal
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
            {/* foto */}
            <Item>
                <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
            {/* texto */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex',  }}>
                Ingredientes: 1 taza de avena en copos, 1/2 taza de almendras picadas, 1/2 taza de
                semillas (chía, lino, sésamo), 1/4 taza de coco rallado (opcional), 1/2 taza de puré de
                manzana, 1/4 taza de mantequilla de maní sin azúcar, 1/4 taza de agua, 1 cdita de canela y
                esencia de vainilla. <br/>
                1. Precalentar el horno a 180°C y forrar un molde con papel manteca. <br/>
                2. Mezclar avena, almendras, semillas y coco. <br/>
                3. Agregar el puré de manzana, mantequilla de maní, agua, canela y vainilla. Mezcla bien. <br/>
                4. Extender en el molde y presionar. <br/>
                5. Hornea 20-25 minutos, enfría y corta en barritas. <br/>
                6. Guarda en la nevera por hasta una semana. <br/>
                7. Servir con infusión a elección.
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 100 }}>
          <Item>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1}}>
                  SALADO
              </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 100 }}>
            {/* titulo */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                    Infusión con tostadas integrales con palta y queso.
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
            {/* texto */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
                Ingredientes: pan integral, palta, queso, infusión. <br/>
                1. Tostar pan integral, servir la porción (el resto se puede congelar). <br/>
                2. Untar palta y queso. <br/>
                3. Servir con la infusión a elección.
                </Typography>
            </Item>
        </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
                {/* foto */}
            <Item>
                <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
            </Item>
            </Grid>
        </Grid>
    </Box>

    <Box sx={{ flexGrow: 1 }}>  {/* 4 */}

        <Grid container spacing={1}>
        
        <Grid sx={{ margin:'1px' }} />
        <Grid size={{ xs: 6, md: 100 }} >
            {/* titulo */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black'}}>
                    Infusión con chipa
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
            {/* foto */}
            <Item>
                <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
            {/* texto */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex',  }}>
                Ingredientes: 2 tazas de harina de mandioca, 1 taza de queso magro rallado, 2 claras de
                huevo, 1/2 taza de leche descremada, sal. <br/>
                1. Mezclar la harina de mandioca, el queso rallado, las claras y la leche. <br/>
                2. Formar bolitas pequeñas y colocarlas en una placa para horno. <br/>
                3. Hornear a 180°C durante 15-20 minutos o hasta que estén dorados.
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 100 }}>
            {/* titulo */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                    Panqueques de avena y harina de garbanzos con queso y tomate
                </Typography>
            </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
            {/* texto */}
            <Item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
                Ingredientes: 1/2 taza de avena, 1/4 taza de harina de garbanzos, 1 huevo, 1/2 taza de
                leche descremada, esencia de vainilla, edulcorante opcional. <br/>
                1. Mezclar todos los ingredientes hasta obtener una masa homogénea. <br/>
                2. Cocinar porciones pequeñas en una sartén antiadherente hasta dorar ambos lados. <br/>
                3. Servir con un toque de queso blanco y tomates en rodajas.
                </Typography>
            </Item>
        </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
                {/* foto */}
            <Item>
                <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
            </Item>
            </Grid>
        </Grid>
    </Box>
</Box>
    
  )
}

export default Comida
