import React, { useState } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false); // Close drawer after selecting a section
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: { xs: 'flex-end', md: 'flex-end' },
        alignItems: 'center',
        position: 'absolute',
        top: { xs: '10px', md: '20px' },
        right: { xs: '10px', md: '30px' },
        zIndex: 10,
        paddingX: '16px',
        gap: 1,
      }}
    >
      {/* Desktop Buttons */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
        {[
          { label: 'Home', target: 'home' },
          { label: 'About', target: 'about' },
          { label: 'Projects', target: 'projects' },
          { label: 'More', target: 'more' },
          { label: 'Contact Me', target: 'contact' },
        ].map(({ label, target }, index) => (
          <Button
            key={index}
            onClick={() => handleScroll(target)}
            sx={navButtonStyle}
          >
            {label}
          </Button>
        ))}
      </Box>

      {/* Mobile Menu Icon */}
      <IconButton
        sx={{ display: { xs: 'flex', md: 'none' }, color: '#3d2c1e' }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: 'rgba(0,0,0,0.4)' },
          },
        }}
        PaperProps={{
          sx: { backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {[
              { label: 'Home', target: 'home' },
              { label: 'About', target: 'about' },
              { label: 'Projects', target: 'projects' },
              { label: 'More', target: 'more' },
              { label: 'Contact Me', target: 'contact' },
            ].map(({ label, target }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleScroll(target)}>
                  <ListItemText primary={label} primaryTypographyProps={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#3d2c1e' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

const navButtonStyle = {
  color: '#3d2c1e',
  fontFamily: 'Poppins, sans-serif',
  fontSize: { xs: '12px', sm: '14px', md: '16px' },
  fontWeight: '600',
  letterSpacing: '1px',
  textTransform: 'none',
  padding: { xs: '6px 8px', sm: '8px 14px', md: '8px 16px' },
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)',
  textShadow: '0px 0px 6px rgba(255, 255, 255, 0.5)',
  transition: 'all 0.4s ease',
  whiteSpace: 'nowrap',
  '&:hover': {
    textShadow: '0px 0px 15px rgba(255, 255, 255, 0.9)',
    transform: 'translateY(-3px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
};

export default Header;
