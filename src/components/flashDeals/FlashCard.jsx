import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Button, Rating, useMediaQuery } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import "./localStyle.css"
import { useDispatch } from "react-redux";
import { addToWishlist, fetchWishlistItems } from "../../actions/general";
import { ADD_TO_CART } from "../../constants";
import { useSnackbar } from "notistack";


const SampleNextArrow = (props) => {
  // navigate
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <ArrowRightAltOutlinedIcon my='auto' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <KeyboardBackspaceOutlinedIcon my='auto' />
      </button>
    </div>
  )
}


const FlashCard = ({products}) => {
  const [count, setCount] = useState(0);
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 800px)");
  const isDisktop = useMediaQuery("(min-width: 1000px)");
  
  const increment = () => {
    setCount(count + 1)
  }
  // add to cart function 
  const addToCart = (product) => {
    dispatch({type: ADD_TO_CART, payload: product});
  }
  const { enqueueSnackbar } = useSnackbar();
  const addProductToWishist = (id) => {
    dispatch(fetchWishlistItems());
    dispatch(addToWishlist(id, enqueueSnackbar));
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: isDisktop ? 4 : isNonMobile ? 2 : 1,
  }

  return (
    <>
      <Slider {...settings}>
        {products?.map((productItem) => {
          const {name, original_price, selling_price, slug, product_image, id} = productItem;
          const current_product_image = product_image[0];
          const {image} = current_product_image;
          
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{original_price}% Off</span>
                  <img src={`https://applabb.account-collection.com/${image}`} className='' alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <FavoriteBorderIcon onClick={() => addProductToWishist(id)} />
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
                    <button onClick={() => navigate(`/product/${slug}`)}><AddIcon /></button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard;

