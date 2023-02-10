import { Button, Rating } from '@mui/material';
import React, { useState } from 'react'
import '../containers/FilterProducts/filter.css';
import './flashDeals/localStyle.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
// import './flashDeals/localStyle.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishlist, fetchWishlistItems } from '../actions/general';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ADD_TO_CART } from '../constants';

const ListProductsComp = ({product}) => {
  const {name, selling_price, original_price, product_image, category, slug, id} = product;
  const {  cart, whislistItems } = useSelector((state) => state?.generalReducer);
  const {image} = product_image[0];
   // navigate
   const navigate = useNavigate();
   // dispatch
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();

  const addProductToWishist = () => {
    dispatch(fetchWishlistItems());
    dispatch(addToWishlist(id, enqueueSnackbar));
  }

  const addProductToCart = () => {
    const index = cart.findIndex((cartItem) => cartItem?.id == product?.id);
    const cartProduct = {
      id: product?.id,
      name: product?.name,
      image,
      original_price,
      selling_price,
    }
    console.log(cartProduct, 'cartProduct');
    dispatch({type: ADD_TO_CART, payload: cartProduct});
    if (index != -1) {
        enqueueSnackbar('Product added to cart succesfully', {variant: 'success',});
    } else {
        enqueueSnackbar('Product quantity in cart increased 1', {variant: 'success',});
    }
}
  // index in wishlist
  const index = whislistItems?.length ? whislistItems?.findIndex((item) => item?.product?.id == id) : -1;

  const [selected, setSelected] = useState(false);
  return (
    <div class="col-lg-12 col-md-12 col-12 ">
      {/* <!-- Start Single Product --> */}
      <div class="single-product">
          <div class="row align-items-center relative">
            
              <div class="col-lg-4 col-md-4 col-12 ">
                <div className='absolute top-0 right-[1rem]'> 
                {index != -1 || selected  ? <FavoriteIcon sx={{fill: 'red'}} /> : <FavoriteBorderIcon  sx={{fill: 'red'}} onClick={() => {addProductToWishist(id); setSelected(true);}} /> }
                    </div>
                  <div class="h-[100%] ">
                    <img src={`https://applabb.account-collection.com/${image}`} className='min-h-[85%] max-h-[85%] block m-auto' alt="#" />
                  </div>
              </div>
              <div class="col-lg-8 col-md-8 col-12">
                  <div class="product-info text-start">
                      <div className=''>
                        <span class="category text-[1.2rem]">{category?.name}</span>
                        <h4 class="title">
                            <p>{name}</p>
                        </h4>
                      </div>
                      <div class="review text-start">
                          <Rating value={4} readonly  />
                          <span>4.0 Review(s)</span>
                      </div>
                      <div class="price text-start">
                          <span>${selling_price}</span>
                          <span class="discount-price">${original_price}</span>
                      </div>
                      <div className='price'>
                        <button className='mr-[.5rem]' onClick={() => addProductToCart()}><AddIcon /></button>
                        <button onClick={() => navigate(`/product/${slug}`)}><VisibilityOutlinedIcon /></button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- End Single Product --> */}
  </div>
  )
}

export default ListProductsComp;

{/* <div class="button">
                          <Link to={`/product/${slug}`} >
                            <Button sx={{width: '10rem', display: 'flex', alignItems: 'center', }} variant='contained'><ShoppingCartOutlinedIcon sx={{fontSize:'1.3rem'}} mr='1rem' /> Add to Cart</Button>
                          </Link>
                      </div> */}