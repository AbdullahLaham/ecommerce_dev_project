import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Checkbox from '../components/Checkbox'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductDetails} from '../actions/general';
import { ADD_TO_CART } from '../constants'

const ProductDetails = () => {
    // const profile = useSelector((state) => state.login.data);
    // const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    const {slug} = useParams();
    const { product } = useSelector((state) => state?.generalReducer);
    console.log('prod', product);
    const {name, small_description, description, original_price, selling_price, quantity, category, product_image} = product;
    const current_product_image = product_image[0];
    const {image} = current_product_image;
    const [currentImage, setCurrentImage] = useState(image);
    // navigate
    const navigate = useNavigate();
    // // dispatch
    const dispatch = useDispatch();
    
    const addProductToCart = () => {
        dispatch({type: ADD_TO_CART, paylod: product});
        navigate('/cart');
    }
        
    useEffect(() => {
       dispatch(fetchProductDetails(slug));
    }, [slug]);
    return (
        <>
            <div className='p-[.7rem] flex flex-col lg:flex-row justify-around w-[100%] h-[100vh] mb-[1rem]'>
                <div className='w-[100%] md:mt-[13rem] mt-[32rem]  lg:w-[35%] lg:mt-[5.5rem]'>
                    <div className='h-[22rem] pt-[6rem] lg:pt-[3.5rem] border shadow-lg shadow-gray-400  p-[.8rem] rounded-[7px] '>
                        <img src={`https://applabb.account-collection.com/${currentImage}`} className='w-[100%] h-[100%] max-h-[15rem] mx-auto -mt-[3rem] ' />
                    </div>
                    <div className='flex w-[100%] justify-between items-center mt-[.5rem]'>
                        {product_image && product_image?.map((img) => {
                            return (
                                <img className='w-[3.5rem] h-[3.5rem] md:w-[8rem] md:h-[8rem]  shadow-lg shadow-gray-400 p-[.3rem] mr-[.1rem] cursor-pointer prounded-[11px]' src={`https://applabb.account-collection.com/${img?.image}`} onClick={() => setCurrentImage(img?.image)} />
                            )
                        })}
                    </div>

                </div>
                <div className='w-[100%] mt-[1rem] lg:w-[44%] lg:mt-[5.5rem]'>
                    <p className='text-4xl font-bold  mb-[1rem]'>{product?.name}</p>
                    <p className='text-gray-400  mb-[1rem]'>{product?.description}</p>
                    <p className='flex mb-[1rem] text-gray-500 '>Availability in stock: {quantity > 0 ? <p className='text-green-600 pl-[.5rem]'>Available : {quantity}</p> : <p className='text-red-600'>Not Available</p>}</p>
                    <hr />
                    <p className='mb-[1rem] text-gray-500'>Choose your combination</p>
                    <div className='flex w-[100%] justify-around mb-[1rem]'>
                        {
                            product?.colors && product?.colors?.map((color, i) => {
                                return (
                                    <div className='flex flex-col justify-center mb-[1rem]'>
                                        <label for={`color${i}`} className='flex w-[4rem]'>
                                            <div style={{ background: ` ${color?.one}` }} className={`w-[5rem] h-[3rem]`}></div>
                                            <div style={{background: `${color?.two}`}} className={` w-[5rem] h-[3rem]`}></div>
                                        </label>
                                        <input type='radio' id={`color${i}`}  name="fav_language" value={color} className='block mt-[.6rem]' />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr />
                    <p className='text-gray-500'>Size And Weight</p>
                        <Checkbox data={product?.size} />
                    <p className='text-gray-500'>Chip</p>
                    <Checkbox data={product?.categories} />
                    <p className='text-gray-500'>Storage</p>
                    <Checkbox data={product?.categories} />
                    <p className='text-gray-500'>Memory</p>
                    <Checkbox data={product?.memory} />
                    <button className='mb-[2rem] w-[100%] h-[2rem] pb-[.8rem] text-center bg-orange-500 text-white' onClick={addProductToCart}>Add To Cart</button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default ProductDetails
