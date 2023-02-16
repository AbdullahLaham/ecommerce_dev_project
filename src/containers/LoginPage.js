import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {FaLongArrowAltRight} from 'react-icons/fa';
import { useField } from "formik";
// import logo from './images/logo.png'
// import login from './images/login.png';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/users';
import { useMediaQuery } from '@mui/material';

// import {loginRequest, loginSuccess, loginFailed} from '../../redux/login/loginAction';

// import './login.css';
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // const PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
  // .matches(PASSWORD_REGEX, 'please enter a strong password')
  
  const validationSchema = yup.object({
    email: yup.string().email('please enter a valid email').required("the email is required"),
    password: yup.string().required('password is required'),
    
  });

  const onSubmit = async (values) => {
    // dispatch(loginRequest());
    console.log('email', values.email, values.password);
    try {
      const user = {
        email: values.email,
        password: values.password,
        device_name: 'mah',
      }
      // const user = {
      //   email: 'mahmoud.albatran.20@gmail.com',
      //   password: 'password',
      //   device_name: 'mah',
      // }
      
      dispatch(loginUser(user, navigate));
      
    }
     catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <div className='w-[80%] m-auto flex bg-gray-100 h-[80vh] overflow-y-hidden max-h-[100vh]'>
      {!isMobile && <div className='w-[37%] p-[3rem] flex justify-center items-start  bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 h-[80vh]'>
        <div className='flex flex-col justify-between  mt-[4.5rem] '>
            <img className='w-[12rem]' src='./images/login.png' />
            <p className='text-[#fff] font-bold text-2xl my-[1.5rem]'>Welcome Back!</p>
            <p className='text-gray-300 font-bold text-1xl opacity-[.8]'>Login to your account and start your shopping NOW!</p>
            {/* <img src={login} /> */}
        </div>
      </div>}
      <div className='w-[100%] h-[60vh] flex flex-col justify-center items-start p-[1rem] ml-[1.5rem] mt-[7rem]'>
        <p className='font-semibold text-2xl text-start title'>LOGIN</p>
        <form onSubmit={formik.handleSubmit} className='flex flex-col' >
            <div className=' my-[.5rem] h-[4rem] '><input  name="email" type='email' placeholder='John@example.com' onChange={formik.handleChange} value={formik.values.email} className={`p-[1rem] my-[.9rem] ${isMobile ? 'w-[16rem]': 'w-[28rem]'} border-none outline-none max-h-[100%] h-[100%] field block `} /></div>
            {formik.touched.email && formik?.errors?.email}
            <div className=' my-[.5rem] h-[4rem]'><input name="password" type='password' placeholder='password' onChange={formik.handleChange} value={formik.values.password} className={`p-[1rem] my-[.9rem] ${isMobile ? 'w-[16rem]': 'w-[28rem]'} border-none outline-none max-h-[100%] h-[100%] field block `}  /></div>
            {formik.touched.password && formik?.errors?.password}
            <button type='submit' className='flex items-center mt-[2rem] '><p>Login</p> <p  className=' flex items-center  bg-orange-400 rounded-full text-white text-right justify-end p-[.1rem] ml-[.5rem] hover:ml-[.8rem] transition-all duration-150' ><FaLongArrowAltRight className='block  ' /></p></button>
        </form>
        <p className='mt-[8rem] w-[100%] '>Dont have account ? <Link to='/signup'>Signup</Link></p>
      </div>
      
    </div>
  )
}

export default LoginPage
