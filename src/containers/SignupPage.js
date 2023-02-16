import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';
import { useField } from "formik";
// import logo from './images/logo.png'
// import login from './images/login.png'
import { countries } from '../data';
import { signupUser } from '../actions/users';

const SignupPage = () => {
    const navigate = useNavigate();
    const [stip, setStip] = useState(1);
    const [selectedImage, setSelectedImage] = useState();
    const dispatch = useDispatch();
    
    const PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
    // .matches(PASSWORD_REGEX, 'please enter a strong password')
    const validationSchema = yup.object({
      email: yup.string().email('please enter a valid email').required("the email is required"),
      password: yup.string().required('password is required'),
      confirmPassword: yup.string().required('confirmPassword is required').oneOf([yup.ref("password"), null], "Passwords must match"),
    });
    const onSubmit = async (values) => {
     try {
          const user = { 
            name: values.name, 
            email: values.email,
            password: values.password,
            device_name: values.device_name,
        };
        console.log(user);
        dispatch(signupUser(user, navigate));
      } catch (error) {
         console.log(error);
      }
}


    const formik = useFormik({
      initialValues: {
          name: '',  
          email: '',
          password: '',
          confirmPassword: '',
          device_name: "",
      },
      validateOnBlur: true,
      onSubmit,
      validationSchema: validationSchema,
    });
    
    const addImageToUser = (file) => {
        const reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
        }
        reader.onload = (readerEvent) => {
          setSelectedImage(readerEvent.target.result);   
        }
      }  
  return (
    <div className='w-[80%] m-auto flex bg-gray-100 h-[100vh]  max-h-[100vh] overflow-y-hidden'>
      <div className='w-[37%] p-[3rem] flex justify-center items-start  bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 h-[100vh]'>
        <div className='flex flex-col justify-between h-[30rem] mt-[4.5rem] '>
            {/* <img className='w-[12rem]' src={logo} /> */}
            <p className='text-[#fff] font-bold text-2xl my-[1.5rem]'>Welcome Back!</p>
            <p className='text-gray-300 font-bold text-1xl opacity-[.8]'>Signup to new account and start your shopping NOW!</p>
            {/* <img src={login} /> */}
        </div>
      </div>
      <div className='w-[40%] h-[100vh] flex flex-col justify-center items-start p-[1rem] ml-[7rem] mt-[3rem]'>
        <p className='font-semibold text-2xl text-start title ml-[10px]'>SIGNUP </p>
        <form onSubmit={formik.handleSubmit} className='flex flex-col' >
                <>
                    <div className=' my-[.4rem] h-[4rem]'><input name="name" type='text' placeholder='Your Full name' onChange={formik.handleChange} value={formik.values.name} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block '  /></div>
                    {formik.touched.name && formik?.errors?.name}
                    <div className=' my-[.4rem] h-[4rem] '><input  name="email" type='email' placeholder='John@example.com' onChange={formik.handleChange} value={formik.values.email} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block ' /></div>
                    {formik.touched.email && formik?.errors?.email}
                    <div className=' my-[.4rem] h-[4rem]'><input name="password" type='password' placeholder='password' onChange={formik.handleChange} value={formik.values.password} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block '  /></div>
                    {formik.touched.password && formik?.errors?.password}
                    <div className=' my-[.4rem] h-[4rem]'><input name="confirmPassword" type='password' placeholder='Confirm Password' onChange={formik.handleChange} value={formik.values.confirmPassword} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block '  /></div>
                    {formik.touched.confirmPassword && formik?.errors?.confirmPassword}
                    <div className=' my-[.4rem] h-[4rem]'><input name="device_name" type='text' placeholder='Your Full device name' onChange={formik.handleChange} value={formik.values.device_name} className='p-[1rem] my-[.9rem] w-[28rem] border-none outline-none max-h-[100%] h-[100%] field block '  /></div>
                    <button type='submit' className='flex items-center mt-[2rem] '><p>Register</p> <p  className=' flex items-center  bg-orange-400 rounded-full text-white text-right justify-end p-[.1rem] ml-[.5rem] hover:ml-[.8rem] transition-all duration-150' ><FaLongArrowAltRight className='block  ' /></p></button>                    
                </>
        </form>
        <p className='mt-[1rem]'>Dont have account ? <Link to='/login'>lOGIN</Link></p>
      </div>
      
    </div>
  )
}

export default SignupPage;
