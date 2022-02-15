import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Header() {
  return (
  <div>
      <AppBar position='static'>
           <Toolbar >
             <Typography variant='h6' component="div" sx={{flexGrow:1}} >
              GIPHY IMAGES
             </Typography>
           </Toolbar>

         </AppBar>

      

  </div>
  );
}

export default Header;
