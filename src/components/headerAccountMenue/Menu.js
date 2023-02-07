import React from 'react'
import './menu.css';
import {GrLogout} from 'react-icons/gr';
import {BsPersonCircle} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/users';
const Menu = ({showMenu, setShowMenu}) => {
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  const {authData} = useSelector((state) => state.userReducer);
  
  const deleteCurrentUser = () => {
    dispatch(logoutUser(navigate));
    dispatch({type: LOGOUT});
  }
  return (
    <div className='w-[19rem] h-[9rem] flex flex-col justify-between border-orange rounded-md p-[1rem] pb-0 absolute z-[10] right-[3rem] top-[2.5rem] bg-gray-50 '>
      <div className='flex items-center gap-2 border-b border-gray-200  py-[.5rem] pt-0'>
        <img src={authData?.profile_photo_url} className='w-[2rem] h-[2rem] rounded-full object-cover' />
        <p className=' text-blue-600 font-semibold'>{authData?.name}</p>
      </div>
      <Link onClick={() => setShowMenu(false)} to='/dashboard' className='border-b border-gray-200 py-[.5rem] text-blue-600 font-semibold text-start'>My Panel</Link>
      <div className='flex gap-2 border-b items-center py-[.5rem] text-gray-400' onClick={() => setShowMenu(false)} >
        <GrLogout />
        <Link to='/login' onClick={() => deleteCurrentUser()} className='text-gray-400'>LogOut</Link>
      </div>
    </div>
  )
}

export default Menu
