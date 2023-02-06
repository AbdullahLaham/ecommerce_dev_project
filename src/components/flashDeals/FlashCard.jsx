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
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, fetchWishlistItems } from "../../actions/general";
import { ADD_TO_CART } from "../../constants";
import { useSnackbar } from "notistack";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashComponent from "./FlashComponent";

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
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 800px)");
  const isDisktop = useMediaQuery("(min-width: 1000px)");
  const {whislistItems} = useSelector((state) => state?.generalReducer);

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
        {products?.map((productItem, i) => {
          
          return (
            <FlashComponent productItem={productItem} />
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard;

