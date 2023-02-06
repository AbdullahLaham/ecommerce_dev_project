import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CartComponent from '../components/CartComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {TbArrowNarrowLeft} from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const CartPage = () => {
  const {cart} = useSelector((state) => state.generalReducer);
  console.log('cart')
  console.log('cart', cart);
  // navigate
  const navigate = useNavigate();
  // const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
  // addProductsToTheCart function
  const addProductsToTheCart = () => {
    console.log('cart', cart);
    // "qty": item?.qty ? item?.qty < item?.countInStock ? item?.qty : item?.countInStock :  1,

    cart?.length && cart?.map((item, i) => {
        const addToCart = async () => {

        }
        addToCart();
    })
  }


  return (
    <div className='ml-[2.5rem] w-[100%] pt-[2rem] '>
      
      {cart?.length > 0 ? (
        <div className='mx-auto'>
        <p className=' flex gap-1 items-center cursor-pointer mb-[.7rem]' onClick={() => navigate(-1)}><TbArrowNarrowLeft /> Return to the product details</p>
        {cart?.length && cart?.map((item) => {
          return (
            <CartComponent product={item}/>
          )
        })}
        <hr className='my-[1rem]' />
        <Link to='/payment' className='w-[80%] mx-auto mb-[1rem] flex justify-end'><button className=' rounded-md bg-orange-600 text-[#fff] p-[.5rem] hover:bg-opacity-[.8] cursor-pointer' onClick={() => addProductsToTheCart()}>Go To Payment</button></Link>
      </div>
      ) : <div className='min-w-[100%] h-[100%] m-auto flex flex-col items-center justify-center '>
          <p className='text-[#af2e2e] text-3xl '>The Cart is Empty </p>
          {/* <button onClick={() => navigate('/grid')}>
            <p className='bg-[#af2e2e] text-white mt-[1rem] rounded-lg p-[.7rem] cursor-pointer'>
              Go To Buy 
            </p>
          </button> */}
        </div>}


      {/* <Footer /> */}
    </div>
  )
}

export default CartPage
