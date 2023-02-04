import React, { useState } from 'react'
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {AiOutlineHome} from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {CiTextAlignLeft} from 'react-icons/ci';
import {BsBag, BsPersonCircle} from 'react-icons/bs';


import { Box, useMediaQuery } from '@mui/material';
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
    
  return (
    !isMobile && <div className='sticky z-10 bottom-0 left-0 right-0 bg-white w-[100%] mx-auto max-w-[99%] h-[4.5rem] flex items-center justify-between px-[.4rem]'>
        {/* {
            nav.map((item) => {
                return <div className={`flex flex-col items-center relative text-gray-600 ${item.name == selected ? 'mb-[1rem]' : ''}`}>
                    <p onClick={() => {setSelected(item?.name)}} className={`text-[1.5rem] ${item?.name == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}>{item?.icon}</p>
                    <p className='text-[.9rem]'>{item?.name}</p>
                </div>
            })
        } */}


        <div className={`flex flex-col items-center relative text-gray-600 ${'Categories' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Categories')}} className={`text-[1rem] ${'Categories' == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><CiTextAlignLeft  /></p>
                <p className='text-[.5rem]'>Categories</p>
        </div>

        <div className={`flex flex-col items-center relative text-gray-600 ${'Cart' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Cart')}} className={`text-[1rem] ${'Cart' == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><BsBag /></p>
                <p className='text-[.5rem]'>{'Cart'}</p>
        </div>

        <div className={`flex flex-col items-center relative text-gray-600 ${'Home' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Home')}} className={`text-[1rem] ${'Home' == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><AiOutlineHome  /></p>
                <p className='text-[.5rem]'>Home</p>
        </div>
        <div className={`flex flex-col items-center relative text-gray-600 ${'Notification' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => {setSelected('Notification')}} className={`text-[1rem] ${'Notification' == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><IoIosNotificationsOutline  /></p>
                <p className='text-[.5rem]'>Notification</p>
        </div>

        <div className={`flex flex-col items-center relative text-gray-600 ${'Account' == selected ? 'mb-[1rem]' : ''}`}>
                <p onClick={() => { setShowAccountSidebar(true)}} className={`text-[1rem] ${'Account' == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}><BsPersonCircle /></p>
                <p className='text-[.5rem]'>Account</p>
        </div>
    </div>
  )
}

export default BottomMenue