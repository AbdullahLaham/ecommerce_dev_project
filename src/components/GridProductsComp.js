import { Button, Rating } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../containers/FilterProducts/filter.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './flashDeals/localStyle.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useSnackbar } from 'notistack';
import { addToWishlist, fetchWishlistItems } from '../actions/general';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';

const GridProductsComp = ({product}) => {
    // console.log('listProd', product);
    const {name, selling_price, product_image, original_price , category, slug, id} = product;
    // index in wishlist
    const {whislistItems} = useSelector((state) => state?.generalReducer);
    const index = whislistItems.findIndex((item) => item?.product?.id == id);

    const {image} = product_image[0]; 
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    // dispatch
   const dispatch = useDispatch();

    const addProductToWishist = () => {
      // dispatch(fetchWishlistItems());
      dispatch(addToWishlist(id, enqueueSnackbar));
      
    }
    const addProductToCart = () => {
      
    }
    const [selected, setSelected] = useState(false);
  return (
    <div class="col-lg-4 col-md-6 col-12">
        
        {/* <!-- Start Single Product --> */}
        <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{original_price}% Off</span>
                  <img src={`https://applabb.account-collection.com/${image}`} className='' alt='' />
                  <div className='product-like'>
                    {/* <label>{count}</label> <br /> */}
                    {index != -1 || selected ? <FavoriteIcon sx={{fill: 'red'}} /> : <FavoriteBorderIcon  sx={{fill: 'red'}} onClick={() => {addProductToWishist(id); setSelected(true);}} /> }
                  </div>
                </div>
                <div className='product-details'>
                  <p className="text-start mb-0 mt-[.5rem] pl-[.4rem]">{name}</p>
                  <div className='rate'>
                    <Rating  sx={{textAlign: 'start', display: 'flex', justifyContent: 'start',my:'.5rem'}}  value={4} readOnly />
                  </div>
                  <div className='price'>
                    <h4>{selling_price}$ <sub className='line-through	'>{original_price}$</sub></h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addProductToCart()}><AddIcon /></button>
                    <button onClick={() => navigate(`/product/${slug}`)}><VisibilityOutlinedIcon /></button>
                  </div>
                </div>
              </div>
            </div>
        {/* <!-- End Single Product --> */}
    </div>
  )
}

export default GridProductsComp