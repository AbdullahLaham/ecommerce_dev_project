import React, { useEffect } from 'react'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGOUT, PAGE_SELECTED } from '../constants';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { logoutUser } from '../actions/users';

const SidebarComponent = ({showAccountSidebar, setShowAccountSidebar}) => {
  // const {authData} = useSelector((state) => state?.userReducer);
  const [selected, setSelected] = useState(1);
  console.log('heloooooooooooooo', showAccountSidebar)
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  const {authData} = useSelector((state) => state?.userReducer);
  const {page_selected} = useSelector((state) => state?.generalReducer);

  const deleteCurrentUser = () => {
    dispatch(logoutUser(navigate));
    dispatch({type: LOGOUT});
    setShowAccountSidebar(false);
  }

  const changePageSelected = (name) => {
    dispatch({type: PAGE_SELECTED, payload: name});
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })

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
    <div className={`w-[85%] h-[100vh] max-h-[90vh] z-20 fixed top-0  bg-white flex-col justify-between backdrop-blur	 ${showAccountSidebar ? 'left-0 boxshadow-style flex' : '-left-[100%]'} ease-in-out delay-150`}>
      <div>
        <div className='flex flex-col items-start gap-2 mb-[0] bg-orange-500 min-w-[100%] h-[11rem] p-[1rem]'>
              <img className='w-[4.5rem] h-[4.5rem]  rounded-full object-cover' src={authData?.profile_photo_url}  />
              <div>
                <div className=' border-b  flex justify-start border-gray-200 py-[.5rem] text-white font-semibold'>{authData?.name}</div>
                <p className='font-semibold text-white'>{authData?.email}</p>
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
      {/* <div className='flex gap-2 border-b items-center py-[.5rem] text-gray-400 m-[2rem]'>
        <select className='bg-gray-200 border-none outline-none h-[3rem] w-[7rem]'>
          <option value='English'>English</option>
        </select>
      </div> */}
      <div className='flex items-center justify-between p-[.5rem] text-gray-400 border-t border-b py-[1rem] border-gray-800 mt-[3rem]'>
        <div className='flex items-center'>
          <LogoutIcon />
          <Link to='/login' onClick={() => deleteCurrentUser()} className='text-gray-400'>LogOut</Link>
        </div>
        <CloseIcon sx={{fontSize: '2.5rem'}} mr='2rem' onClick={() => setShowAccountSidebar(false)} />
      </div>
    </div>
  )
}

export default SidebarComponent;





