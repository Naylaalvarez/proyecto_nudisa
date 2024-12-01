import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import './info.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

function Informacion() {
    const [activeIndex, setActiveIndex] = React.useState(null);
    // const contenREF = useRef([])

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const info = [
        {
            id:1,
            title: '¿Qué es la Diabetes?',
            respuesta: 'La diabetes es una enfermedad crónica que se caracteriza por un aumento de los niveles de azúcar (glucosa) en la sangre. Esto es debido a que el páncreas no produce insulina o el cuerpo no la utiliza de forma correcta. Existen diferentes tipos de diabetes y las más frecuentes son tipo 1, tipo 2 y gestacional.',
        },
        {
            id:2,
            title: 'Tipos de Diabetes',
            respuesta: 'Tipo 1. Representa entre el 5-10 % de todos los casos de diabetes diagnosticados. Se caracteriza por una producción deficiente de insulina y requiere siempre administración de insulina. Tipo 2. Representa entre el 80-90% de todos los casos. Se caracteriza porque el cuerpo no utiliza correctamente la propia insulina y está muy asociada al sobrepeso y al sedentarismo. Gestacional. Se caracteriza por una subida de azúcar (hiperglucemia) que aparece durante el embarazo.',
            
        },
        {
            id:3,
            title: '¿Qué es la diabetes tipo 1?',
            respuesta: 'La diabetes tipo 1 es una enfermedad autoinmune que se caracteriza por un aumento de los niveles de azúcar en la sangre debido a que el páncreas no produce insulina. El propio sistema de defensa (inmunológico) del organismo inactiva la parte del páncreas que produce la insulina.',
            mas: 'Los síntomas iniciales por los que una persona consulta con su médico y que están asociados a tener niveles de azúcar altos son: Muchas ganas de orinar, Mucha sed, Mayor sensación de hambre, Pérdida de peso, Otros síntomas menos frecuentes son el cansancio en las piernas y somnolencia.',
            
        },
        {
            id:4,
            title: '¿Cuál es el tratamiento de la Diabetes Tipo 1?',
            respuesta: 'Las personas con diabetes tipo 1 tienen que inyectarse insulina para poder vivir, realizar glucemias capilares antes de las comidas y seguir un plan de alimentación equilibrado.',
           
        },
        {
            id:5,
            title: '¿Qué es la insulina?',
            respuesta: 'La insulina es una hormona producida por el páncreas que facilita que la glucosa que proviene de los alimentos pueda ser utilizada por el organismo. Esta es la insulina que genera el cuerpo, pero no la que se administra al paciente.',
            mas: 'Hay 2 sistemas de tratamiento con insulina: Múltiples dosis de insulina: Insulina rápida que se administra antes de las comidas (entre 3 – 4 veces al día). Insulina lenta para cubrir las necesidades basales del organismo (1-2 veces al día). Infusores de insulina. Consiste en administrar insulina, a través de infusión continúa subcutánea de insulina (bomba de insulina)',
            
        },
        {
            id:6,
            title: 'Tipos de insulina',
            respuesta: 'Hay varios tipos de insulinas que se diferencian por el tiempo que tardan en actuar o por el tiempo de inicio de acción y por la duración del efecto. Según las necesidades se recomienda inyectar: ',
            mas:'Súper rápida (Análogos de insulina rápida) Regulares, Intermedias (NPH y NPL), Lentas (Análogos de insulina lenta), Mezcla de insulina rápida e intermedia. El primer número significa el porcentaje de rápida, y el segundo, la proporción intermedia. Mezcla de insulina super rápida pida e intermedia a diferentes proporciones.',
        },
        {
            id:7,
            title: '¿Cómo se administra la insulina?',
            respuesta: 'La insulina solo se puede administrar a través de inyecciones, pero se están investigando nuevas formas de administración. En función de cada persona y situación se aconseja un instrumento u otro:',
            mas:'', 
        },
        {
            id:8,
            title: '¿ dónde se inyecta la insulina?',
            respuesta: 'La insulina se inyecta en el tejido subcutáneo. Puede inyectarse en las zonas indicadas. Es necesario cambiar la zona para evitar hipertrofias o endurecimientos que pueden provocar que la insulina no actúa bien. Las zonas de punción son:',
            mas: 'Brazos: La insulina tiene que inyectarse en la zona externa del cuadrante superior lateral y dejar 4 dedos desde el hombro. Muslos: La insulina tiene que inyectarse en la zona del cuadrante superior externo y lateral. Abdomen: Se puede utilizar la zona abdominal y se tiene que dejar dos dedos alrededor del ombligo. Nalgas.',
        },
        {
            id:9,
            title: '¿Qué es la Diabetes tipo 2?',
            respuesta: 'la diabetes tipo 2 está vinculada directamente a la deficiencia o mal funcionamiento de la insulina. Esta hormona es la encargada de regular el movimiento del azúcar en las células. Cuando se padece diabetes tipo 2, el cuerpo no está metabolizando bien la glucosa (uno de los combustibles más importantes y esenciales del organismo).',
            mas: 'El páncreas genera la insulina, y esta se encarga de transportar la glucosa en el torrente sanguíneo, reduciendo los excesos de azúcar y nivelando la secreción. Cuando existe un caso de diabetes tipo 2, no solo se produce una resistencia a la insulina, sino que es imposible mantener los niveles de azúcar llevando a consecuencias en algunos casos letales.',
        },
        {
            id:10,
            title: 'Causas de la diabetes tipo 2',
            respuesta: 'Cuestiones nutricionales: el sobrepeso y la obesidad son parámetros para considerar que el paciente tiene riesgos de padecer diabetes tipo 2. El almacenamiento de la grasa en el abdomen es otro indicador de la enfermedad.',
            mas: 'Sedentarismo e inactividad: la actividad física es una pieza fundamental en el control del sobrepeso, además de que utiliza la glucosa como fuente de energía incrementando la sensibilidad de las células hacia la insulina.',
        },
        {
            id:11,
            title: 'síntomas de la diabetes tipo 2',
            respuesta: 'Aumento de la sed y necesidad de orinar con frecuencia. Pérdida de peso involuntaria y veloz. Fatigas y aumento del apetito. Problemas en la visión como distorsiones. Llagas que se alojan por mucho tiempo. Áreas del cuerpo en que la piel está oscurecida (axilas y cuello). Infecciones frecuentes.',
            mas: 'Desafortunadamente, los síntomas de la diabetes tipo 2 se expresan con lentitud (pueden tardar hasta 2 años en manifestarse). Por lo tanto, hay pacientes que podrían padecer esta enfermedad sin saberlo.',
        },
        {
            id:12,
            title: '¿Qué es Diabetes gestacional:?',
            respuesta: 'La diabetes gestacional es el aumento de los niveles de glucosa en la sangre por una alteración en el metabolismo de los hidratos de carbono que se detecta por primera vez en el embarazo.',
            mas: 'Factores de riesgo: Obesidad,	Antecedentes familiares de diabetes tipo 2,	Antecedentes personales de diabetes gestacional, Mujeres de 30-35 años, Bebé previo de más de 4kg al nacer, Abortos previos sin causa aparente',
        },
        {
            id:13,
            title: '¿Cómo se diagnostica?',
            respuesta: 'Primero se realiza el test O ’Sullivan (“la prueba del azúcar”) a todas las embarazadas entre las 24 y 28 semanas de embarazo. No es necesario ir en ayunas.',
            mas: 'Si el resultado es negativo, no hay diabetes gestacional , pero si es positivo se realizará una segunda prueba, el TTGO (“test de tolerancia a la glucosa”) con el que se confirmará o destacará el diagnóstico. Dura 3 horas y es necesario ir en ayunas.',
        },

    ];

return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={1} >

                    {info.map((info, index) => (
                        <React.Fragment key={index} className='fondo'>
                            
                            <Grid  size={{ xs: 6, md: 10 }} >
                                <Item onClick={() => handleToggle(index)}>
                                    <Typography className='titulo' variant="h5" component="div" sx={{ flexGrow: 1,  }}>
                                        {info.title}
                                    </Typography>
                                </Item>
                            </Grid>
                            {activeIndex === index && (
                                <Grid item xs={12}>
                                    <div >
                        
                                        <Grid item size={{ xs: 6, md: 10 }} >
                                            <Item sx={{ flexGrow: 1, display:'flex', justifyContent:'center', backgroundColor:'#b1f2c2' }}>
                                                <Typography variant="h5"  component="div" sx={{ flexGrow: 1, }}>
                                                    {info.respuesta}<br/>
                                                    {info.mas}
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

   
    
         

export default Informacion


 