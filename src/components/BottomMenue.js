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
const BottomMenue = () => {
    const [selected, setSelected] = useState('Home');
    const isMobile = useMediaQuery("(min-width: 800px)")
  return (
    !isMobile && <Box sx={{position: 'sticky',zIndex: '1', bottom: '0', left: '0', backgroundColor: 'white', width: '100%', height: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} px='1rem'>
        {
            nav.map((item) => {
                return <div className={`flex flex-col items-center relative text-gray-600 ${item.name == selected ? 'mb-[1rem]' : ''}`}>
                    <p onClick={() => {setSelected(item?.name)}} className={`text-[1.5rem] ${item?.name == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}>{item?.icon}</p>
                    <p className='text-[.9rem]'>{item?.name}</p>
                </div>
            })
        }
    </Box>
  )
}

export default BottomMenue