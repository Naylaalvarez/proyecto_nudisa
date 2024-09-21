import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';


export default function Menus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <Avatar alt="Remy Sharp" id="logo" src="logo.jpg" sx={{ height:'50px', width:'50px'}}/>
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
        <MenuItem onClick={handleClose} ><a href='/dash' ><img src='Images/ini_logo.png'  className='logotipos' /></a></MenuItem>
        <MenuItem onClick={handleClose} ><a href='/comi'><img src='Images/recetas_logo.png' className='logotipos' /></a></MenuItem>
        <MenuItem onClick={handleClose} ><a href='/calen'><img src='Images/cale_logo.png' className='logotipos' /></a></MenuItem>
        <MenuItem onClick={handleClose} ><a href='/info'><img src='Images/info_logo.png' className='logotipos' /></a></MenuItem>
      </Menu>
    </div>
  );
}
