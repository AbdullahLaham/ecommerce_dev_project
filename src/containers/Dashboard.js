import React, { useEffect } from 'react'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LOGOUT, PAGE_SELECTED } from '../constants';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import { useMediaQuery } from '@mui/material';
import { logoutUser } from '../actions/users';

const Dashboard = () => {
  const [selected, setSelected] = useState(1);
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  const {authData} = useSelector((state) => state?.userReducer);
  const {page_selected} = useSelector((state) => state?.generalReducer);
  const deleteCurrentUser = () => {
    dispatch(logoutUser(navigate));
    dispatch({type: LOGOUT});
  }

  const changePageSelected = (name) => {
    dispatch({type: PAGE_SELECTED, payload: name});
  }

  const isMobile = useMediaQuery("(max-width: 800px)");
  const headerItems = [
    {
      name: 'Dashboard',
      icon: <HomeOutlinedIcon sx={{fontSize: '1.2rem',}} />,
      link: '/dashboard'
    },
    {
      name: 'Wishlist',
      icon: <FavoriteBorderOutlinedIcon sx={{fontSize: '1.2rem',}} />,
      link: '/dashboard/wishlist'
    },
    {
      name: 'Manage Profile',
      icon: <PersonOutlineOutlinedIcon sx={{fontSize: '1.2rem',}} />,
      link: '/dashboard/profile',
    },
    {
      name: 'Your Cart',
      icon: <ShoppingCartOutlinedIcon sx={{fontSize: '1.2rem',}} />,
      link: '/dashboard/cart',
    },
    {
      name: 'Chat With Admin',
      icon: <MarkUnreadChatAltOutlinedIcon sx={{fontSize: '1.2rem',}} />,
      link: '/chat',
    }
  
  ];
  useEffect(() => {
    if (!authData?.email) {
      navigate('/login', {replace: true,})
    }
  }, [])
  return (
    <div className='min-w-[100%]  flex '>
        {!isMobile && (
          <div className={`h-[85vh] max-h-[100%] ml-[5rem] md:w-[30%] lg:w-[18%] z-20  bg-white flex-col justify-between delay-150 border-r border-gray-300 sticky left-0 top-0`}>
          <div className='h-[65vh]'>
            <div className='flex flex-col items-center gap-1 mb-[0] bg-orange-500 min-w-[100%] h-[11rem] p-[1rem]'>
                  <img className='w-[4.5rem] h-[4.5rem]  rounded-full object-cover' src={authData?.profile_photo_url}  />
                  <div className='text-start text-white'>
                    <Link to='/dashboard/profile' className=' text-start flex justify-start  py-[.5rem] text-white font-semibold'>{authData?.name}</Link>
                    <p className='flex justify-start opacity-[.6] -mt-[.6rem]'>{authData?.email}</p>
                  </div>
            </div>  

            <div className='flex flex-col justify-between items-start  m-[.3rem] text-2xl '>
                {headerItems.map((item, i) => {
                  return <Link className={` flex items-center   gap-2 mb-0 pl-[.8rem] ${page_selected == item?.name ? 'bg-red-200 w-[100%] rounded-[.2rem] text-red-500' : ''}`} onClick={() => changePageSelected(item?.name)} to={item?.link}>
                    <p className={` text-gray-600 text-[.3rem]  ${page_selected == item?.name ? 'text-red-500' : ''} `}>{item?.icon}</p>
                    <p onClick={() => setSelected(i)} className={`my-[.5rem] text-gray-500  text-[.7rem] ${page_selected == item?.name ? 'text-red-500 font-semibold cursor-pointer bg-red-200' : 'cursor-pointer'}`}>
                      {item.name}
                    </p>
  
                    </Link>
                })}
            </div>

          </div>
          <div className='flex items-center justify-between p-[.5rem] text-gray-400 border-t  border-b py-[1rem] border-gray-300 mt-[4.8rem]'>
            <div className='flex items-center'>
              <LogoutIcon />
              <Link to='/login' onClick={() => deleteCurrentUser()} className='text-gray-400'>LogOut</Link>
            </div>
          </div>
        </div>
        )}

      <div className='min-h-[80vh] w-[70%] '>
        <Outlet />
      </div>
      {/* end of sidebar */}
    </div>
  )
}

export default Dashboard;
