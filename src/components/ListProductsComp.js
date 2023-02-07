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

const ListProductsComp = ({product}) => {
  const {name, selling_price, original_price, product_image, category, slug, id} = product;
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
      
  }
  // index in wishlist
  const {whislistItems} = useSelector((state) => state?.generalReducer);
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
                  <div class="product-image">
                    <img src={`https://applabb.account-collection.com/${image}`} className='min-h-[8rem] max-h-[6.5rem]' alt="#" />
                    
                      
                  </div>
              </div>
              <div class="col-lg-8 col-md-8 col-12">
                  <div class="product-info text-start">
                      <span class="category">{category?.name}</span>
                      <h4 class="title">
                          <a href="product-grids.html">{name}</a>
                      </h4>
                      <ul class="review text-start">
                          <Rating value={4} readonly  />
                          <li><span>4.0 Review(s)</span></li>
                      </ul>
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