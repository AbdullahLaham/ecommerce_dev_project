import React, { useState } from 'react'
import { Button, Rating, useMediaQuery } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import "./localStyle.css"
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, fetchWishlistItems } from "../../actions/general";
import { ADD_TO_CART } from "../../constants";
import { useSnackbar } from "notistack";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



const FlashComponent = ({productItem}) => {

    const {whislistItems, cart} = useSelector((state) => state?.generalReducer);
    const {name, original_price, selling_price, slug, product_image, id} = productItem;
    const current_product_image = product_image[0];
    const {image} = current_product_image;
    const index = whislistItems?.length ? whislistItems?.findIndex((item) => item?.product?.id == id) : -1;

    // navigate
    const navigate = useNavigate();
    // dispatch
    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery("(min-width: 800px)");
    const isDisktop = useMediaQuery("(min-width: 1000px)");
    
    

    const { enqueueSnackbar } = useSnackbar();

    const addProductToWishist = (id) => {
        dispatch(fetchWishlistItems());
        dispatch(addToWishlist(id, enqueueSnackbar));
    }
    // add to cart function 
    const addProductToCart = () => {
        const index = cart.findIndex((cartItem) => cartItem?.id == productItem?.id);
        dispatch({type: ADD_TO_CART, payload: productItem});
        if (index >= 0) {
            enqueueSnackbar('Product added to cart succesfully', {variant: 'success',});
        } else {
            enqueueSnackbar('Product quantity in cart increased 1', {variant: 'success',});
        }
    }
    const [selected, setSelected] = useState(false);
  return (
    <div className='box'>
        <div className='product mtop'>
        <div className='img'>
            <span className='discount'>In Stock</span>
            <img src={`https://applabb.account-collection.com/${image}`} className='' alt='' />
            <div className='product-like'>
                <label>0</label> <br />
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
            
            </div>
            <div className='flex items-center justify-end controls'>
                <button onClick={() => navigate(`/product/${slug}`)}><VisibilityOutlinedIcon /></button>
                <button onClick={() => addProductToCart()}><AddIcon /></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FlashComponent;