import React from 'react'
import { useState } from 'react';
import {GrClose} from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { DELETE_FROM_CART, UPDATE_CART_ITEM } from '../constants';
// import {updateProductCount, removeFromCart} from '../redux/cart/cartActions'
const CartComponent = ({product}) => {
  // counter state
  const [counter, setCounter] = useState(product?.qty);
  const dispatch = useDispatch();
  const updateQuantity = () => {
    const newCartComponent = {...product, qty: counter + 1}
    dispatch({type: UPDATE_CART_ITEM, payload: newCartComponent});
  }
  const deleteFromCart = () => {
    dispatch({ type: DELETE_FROM_CART, payload: product })
  }



  return (
    <div className='flex w-[80%] justify-between mx-auto border border-gray-300 p-[.5rem] '>
      <div className='flex gap-3 items-center'>
        <img src={product.image} className='w-[5rem] bg-gray-300 p-[1rem]' />
        <p className='w-[10rem]'>{product?.name}</p>
        <div className='flex  '>
          <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem]  w-[2.3rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter-1 < 1 ? 1 : counter-1); updateQuantity()} }>-</p>
          <p className='p-[.3rem] border flex items-center- justify-center h-[2.5rem] w-[2.3rem] border-gray-300 '>{counter}</p>
          <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem] w-[2.3rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter+1 > product?.supply ? product?.supply : counter+1); updateQuantity()}}>+</p>
        </div>
      </div>
      <div className='flex gap-6 items-center'>
        <p className='text-green-600 text-xl'>{product?.price}</p>
        <button className='text-red-600 font-bold text-xl cursor-pointer' style={{color: 'red', }} onClick={() => deleteFromCart(product)}>x</button>
      </div>
    </div>

  )
}

export default CartComponent
