import { Button, InputBase, TextField } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png'
import google from '../images/Google_Play_Store_badge_EN.svg.png';
import apple from '../images/Available_on_the_App_Store_logo.png'
const Footer = () => {
  return (
    <>
      <div className='flex justify-center py-[1rem] border-t-2 border-b-2 border-t-gray-300 border-b-gray-300 text-gray-600 bg-gray-800 text-white '>
      <div className='flex flex-col lg:flex-row justify-between w-[85%]'>
        <div className='flex flex-col h-[10rem] justify-around w-[100%] lg:w-auto'>
          <img className='w-[20rem]' src={logo} />
          <div className='w-[20rem] flex items-center h-[2rem]'><InputBase sx={{height: '100%', backgroundColor: 'white', borderRadius: '.2rem', padding: '1rem'}} my='.5rem' placeholder='Your Email Address' /> <Button sx={{color: 'white', backgroundColor: 'orange', height: '100%'}}>Subscribe</Button></div>
          <div className='w-[20rem] text-[.9rem] flex items-center'><img className='w-[10rem] mr-[.5rem]' src={google} /> <img className='w-[10rem] ' src={apple} /></div>
        </div>


        <div className='justify-between flex flex-col lg:flex-row text-[.9rem]'>
        <div className='w-[100%] lg:w-auto flex m-auto text-start'>
            <div className='flex flex-col  lg:w-[13rem] w-[100%]  justify-between'>
              <p className='font-bold text-white'>CONTACT INFO</p>
              <p className='text-gray'>Address: </p>
              <p>Address </p>
              <p className='text-gray'>Phone: </p>
              <p>Phone </p>
              <p className='text-gray'>Email: </p>
              <p>info@mail.js</p>
            </div>
            <div className='flex  flex-col lg:w-[13rem] w-[100%]  justify-between'>
              <p className='font-bold text-white'>ZXCZXC</p>
              <p>Home</p>
              <p>New arrival</p>
              <p className=''>Mobiles</p>
            </div>
            <div className='flex  flex-col  lg:w-[13rem] w-[100%]  justify-between'>
              <p className='font-bold text-white'>MY ACCOUNT</p>
              <p className='text-gray'>Login </p>
              <p className='text-gray'>Order History</p>
              <p className='text-gray'>My Wishlist</p>
              <p className='text-gray'>Track Order</p>
            </div>
          </div>


        </div>
      </div>

      
    </div>

    </>
  )
}

export default Footer;