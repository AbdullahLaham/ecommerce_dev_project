import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Checkbox from '../components/Checkbox'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, fetchProductDetails} from '../actions/general';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import './FilterProducts/filter.css'
import { Rating } from '@mui/material'
const ProdDetails = () => {
    const {slug} = useParams();
    const { product } = useSelector((state) => state?.generalReducer);
    
    const {name, small_description, description, original_price, selling_price, quantity, category, product_image} = product;
    const {image} = product_image ? product_image[0] : {};
    const [currentImage, setCurrentImage] = useState(image);
    const [counter, setCounter] = useState(quantity);
    // navigate
    console.log('prod', product);
    const navigate = useNavigate();
    // // dispatch
    const dispatch = useDispatch();
    const updateQuantity = () => {
        const newCartComponent = {...product, quantity: counter + 1}
        // dispatch({type: UPDATE_CART_ITEM, payload: newCartComponent});
    }
    const addProductToCart = async () => {
        dispatch(addToCart(product));
        navigate('/cart');
    }
        
    useEffect(() => {
       dispatch(fetchProductDetails(slug));
    }, [slug]);
    useEffect(() => {
        setCurrentImage(image);
        // setCounter(quantity)
    })


  return (
    <section class="item-details section">
        <div class="container">
            <div class="top-area">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-images">
                            <main id="gallery">
                                <div class="main-img">
                                    <img src={`https://applabb.account-collection.com/${currentImage}`} id="current" alt="#" />
                                </div>
                                <div class="images">
                                    {product_image && product_image?.map((img) => {
                                        return (
                                            // <img className='w-[3.5rem] h-[3.5rem] md:w-[8rem] md:h-[8rem]  shadow-lg shadow-gray-400 p-[.3rem] mr-[.1rem] cursor-pointer prounded-[11px]' src={`https://applabb.account-collection.com/${img?.image}`}  />
                                            <img src={`https://applabb.account-collection.com/${img?.image}`} onClick={() => setCurrentImage(img?.image)} class="img" alt="#" />
                                        )
                                    })}
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12 ">
                        <div class="product-info">
                            <h2 class="title text-start">{name}</h2>
                            <p class="category text-start"><CollectionsBookmarkOutlinedIcon /> {category?.name}: {small_description}</p>
                            <h3 class="price text-start">${selling_price}<span>${original_price}</span></h3>
                            <p class="info-text text-start">{description}</p>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12">
                                    <div class="form-group color-option">
                                        <label class="title-label" for="size">Choose color</label>
                                        <div class="single-checkbox checkbox-style-1">
                                            <input type="checkbox" id="checkbox-1" checked />
                                            <label for="checkbox-1"><span></span></label>
                                        </div>
                                        <div class="single-checkbox checkbox-style-2">
                                            <input type="checkbox" id="checkbox-2" />
                                            <label for="checkbox-2"><span></span></label>
                                        </div>
                                        <div class="single-checkbox checkbox-style-3" >
                                            <input type="checkbox" id="checkbox-3" />
                                            <label for="checkbox-3"><span></span></label>
                                        </div>
                                        <div class="single-checkbox checkbox-style-4" >
                                            <input type="checkbox" id="checkbox-4" />
                                            <label for="checkbox-4"><span></span></label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-8 col-md-8 col-12">
                                    <div className='flex '>
                                        <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem]  w-[2.3rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter-1 < 1 ? 1 : counter-1); updateQuantity()} }>-</p>
                                        <p className='p-[.3rem] border flex items-center- justify-center h-[2.5rem] w-[2.3rem] border-gray-300 '>{counter}</p>
                                        <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem] w-[2.3rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter+1 > quantity ? quantity : counter+1); updateQuantity()}}>+</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-content">
                                <div class="row align-items-end">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="button cart-button">
                                            <button class="btn" >Add to Cart</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="wish-button">
                                            <button class="btn"><i class="lni lni-reload"></i> Compare</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="wish-button">
                                            <button class="btn"><i class="lni lni-heart"></i> To Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-details-info">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="single-block give-review">
                            <h4>4.5 (Overall)</h4>
                            <div className='flex items-center'>
                                <span className='block mr-[.5rem]'>5 stars - 38</span>
                                <Rating value={5} readOnly />
                            </div>
                            <div className='flex items-center'>
                                <span className='block mr-[.5rem]'>4 stars - 10</span>
                                <Rating value={5} readOnly />
                            </div>
                            <div className='flex items-center'>
                                <span className='block mr-[.5rem]'>3 stars - 3</span>
                                <Rating value={5} readOnly />
                            </div>
                            <div className='flex items-center'>
                                <span className='block mr-[.5rem]'>2 stars - 1</span>
                                <Rating value={5} readOnly />
                            </div>
                            <div className='flex items-center'>
                                <span className='block mr-[.5rem]'>1 stars - 0</span>
                                <Rating value={5} readOnly />
                            </div>
                            
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn review-btn" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Leave a Review
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-8 col-12">
                        <div class="single-block">
                            <div class="reviews">
                                <h4 class="title">Latest Reviews</h4>
                                {/* <!-- Start Single Review --> */}
                                <div class="single-review">
                                    <img src="https://via.placeholder.com/150x150" alt="#" />
                                    <div class="review-info">
                                        <h4>Awesome quality for the price
                                            <span>Jacob Hammond
                                            </span>
                                        </h4>
                                        <ul class="stars">
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor...</p>
                                    </div>
                                </div>
                                {/* <!-- End Single Review -->
                                <!-- Start Single Review --> */}
                                <div class="single-review">
                                    <img src="https://via.placeholder.com/150x150" alt="#" />
                                    <div class="review-info">
                                        <h4>My husband love his new...
                                            <span>Alex Jaza
                                            </span>
                                        </h4>
                                        <ul class="stars">
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star"></i></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor...</p>
                                    </div>
                                </div>
                                {/* <!-- End Single Review -->
                                <!-- Start Single Review --> */}
                                <div class="single-review">
                                    <img src="https://via.placeholder.com/150x150" alt="#" />
                                    <div class="review-info">
                                        <h4>I love the built quality...
                                            <span>Jacob Hammond
                                            </span>
                                        </h4>
                                        <ul class="stars">
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                            <li><i class="lni lni-star-filled"></i></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor...</p>
                                    </div>
                                </div>
                                {/* <!-- End Single Review --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProdDetails