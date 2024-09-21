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

function Informacion() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}> {/* 1 */}
        
    
                <Grid size={{ xs: 6, md: 100 }}>
    
                {/* titulo */}
                    <Item>
                        <Typography variant="h7" component="div" sx={{ flexGrow: 1}}>
                            informacion
                        </Typography>
                    </Item>
    
                </Grid>
    
            {/* <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <Grid size={{ xs: 6, md: 100 }} >
              
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
                     
                        <Item>
                            <img src="logo.jpg"  sx={{height:'50px', width:'50px'}}  />
                        </Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 8 }}>
                   
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
            </Menu>*/}
    
    
        <Box sx={{ flexGrow: 1 }}>  {/* 2 */}
    
            <Grid container spacing={1}>
                
                <Grid sx={{ margin:'1px' }} />
    
                <Grid size={{ xs: 6, md: 100 }} >
                {/* titulo */}
                    <Item>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black'}}>
                            ¿Tipos de Diabetes?
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
                        Tipo 1. Representa entre el 5-10 % de todos los casos de diabetes diagnosticados. Se caracteriza por una producción 
                        deficiente de insulina y requiere siempre administración de insulina. <br/>
                        Tipo 2. Representa entre el 80-90% de todos los casos. Se caracteriza porque el cuerpo no utiliza la propia insulina y está muy asociada al sobrepeso y al sedentarismo. Gestacional. Se caracteriza por 
                        una subida de azúcar (hiperglucemia) que aparece durante el embarazo.
                        </Typography>
                    </Item>
                </Grid>
    
                <Grid size={{ xs: 6, md: 100 }}>
                {/* titulo */}
                    <Item>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                            ¿Que es la diabetes tipo 1?
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                    {/* texto */}
                    <Item>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
                        La diabetes tipo 1 es una enfermedad autoinmune que se caracteriza 
                        por un aumento de los niveles de azúcar en la sangre debido a que el páncreas no 
                        produce insulina. El propio sistema de defensa (inmunológico) 
                        del organismo inactiva la parte del páncreas que produce la insulina. <br/>
                        <h5>Síntomas</h5><br/>
                        Los síntomas iniciales por los que una persona consulta con su médico y que están 
                        asociados a tener niveles de azúcar altos son:<br/>
                        Muchas ganas de orinar<br/>
                        Mucha sed<br/>
                        Mayor sensación de hambre<br/>
                        Pérdida de <br/>
                        Otros síntomas menos frecuentes son el cansancio en las Piernas y somnolencia.
                        </Typography>
                    </Item>
                </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                    <Item >
                        <img src="Images/diabetes1.png"  sx={{height:'40px', width:'40px'}}  />
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
                        ¿Cuál es el tratamiento de la Diabetes Tipo 1?
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
                    Las personas con diabetes tipo 1 tienen que inyectarse insulina para poder vivir, 
                    realizar glucemias capilares antes de las comidas y seguir un plan de alimentación equilibrado. 
                    Hay 2 sistemas de tratamiento con insulina: Insulina rápida que se administra 
                    antes de las comidas (entre 3 – 4 veces al día). Insulina lenta para cubrir las 
                    necesidades basales del organismo (1-2 veces al día). Infusores de insulina. 
                    Consiste en administrar insulina, a través de infusión continúa subcutánea de insulina (bomba de insulina)
                    </Typography>
                </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 100 }}>
                {/* titulo */}
                <Item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        ¿Qué es la insulina?
                    </Typography>
                </Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
                {/* texto */}
                <Item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
                    La insulina es una hormona producida por el páncreas que facilita que la glucosa que proviene de los alimentos 
                    pueda ser utilizada por el organismo. Esta es la insulina que genera el cuerpo, 
                    pero no la que se administra al paciente. <br/>
                    <h5>Tipos de insulina</h5> <br/>
                    

                    Hay varios tipos de insulinas que se diferencian por el tiempo 
                    que tardan en actuar o por el tiempo de inicio de acción y por 
                    la duración del efecto. Según las necesidades se recomienda 
                    inyectar: Súper rápida (Análogos de insulina rápida) Regulares
                    Intermedias (NPH y NPL)<br/>
                    Lentas (Análogos de insulina lenta)<br/>
                    Mezcla de insulina rápida e intermedia. El primer número 
                    significa el porcentaje de rápida, y el segundo, la proporción 
                    de intermedia.<br/>
                    Mezcla de insulina super rápida pida e intermedia a diferentes proporciones. <br/>
                    Hay varias marcas, tanto de cada tipo de insulina como de instrumentos de 
                    administración. El equipo médico le indicará el tipo de insulina, la marca 
                    comercial, las unidades que tendrá que inyectarse, el tiempo recomendado entre 
                    la inyección y el inicio de la comida y las zonas de punción más recomendables 
                    en cada caso.
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

export default Informacion


 