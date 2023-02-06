import { Box, InputLabel, MenuItem, Select, Typography, StyledMenu, Button, Menu, TextField, InputBase, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_CATEGORY } from '../constants';

const Header = () => {
    const [language, setLanguage] = useState('Arabic');
    const [currency, setCurrency] = useState();
    const [selected, setSelected] = useState('home') 
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // categories data
    const {categories, whislistItems, cart} = useSelector((state) => state?.generalReducer);
    // useEffect(() => {
    //     dispatch(changeLanguage());
    // }, [language]);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (categoryId) => {
        setAnchorEl(null);
        dispatch({type: CURRENT_CATEGORY, payload: categoryId});
        navigate('/grid');
    };

    const isMobile = useMediaQuery("(min-width: 800px)");
    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}

          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiFormLabel-root': {
            maxWidth: '1px',
            padding: '0px',
            margin: '0px',
        },
        '& .MuiPaper-root': {
          borderRadius: 6,
        //   marginTop: theme.spacing(1),
          minWidth: 100,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            // padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
            //   marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      }));
  return (
    isMobile ? <div className='max-w-[100%]  top-0 left-0 right-0' >
        {/* First header line  */}
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #DED8D7'}} mx='5rem'>
            <Box sx={{display: 'flex', width: '10%',}}>
                <InputLabel id="hhh">Age</InputLabel>
                <Select
                    sx={{border: 0, outline: 0, height: '2.5rem', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}} 
                    labelId="hhh"
                    id="hr"
                    value={10}
                    label="Age"
                    onChange={(e) => setLanguage(e.target.value)}
                    
                >   
                    <MenuItem value={10}><div className='flex items-center w-[5rem]'><img className='mr-1' src='https://applabb.account-collection.com/frondendAll/assetsSomePage/img/flags/en.png' />Amirican</div></MenuItem>
                </Select>
                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={10}
                    label="Age"
                    onChange={() => setLanguage()}
                    sx={{height: '2.5rem', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
                    border= '0px' outline= '0px'
                >
                    <MenuItem value={10}>Currency</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </Box>
            
            <Box sx={{display: 'flex', color: '#B4AEAD',}}>
                <Typography sx={{ borderRight: '1px solid #B4AEAD', paddingX: '.5rem', height: '100%'}} >
                    059....
                </Typography>
                <Typography sx={{borderRight: '1px solid #B4AEAD', paddingX: '.5rem', height: '100%' }} >
                    Login
                </Typography>
                <Typography sx={{ paddingX: '.5rem' , height: '100%'}} >
                    Register
                </Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #DED8D7', }} py='.3rem' width='100%' pl='5rem'>
        <Typography>Laraver Ecommerce</Typography>
        
        <Box sx={{display: 'flex', }} width='80%'>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                <MenuIcon /> 
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    categories?.map((item) => {
                        return (
                            <MenuItem onClick={() => handleClose(item?.id)} disableRipple>
                                {item?.name}
                            </MenuItem>
                        )
                    })
                }
                
                
            </StyledMenu>
            <InputBase
                sx={{ ml: '2rem', width: '50%', border: '1px solid #DDDADA', borderRadius: '2px', paddingX: '.7rem'}}
                px='1rem'
                placeholder="I am shopping for..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px', backgroundColor: 'blue', borderRadius: '.2rem', color: 'white' }} aria-label="search" variant='contained'>
                <SearchIcon />
            </IconButton>
             <Box sx={{display: 'flex', alignItems: 'center', }} ml='3rem'>
                <Typography sx={{display: 'flex', alignItems: 'center', }} mx='2rem'>
                    <FavoriteBorderIcon sx={{color: 'gray', marginRight: '.2rem'}} />
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', color: '#DAD0CF'}}>
                        <Link to='/dashboard/wishlist'>
                            <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.6rem', height: '.7rem', width: '.7rem', color: 'white', backgroundColor: 'orange', borderRadius: '50%'}}>
                                {whislistItems?.length}
                            </Typography>
                            <Typography>
                            Wishlist
                            </Typography>
                        </Link> 
                    </Box>
                </Typography> 
                
                <Typography sx={{display: 'flex', alignItems: 'center', }}>
                    <ShoppingCartOutlinedIcon sx={{color: 'gray', marginRight: '.2rem'}} />
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', color: '#DAD0CF'}}>
                        <Link to='/dashboard/cart'>
                            <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.6rem', height: '.5rem', width: '.5rem', color: 'white', backgroundColor: 'orange', borderRadius: '50%'}}>
                                {cart?.length}
                            </Typography>
                            <Typography>
                                Cart
                            </Typography>
                        </Link> 
                    </Box>
                </Typography> 
                
             </Box>
        </Box>    
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} mt='.5rem' >
            <Typography onClick={() => setSelected('home')} sx={{marginRight: '1rem', fontWeight: `${selected == 'home' ? 'bold' : 'normal'}`}}><Link to='/'  marginRight='1rem'>Home</Link></Typography>
            <Link onClick={() => setSelected('shop')} to='/grid' sx={{fontWeight: `${selected == 'shop' ? 'bold' : 'normal'}`, fontWeight: 'bold'}}>Shop</Link>
        </Box>
    </div> : 
    // is Mobile screen




    <Box  sx={{ maxWidth: '100%', paddinTop: '1rem'}}>
        {/* First header line  */}
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #DED8D7'}} mx='3rem'>
                <Select
                    sx={{border: 0, outline: 0, height: '2.5rem', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}} 
                    labelId="hhh"
                    id="hr"
                    value={10}
                    label="Age"
                    onChange={(e) => setLanguage(e.target.value)}
                    
                >   
                    <MenuItem sx={{display: 'flex', }} display='flex' value={10}><img src='https://applabb.account-collection.com/frondendAll/assetsSomePage/img/flags/en.png' />Amirican</MenuItem>
                </Select>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={10}
                    label="Age"
                    onChange={() => setLanguage()}
                    sx={{height: '2.5rem', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
                    border= '0px' outline= '0px'
                >
                    <MenuItem value={10}>Currency</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #DED8D7', }} py='.3rem' width='100%' pl='3rem'>
            <Typography>Laraver Ecommerce</Typography>       
            <Box sx={{display: 'flex', paddingRight: '3rem'}}>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="outlined"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    <MenuIcon /> 
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                {
                    categories?.map((item) => {
                        return (
                            <MenuItem onClick={() => handleClose(item?.id)} disableRipple>
                                {item?.name}
                            </MenuItem>
                        )
                    })
                }
                    
                </StyledMenu>
            </Box>    
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} mt='.5rem' >
            <Typography onClick={() => setSelected('home')} sx={{marginRight: '1rem', fontWeight: `${selected == 'home' ? 'bold' : 'normal'}`}}><Link to='/'  marginRight='1rem'>Home</Link></Typography>
            <Link onClick={() => setSelected('shop')} to='/grid' sx={{fontWeight: `${selected == 'shop' ? 'bold' : 'normal'}`, fontWeight: 'bold'}}>Shop</Link>
        </Box>
    </Box>
  )
}

export default Header;

