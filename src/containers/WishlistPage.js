import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishlist, fetchWishlistItems } from '../actions/general';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSnackbar } from 'notistack';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const WishlistPage = () => {
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isdelete, setDelete] = useState(false);

  const deleteItemFromWishlist = (id) => {
    dispatch(deleteFromWishlist(id, enqueueSnackbar));
  }

  const {whislistItems} = useSelector((state) => state?.generalReducer);

   useEffect(() => {
    dispatch(fetchWishlistItems());
  } ,[isdelete]);
  
  console.log('dd', whislistItems);

  return (
    <div>
        <h3 className='text-3rem text-start pl-[2rem] flex items-center gap-2'> <FavoriteBorderIcon sx={{fill: 'red', fontSize: '1.8rem', }} /> Wishlist Page</h3>
        <div className='flex flex-wrap '>
          { whislistItems?.map((item) => {
          const {product: {name, price, original_price, selling_price, slug, product_image}} = item;
          const current_product_image = product_image[0];
            const {image} = current_product_image;
          // console.log(product);
              return (
                <div className='box flex flex-wrap'>
                <div className='product mtop'>
                  <div className='img'>
                    <span className='discount'>{original_price}% Off</span>
                    <img src={`https://applabb.account-collection.com/${image}`} className='lg:w-[12rem] md:w-[15rem] w-[100%] ' alt='' />
                    {/* <div className='product-like'>
                      <label>{count}</label> <br />
                      <FavoriteBorderIcon sx={{color: 'red',}} onClick={() => addProductToWishist(id)} />
                    </div> */}
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
                      
                    </div>
                    <div className='flex items-center justify-end controls'>
                      <button className='' onClick={() => navigate(`/product/${slug}`)}><VisibilityOutlinedIcon /></button>
                      <button className='' onClick={() =>{ deleteItemFromWishlist(item?.id); setDelete(true)}}><DeleteOutlinedIcon /></button>
                    </div>
                  </div>
                </div>
              </div>
              )
          })}
        </div>
    </div>
    
  )
}

export default WishlistPage