
import CategoryComponent from './CategoryComponent';
import { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import '../slider/slider.css';
import './category.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mobile from '../../images/mobile.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typography, useMediaQuery } from '@mui/material';
const CategoriesBar = () => {
  // fetching featured products
  const products = [0,0,0,0,0,0,0,0,0,0];
  const isMediumScreen = useMediaQuery("min-width: ");
  
  return (
    <div>
      <Typography sx={{fontSize: '1.5rem', textAlign:'start', ml:'5rem', textDecoration: 'underline', textDecorationColor: 'red',}}>Our Categories : </Typography>
      <div className='flex flex-col justify-between p-[1rem]  m-auto'>
        <Swiper className="slider slider-products items-center flex h-[25rem]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <div className='products-list mx-auto' >
        {
            products?.map((product) => {
                    
              return (
                <SwiperSlide>
                  <CategoryComponent />
                </SwiperSlide>
                
              )
            })
          }
        </div>
      </Swiper>
      </div>
    </div>
  )
}

export default CategoriesBar;
