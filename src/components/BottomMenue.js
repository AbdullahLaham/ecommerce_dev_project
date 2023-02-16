import React, { useState } from 'react'
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import {AiOutlineHome} from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {CiTextAlignLeft} from 'react-icons/ci';
import {BsBag, BsPersonCircle} from 'react-icons/bs';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const nav = [
    {
        name: 'Categories',
        icon: <CiTextAlignLeft  />
    },
    {
        name: 'Cart',
        icon: <BsBag  />
    },
    {
        name: 'Home',
        icon: <AiOutlineHome  />
    },
    {
        name: 'Notification',
        icon: <IoIosNotificationsOutline  />
    },
    {
        name: 'Account',
        icon: <BsPersonCircle />
    },
];
const BottomMenue = ({showAccountSidebar, setShowAccountSidebar}) => {
    const [selected, setSelected] = useState('Home');
    const isMobile = useMediaQuery("(min-width: 800px)");
    const {authData} = useSelector((state) => state?.userReducer);

    const navigate = useNavigate();
  return (
    !isMobile && <div className='fixed z-10 bottom-0 left-0 right-0 bg-white w-[95%] mx-auto max-w-[95%] h-[4.5rem] max-h-[4.5rem] flex items-center justify-between px-[.4rem]'>
        {/* {
    .8   nav.map((item) => {
                return <div className={`flex flex-col items-center relative text-gray-600 ${item.name == selected ? 'mb-[1rem]' : ''}`}>
                    <p onClick={() => {setSelected(item?.name)}} className={`text-[1.5rem] ${item?.name == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}>{item?.icon}</p>
                    <p className='text-[.9rem]'>{item?.name}</p>
                </div>
            })
        } */}


        <div className={`flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${'Wishlist' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Wishlist'); navigate('/dashboard/wishlist')}} className={`text-[1rem]  ${'Wishlist' == selected ? 'p-[.4rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><FavoriteBorderIcon sx={{fontSize: '2rem',}}  /></p>
                <p className='text-[.7rem]'>Wishlist</p>
        </div>

        <div className={`flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${'Cart' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Cart'); navigate('/dashboard/cart')}} className={`text-[2rem] ${'Cart' == selected ? 'p-[.4rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><BsBag sx={{fontSize: '1.5rem'}} /></p>
                <p className='text-[.7rem]'>Cart</p>
        </div>

        <div className={`flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${'Home' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Home'); navigate('/')}} className={`text-[2rem] ${'Home' == selected ? 'p-[.4rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><AiOutlineHome  /></p>
                <p className='text-[.7rem]'>Home</p>
        </div>
        <div className={`flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${'Notification' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Notification')}} className={`text-[2rem] ${'Notification' == selected ? 'p-[.4rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><IoIosNotificationsOutline  /></p>
                <p className='text-[.7rem]'>Notices</p>
        </div>

        <div className={`flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${'Account' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setShowAccountSidebar(true); navigate('/dashboard/profile')}} className={`text-[2rem] ${'Account' == selected ? 'p-[.4rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}> {authData?.email ? <img className='w-[2.2rem] h-[2.2rem] rounded-full object-cover text-xl'  src={authData?.profile_photo_url} /> : <BsPersonCircle />}</p>
                <p className='text-[.7rem]'>Account</p>
        </div>
    </div>
  )
}


export default BottomMenue;
