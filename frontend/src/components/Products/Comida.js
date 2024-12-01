import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import './Comida.css';
// import React, { useRef } from 'react';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

function Comida() {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const [height, setHeight] = React.useState (0);
    const contenREF = React.useRef([])

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        
    };

    const comidas = [
        {
            id:1,
            // categoria:'Dulce',
            title: 'Infusión con tostadas de pan integral con queso blanco y mermelada sin azúcar',
            ingredients: '1 taza de avena, 1/2 taza de coco rallado sin azúcar, 2 claras de huevo, 1 cucharada de aceite, edulcorante opcional.',
            pasos: '1. Mezclar todos los ingredientes hasta formar una masa. 2. Formar pequeñas galletas y colocarlas en una bandeja para horno. 3. Hornear a 180°C durante 12-15 minutos, hasta que estén doradas. 4. Dejar enfriar y servir con infusión a elección',
            image: 'Images/Comida/1_pan_integral.png',
        },
        {
            id:2,
            // categoria:'Dulce',
            title: 'Yogurt con frutas y semillas',
            ingredients:' yogurt, frutas (frutilla, durazno, arándano), semillas (chia, linaza).',
            pasos: '1. Calentar leche entera de sachet a 40°C (no debe quemar al tacto). 2. Colocar una cucharada de leche en polvo y edulcorante. 3. Verter un yogur entero de pote y mezclar bien. 4. Colocar en recipiente hermético y dejar reposar a temperatura ambiente durante 6 a 8hrs. (Puede envolver el recipiente con bolsa de tela para mantener la temperatura). 5. Servir en porciones y refrigerar. (Consumir dentro de los 3 días luego de la preparación). 6. Añadir semillas de chía, amapola o lino y frutas (frutilla, durazno natural, arándanos o manzana).',
            image: 'Images/Comida/2_yogurt_frutas.png',
        },
        {
            id:3,
            title: 'Infusión con galletas de avena y coco',
            ingredients:' Ingredientes: 1 taza de avena, 1/2 taza de coco rallado sin azúcar, 2 claras de huevo, 1cucharada de aceite, edulcorante opcional.',
            pasos: '1. Mezclar todos los ingredientes hasta formar una masa. 2. Formar pequeñas galletas y colocarlas en una bandeja para horno. 3. Hornear a 180°C durante 12-15 minutos, hasta que estén doradas. 4. Dejar enfriar y servir con infusión a elección.',
            image: 'Images/Comida/3_galletas_de_avena_y_coco.png',
        },
        {
            id:4,
            title: 'Infusión con Magdalenas',
            ingredients:' Ingredientes: 1 taza de harina integral o de avena, 1/2 taza de harina de almendra, 1/2 taza de puré de manzana, 2 huevos, 1/4 taza de aceite de coco o de oliva, 1/4 taza de leche descremada o vegetal sin azúcar, 1/2 cucharadita de polvo de hornear, 1 cucharadita de canela, 1 cucharadita de esencia de vainilla, 1/2 taza de arándanos frescos o frutillas en trozos.',
            pasos: '1. Precalentar el horno a 180°C y preparar moldes para muffins con capacillos o engrasar ligeramente. 2. Mezclar los ingredientes húmedos en un bol: batir los huevos, puré de manzana, aceite, leche y vainilla. 3. Incorporar los ingredientes secos: Añadir la harina integral, harina de almendra, polvo de hornear y canela. Mezcla hasta que estén bien integrados. 4. Incorpora suavemente los arándanos o frutillas a la mezcla. 5. Vertir la mezcla en los moldes llenando 3/4 de su capacidad. 6. Hornear por 20-25 minutos, o hasta que un palillo insertado en el centro salga limpio. 7. Enfriar y servir con infusión.',
            image: 'Images/Comida/4_Magdalena.png',
        },
        {
            id:5,
            title: 'Infusión con barritas de cereal',
            ingredients:' Ingredientes: 1 taza de avena en copos, 1/2 taza de almendras picadas, 1/2 taza de semillas (chía, lino, sésamo), 1/4 taza de coco rallado (opcional), 1/2 taza de puré de manzana, 1/4 taza de mantequilla de maní sin azúcar, 1/4 taza de agua, 1 cdita de canela y esencia de vainilla.',
            pasos: '1. Precalentar el horno a 180°C y forrar un molde con papel manteca. 2. Mezclar avena, almendras, semillas y coco. 3. Agregar el puré de manzana, mantequilla de maní, agua, canela y vainilla. Mezcla bien. 4. Extender en el molde y presionar. 5. Hornea 20-25 minutos, enfría y corta en barritas. 6. Guarda en la nevera por hasta una semana. 7. Servir con infusión a elección. ',
            image: 'Images/Comida/5_barritas_de_cereal.png',
        },
        {
            id:6,
            title: 'Infusión con tostadas integrales con palta y queso',
            ingredients:'Ingredientes: pan integral, palta, queso, infusión.',
            pasos: '1. Tostar pan integral, servir la porción (el resto se puede congelar). 2. Untar palta y queso. 3. Servir con la infusión a elección. ',
            image: 'Images/Comida/6_Tostadas_integrales_con_palta_y_queso.png',
        },
        {
            id:7,
            title: 'Infusión con chipa',
            ingredients:'Ingredientes: 2 tazas de harina de mandioca, 1 taza de queso magro rallado, 2 claras de huevo, 1/2 taza de leche descremada, sal.',
            pasos: ' 1. Mezclar la harina de mandioca, el queso rallado, las claras y la leche. 2. Formar bolitas pequeñas y colocarlas en una placa para horno. 3. Hornear a 180°C durante 15-20 minutos o hasta que estén dorados.',
            image: 'Images/Comida/7_chipa.png',
        },
        {
            id: 8,
            title: 'Panqueques de avena y harina de garbanzos con queso y tomate',
            ingredients:' Ingredientes: 1/2 taza de avena, 1/4 taza de harina de garbanzos, 1 huevo, 1/2 taza de leche descremada, esencia de vainilla, edulcorante opcional.',
            pasos: '1. Mezclar todos los ingredientes hasta obtener una masa homogénea. 2. Cocinar porciones pequeñas en una sartén antiadherente hasta dorar ambos lados. 3. Servir con un toque de queso blanco y tomates en rodajas.',
            image: 'Images/Comida/8_Panqueques_de_avena.png ',
        },
        {
            id: 9,
            title: 'Omelette de vegetales y queso',
            ingredients:'Ingredientes: huevo, espinaca, tomate, queso descremado, orégano, albahaca.',
            pasos: ' 1. Preparar un omelette con claras de huevo o huevos enteros, espinaca, tomate y un poco de queso descremado. Agregar hierbas frescas para saborizar.',
            image: 'Images/Comida/9_Omelette_de_vegetales_y_queso.png',
        },
        {
            id: 10,
            title: 'Queso fresco con huevo, tomate y albahaca',
            ingredients:'Ingredientes: 1 huevo, 1 tomate, hojas de albahaca, aceite de oliva.',
            pasos: '1. Hervir durante 12min un huevo, dejar enfriar y pelar. 2. Servir con rodajas de tomate, hojas de albahaca y un chorrito de aceite de oliva.',
            image: 'Images/Comida/10_Queso_fresco_con_huevo,_tomate_y_albahaca.png',
        },
        {
            id: 11,
            title: 'Wrap de lechuga con pollo y verduras',
            ingredients:'Ingredientes: lechuga, pollo cocido, morrón, pepino, queso crema o hummus',
            pasos: ' Usa hojas grandes de lechuga como base y rellena con tiras de pollo cocido, morrón, pepino y un poco de queso crema light o hummus.',
            image: 'Images/Comida/11_Wrap_de_lechuga_con_pollo.png',
        },
        {
            id: 12,
            title: 'Revuelto gramajo',
            ingredients:'Ingredientes: 1 papa, 1 cebolla, 1 huevo, ¼ taza de queso en cubos, ¼ de taza de jamón en cubos',
            pasos: ' 1. Hervir y enfriar papas cortadas en cubo. 2. Saltear cebolla con un poquito de aceite de oliva. 3. Añadir las papas, un huevo, queso y jamón cortado en cubos. ',
            image: 'Images/Comida/12_Revuelto_gramajo.png',
        },
        {
            id: 13,
            title: 'Tortilla de verduras',
            ingredients:'Ingredientes: 1 cebolla, 1 morrón rojo, 1 paquete de espinaca o acelga, 2 huevos, ¼ de taza de queso fresco, aceite',
            pasos: ' 1. Saltear cebolla y morrón picado en cubitos. 2. Cuando la cebolla se torne translúcida, añadir las espinacas bien lavadas y picadas en trozos grandes. 3. Dejar enfriar y añadir los huevos y el queso en cubos. Mezclar bien. 4. Colocar en sartén a 120°C precalentada con un poco de aceite. 5. Cuando dore la base, dar vuelta y continuar cocinando tapado. ',
            image: 'Images/Comida/13_Tortilla_de_verduras.png',
        },
        {
            id: 14,
            title: 'Sopa crema de verduras',
            ingredients:'Ingredientes: 1/2 calabaza en cubos, 2 zanahorias en rodajas, 1 tallo de apio, Agua o caldo de verduras, Sal y pimienta.',
            pasos: ' 1. Hervir las verduras en agua o caldo hasta que estén tiernas. 2. Licuar hasta obtener una crema suave. 3. Ajusta sal y pimienta al gusto. ',
            image: 'Images/Comida/14_Sopa_crema_de_verduras.png',
        },
        {
            id: 15,
            title: 'Tortilla de zapallitos con ensalada.',
            ingredients:'Ingredientes: 2 huevos, 1 zapallito verde en rodajas finas, 1/2 cebolla picada, sal y pimienta, 1 tomate, 1 lechuga, 1 zanahoria.',
            pasos: ' 1. Sofreír la cebolla y el zapallito. 2. Batir los huevos, añadir las verduras salteadas. 3. Sazonar y cocinar en una sartén antiadherente hasta dorar ambos lados. 4. Cortar el tomate en cubos, rallar la zanahoria y picar en tiras la cebolla para la ensalada. Condimentar con vinagre o limón. ',
            image: 'Images/Comida/15_Tortilla_de_zapallitos.png',
        },
        {
            id: 16,
            title: 'Guiso de lentejas con verduras',
            ingredients:'Ingredientes: 1 taza de lentejas cocidas, 1/2 zanahoria en cubos, 1/2 cebolla picada, 1 tomate en cubos, caldo de verduras',
            pasos: ' 1. Sofreír la cebolla y la zanahoria. 2. Añadir tomate y lentejas. 3. Cubrir con caldo y cocinar 20 minutos. 4. Servir caliente. ',
            image: 'Images/Comida/16_Guiso_de_lentejas.png',
        },
        {
            id: 17,
            title: 'Sándwich de berenjena a la plancha',
            ingredients:'Ingredientes: 2 rodajas de pan integral, 1 berenjena en rodajas, 1 tomate en rodajas, queso fresco descremado',
            pasos: ' 1. Asar las rodajas de berenjena. 2. Arma el sándwich con tomate, queso y berenjena asada. 3. Tostar en sartén.',
            image: 'Images/Comida/17_Sándwich_de_berenjena.png',
        },
        {
            id: 18,
            title: 'Crepes de espinaca y queso',
            ingredients:'Ingredientes: 1/2 taza de harina integral, 1 taza de leche descremada, 1 huevo, espinaca y queso descremado para el relleno',
            pasos: ' 1. Mezclar la harina, leche y huevo para hacer los crepes. 2. Cocina en sartén. 3. Rellenar con espinaca salteada y queso. ',
            image: 'Images/Comida/18_Crepes_de_espinaca.png', 
        },
        {
            id: 19,
            title: '  Sopa de pollo con verduras ',
            ingredients:'Ingredientes: 1 pechuga de pollo cocida y desmenuzada, 1 zanahoria en rodajas, 1 tallo de apio picado, 1/2 cebolla picada, caldo de verduras sin sal o agua.',
            pasos: ' 1. Hervir el caldo con las verduras hasta que estén tiernas. 2. Añade el pollo desmenuzado y cocina 15 minutos. ',
            image: 'Images/Comida/19_Sopa_de_pollo.png',
        },
        {
            id: 20,
            title: 'Sopa crema de zapallo y puerro',
            ingredients:'Ingredientes: 1/2 zapallo en cubos, 1 puerro picado, 1 diente de ajo, caldo de verduras',
            pasos: ' 1. Sofreír el puerro y el ajo. 2. Añadir el zapallo y el caldo. 3. Cocinar hasta que el zapallo esté tierno. 4. Licuar todo hasta obtener una crema suave ',
            image: 'Images/Comida/20_Sopa crema_de_zapallo_y_puerro.png',
        },


        
    ];

React.useEffect(() => {
    if (activeIndex !== null && [activeIndex])
        {
            const newHeight = [activeIndex].scrollheight;
            setHeight(newHeight);
        }else{
            setHeight (0);
        }
}, [activeIndex])
    
    return (
        <div>
            <Box sx={{ flexGrow: 1,}}>
                <Grid container spacing={1}>
                    
                    {comidas.map((comida, index) => (
                        <React.Fragment key={index}>
                            <Grid  size={{ xs: 6, md: 10 }} >
                                <Item onClick={() => handleToggle(index)}>
                                    <Typography className='titulo' variant="h5" component="div" sx={{ flexGrow: 1}}>
                                        {comida.title}
                                    </Typography>
                                </Item>
                            </Grid>
                            {activeIndex === index && (
                                <Grid item size={{ xs: 6, md: 10 }} sx={{position: 'unset' }}>
                                    <div className='respu' >
                                        <Grid item size={{ xs: 6, md: 4 }}>
                                            <Item>
                                                <img className='imagenes' src={comida.image} alt={comida.title} />
                                            </Item>
                                        </Grid>
                                        <Grid item size={{ xs: 6, md: 10 }} >
                                            <Item className='contenido' sx={{ flexGrow: 1, marginLeft:'10px', paddingBottom:'11%', paddingTop:'5%' }}>
                                                <Typography variant="h5"  component="div" sx={{ flexGrow: 1, }}>
                                                    {comida.ingredients} <br/>
                                                    {comida.pasos}
                                                </Typography>
                                            </Item>
                                        </Grid>
                                    </div>
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default Comida;

