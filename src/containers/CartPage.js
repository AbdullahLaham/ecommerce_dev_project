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
    <div>
      <Header />
      {cart?.length > 0 ? (
        <div className='pt-[10rem]'>
        <p className='ml-[8.5rem] flex gap-1 items-center cursor-pointer mb-[.7rem]' onClick={() => navigate(-1)}><TbArrowNarrowLeft /> Return to the product details</p>
        {cart?.length && cart?.map((item) => {
          return (
            <CartComponent product={item}/>
          )
        })}
        <hr className='my-[1rem]' />
        <Link to='/payment' className='w-[80%] mx-auto mb-[1rem] flex justify-end'><button className=' rounded-md bg-orange-600 text-[#fff] p-[.5rem] hover:bg-opacity-[.8] cursor-pointer' onClick={() => addProductsToTheCart()}>Go To Payment</button></Link>
      </div>
      ) : <div className='pt-[10rem] h-[70vh] flex flex-col items-center justify-center'>
          <p className='text-[#af2e2e] text-3xl '>The Cart is Empty </p>
          <Link to='/' className='bg-[#af2e2e] text-white mt-[1rem] rounded-lg p-[.7rem] cursor-pointer'>
            Go To Buy 
          </Link>
        </div>}

      <Footer />
    </div>
  )
}

export default CartPage
