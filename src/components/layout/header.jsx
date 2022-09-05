import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../../logo.png'
import Link from '@mui/material/Link';


import styles from './Header.module.css'



const drawerWidth = 240;
const navItems = ['Flight', 'Bus', 'Hotel', 'Holiday', 'Visa', 'Visa Guide', 'Group Request', 'Travel Advisory', 'Promotions', 'Blog'];

export default function Header(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={Logo} className="drawer-logo" alt="logo" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="static" component="nav" className={styles.appheader}>
        <Container maxWidth="xl">
          <Toolbar>
            <img src={Logo} className="logo" alt="logo" />
            <Box sx={{ flexGrow: 1 }}>
              
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }} className={styles.mainNav}>
                {navItems.map((item) => (
                  <Link href="#" key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Link>
                ))}
              </Box>
            </Box>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
            <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
}
