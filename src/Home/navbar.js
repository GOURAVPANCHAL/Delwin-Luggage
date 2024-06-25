import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../images/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const pages = ['Home', 'Products', 'Contact Us', 'Privacy Policy', 'Duffle bags', 'Accessories'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ background: 'white', boxShadow: 'none' }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ maxWidth: { xs: '35%', md: '10%', sm: '15%' } }}>
            <Link to={'/'} >
              <img src={logo} style={{ width: '100%' }} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='end'>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" display='grid' lineHeight='33px'>
                  <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/'}>Home</Link>
                  <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/product'}>Products</Link>
                  <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/about'}>About</Link>
                  <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/contact'}>Contact</Link>
                  <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/blog'}>Blog</Link>
                  <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/testimonial'}>Testimonial</Link>
                </Typography>
              </MenuItem>
              {/* {pages.map((page) => (
              ))} */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='space-evenly' margin='auto' maxWidth='65%' >
            <ul style={{ display: 'flex', listStyle: 'none', width: '100%', margin: 'auto', justifyContent: 'space-evenly' }}>
              <li>
                <Link style={{ color: 'rgb(147, 192, 27)' }} className='navli' to={'/'}>Home</Link>
              </li>
              <li>
                <Link className='navli' to={'/product'}>Hard Luggage</Link>
              </li>
              {/* <li>
                  <Link className='navli' to={'/DuffleBags'}>Duffle Luggage</Link>
              </li> */}
              <li>
                <Link className='navli' to={'/briefcase'}>BriefCase</Link>
              </li>
              <li>
                <Link className='navli' to={'/about'}>About Us</Link>
              </li>
              <li>
                <Link className='navli' to={'/contact'}>Contact Us</Link>
              </li>
              <li>
                <Link className='navli' to={'/blog'}>Blog</Link>
              </li>
            </ul>
          </Box>
          <div >
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
