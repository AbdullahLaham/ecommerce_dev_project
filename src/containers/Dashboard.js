import React, { useEffect } from 'react'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../constants';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMediaQuery } from '@mui/material';
import { logoutUser } from '../actions/users';

const Dashboard = () => {
  const [selected, setSelected] = useState(1);
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  const deleteCurrentUser = () => {
    dispatch(logoutUser(navigate));
    dispatch({type: LOGOUT});
  }

  const isMobile = useMediaQuery("(max-width: 800px)");
  const headerItems = [
    {
      name: 'Dashboard',
      icon: <HomeOutlinedIcon sx={{fontSize: '1.5rem',}} />,
      link: '/dashboard'
    },
    {
      name: 'Wishlist',
      icon: <FavoriteBorderOutlinedIcon sx={{fontSize: '1.5rem',}} />,
      link: '/dashboard/wishlist'
    },
    {
      name: 'Manage Profile',
      icon: <PersonOutlineOutlinedIcon sx={{fontSize: '1.5rem',}} />,
      link: '/dashboard/profile',
    },
    {
      name: 'Your Cart',
      icon: <ShoppingCartOutlinedIcon sx={{fontSize: '1.5rem',}} />,
      link: '/dashboard/cart',
    },

  
  ];

  return (
    <div className='min-w-[100%]  flex '>
        {!isMobile && (
          <div className={`h-[80vh] max-h-[100%] ml-[5rem] md:w-[27%] lg:w-[18%] z-20  bg-white flex-col justify-between delay-150 border-r border-gray-300 sticky left-0 top-0`}>
          <div>
            <div className='flex flex-col items-center gap-2 mb-[0] bg-orange-500 min-w-[100%] h-[11rem] p-[1rem]'>
                  <img className='w-[4.5rem] h-[4.5rem]  rounded-full object-cover' src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAZlBMVEX///8AAACioqL8/PwiIiIoKCj5+fmcnJy1tbWHh4fl5eVAQEDR0dH29vbf39+lpaV5eXljY2PLy8s0NDTs7OxLS0vAwMDZ2dmNjY2urq4vLy9FRUVRUVGUlJQXFxcKCgpwcHBaWlpsDSLcAAAD0UlEQVR4nO2b23aqMBBAjVwCyCUoFfHO///kqQcpioiZCRN8mP3cru5Fkslc0sWCYRiGYRiGYRiGYUZIoiiZ26FPEVdqdRb/Oa9UFRdzGzX4sTqKHkcV+3N7LaLlpe/VcFlGs4ol1WpY7Maqmm/nJcGI2H+5YCa5Ih8Xu5HPciDWm89mQmzW9s0CV8dMCDewLJbIs57Zb6CTdjdcqCt2I7RpFkDMhLC4pts3YfYdl60ts2gPMxNib+lmKGqomRC1nfiWwc2EyGyYJRgzIWxEEFDc6LAQQWLNW6CPG5OrKZyZEIrarNS+oPqcS2I1iTUTYklrVryUAfocaWNb7OHVPNqDsMSbEa+ogz6fN5RDqFb8mKj9UG62yMRMCMr8IzVTSwnVYjM1yiO6NVOjTHZRqVoHZdL2xWpfvKClmRpl7vHFweOL1SJk9t3gUt4GiUZL7T05aVW1M1HbUZottgYr6tJ2PiKtVuQwG9rGR3LFq12JC/gKr1bRmi2SD/3496zIux7oQlRSmy1S5EHYUF4Fd5ChjTaoNfioKtmzMunbIjoyZzuNZgexpDvK6vgBeAChDxwt0KYMcSPm2Q10y1volT4QAOYtF8uzvbX2xGVvfSIaazaNfmyuptMct0QrhuzuP2wleBSn/J4TVh8PqndPhKL8RD+k8oNjt0hlOCrnhfea+Lb4x4D4qkqbjqnbbu10ZCwUtrnGugk1ijT3yNp4djm136DIB7+c9/eMwj+1gcala8cUj03m/K+B4W9l/aTn1XL7t3rlY+mqiHZcWj99F1d2fycpK7kLVZ6rcCersrsxC/l8b9Qki/p6HldZ7yP4vZ1eZC+JgEdQvGRDV9NRjhw7Xw5NjS6Tb7i38bWOByvfKK7f/cbEqfhYHXVQWVQ8JGRJEWXqMPILU9ZWGvOfgzpJuVxKeRq1aggnu7b808c/BkRO5Ta52WRratj2HmaSCstkOvseb4JuuMlIewzzcbdvNJwdQ5kmSYajnzEMr4WIZKM1eGYNVKNm/CdyEzOSuNFhEEEidHdUjxV+SY0GGDqgk5AU/bRJlzM26TV42qQL8i5NP2c3xhxwn40w2nag4q4Dfn2LYY/J3IhjWgsmthkMyiBc4WYl4e35CCJxAz6OxwNvpxJlkK8coWbI59QYoDMFK0GtARrakC+9MQBfh1MVK0MACxjsQBYDcIi7NnqhA8OFzTws5EMdsMyIrPocAvTc3yetpPrkkGI5sXhAf48oJOg6ltKOhisoZ4PMO00BzkudwFpg2wTQRLesllaoqP/lhWEYhmEYhmEYhmEYMv4BQ8M4nZXJS4sAAAAASUVORK5CYII='}  />
                  <div className='text-center'>
                    <Link to='/profile' className=' text-center flex justify-center border-gray-200 py-[.5rem] text-white font-semibold'>My Profile</Link>
                    <p className='font-semibold flex justify-center text-gray-300'>{'mahmoud-2@gmail.com'}</p>
                  </div>
            </div>      
              <div className='flex flex-col justify-between items-start w-[50rem] m-[2rem] text-2xl font-bold '>
                {headerItems.map((item, i) => {
                  return <Link className='flex items-center gap-3 text-[1.5rem]' to={item?.link}>
                    <p className=' text-gray-600 text-[1.2rem]'>{item?.icon}</p>
                    <p onClick={() => setSelected(i)} className={`my-[.5rem] text-gray-500  text-[.9rem] ${selected == i ? 'text-red-500 cursor-pointer' : 'cursor-pointer'}`}>
                      {item.name}
                    </p>
  
                    </Link>
                })}
            </div>
          </div>
          <div className='flex items-center justify-between p-[.5rem] text-gray-400 border-t  border-b py-[1rem] border-gray-300 mt-[6.2rem]'>
            <div className='flex items-center'>
              <LogoutIcon />
              <Link to='/login' onClick={() => deleteCurrentUser()} className='text-gray-400'>LogOut</Link>
            </div>
          </div>
        </div>
        )}
      <Outlet />
      {/* end of sidebar */}
    </div>
  )
}

export default Dashboard;
