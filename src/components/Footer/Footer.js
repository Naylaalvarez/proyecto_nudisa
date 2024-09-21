import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Grid from '@mui/material/Grid2';
import './Footer.css'

function Footer() {
    const [value, setValue] = React.useState(0);

  return (
        <Box className="footer" sx={{marginTop:'10px' }} >
          <Grid sx={{width:'1420px', position: 'absolute',  Color: '#f7f7f7' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              padding:'10px',
              width:'166%',
              
            }}
          >
            <BottomNavigationAction label="Alvarez.N Vallejos.T Vallejos.k Roldan.J Ruiz.D" icon={<CopyrightIcon />} />
            <BottomNavigationAction href='https://www.instagram.com/nudisa_/' target="_BLANK"  label="nudisa_" icon={<InstagramIcon />} />
            <BottomNavigationAction href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJlKpLtrwTVXdqcgVkwtGThHlqDZfkNCslrsTXJWjVGNNCpSsXBMpbGCpHtMqDcmnpPLTrg" target="_BLANK" label="nudisa6@gmail.com" icon={<EmailIcon />} />
          </BottomNavigation>
       
          </Grid>
        </Box> 
    
    );

}

export default Footer