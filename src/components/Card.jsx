// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#001b34' }}>
      <Toolbar>
        <Typography variant="h6" color="white">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
