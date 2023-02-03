import React from 'react'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../constants';

const SidebarComponent = ({isOpen, setOpen}) => {
  const {authData} = useSelector((state) => state?.userReducer);
  const [selected, setSelected] = useState(1);
  // dispatch
  const dispatch = useDispatch();
  const deleteCurrentUser = () => {
    dispatch({type: LOGOUT});
  }
  const headerItems = [
    {
      name: 'Home'
    },
    {
      name: 'clothing'
    },
    {
      name: 'accessories'
    },
    {
      image: '../images/logo.png'
    },
    {
      name: 'misc'
    },
    {
      name: 'shoes',
    },
  
  ]
  return (
    <div className={`w-[90%] md:w-[50%]  h-[100vh] z-20 absolute left-0 top-0 bg-white flex-col ${isOpen ? 'flex' : 'hidden'} md:hidden lg:hidden`}>
      <div>
        <div className='flex items-center gap-2 border-b border-gray-200  m-[2rem] pt-0'>
          <img src={authData?.image} className='w-[4.5rem] h-[4.5rem] rounded-full object-cover' />
          <div>
            <p className=' text-blue-600 font-semibold'>{authData?.name}</p>
            <Link to='/profile' className=' border-b pl-[1rem] flex justify-start border-gray-200 py-[.5rem] text-blue-600 font-semibold'>My Profile</Link>
          </div>
        </div>
        <div className='border-t border-gray-800 w-[85%] m-auto'>

        </div>
      </div>
      <div className='flex flex-col justify-between items-start w-[50rem] m-[2rem] text-2xl font-bold '>
        {headerItems.map((item, i) => {
          return <Link to={item?.name == 'Home' ? '/' : `/products/${item.name}`}><p onClick={() => setSelected(i)} className={`my-[.5rem] text-gray-500  ${selected == i ? 'text-red-500 cursor-pointer' : 'cursor-pointer'}`}>{item.name}</p></Link>
        })}
      </div>
      <div className='border-t border-gray-800 w-[85%] mx-auto'>

        </div>
      <div className='flex gap-2 border-b items-center py-[.5rem] text-gray-400 m-[2rem]'>
        <select className='bg-gray-200 border-none outline-none h-[3rem] w-[7rem]'>
          <option value='English'>English</option>
        </select>
      </div>
      <div className='flex gap-2 border-b items-center py-[.5rem] text-gray-400 m-[2rem]'>
        <LogoutIcon />
        <Link to='/login' onClick={() => deleteCurrentUser()} className='text-gray-400'>LogOut</Link>
      </div>
    </div>
  )
}

export default SidebarComponent;
