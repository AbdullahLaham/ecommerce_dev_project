
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
import { Box, Typography, useMediaQuery } from '@mui/material';
const CategoriesBar = ({categories}) => {
  // fetching featured products
  const isNonMobile = useMediaQuery("(min-width: 800px)");
  const isDisktop = useMediaQuery("(min-width: 1000px)");
  return (
    <Box sx={{ backgroundColor: 'white', borderRadius: '3px', width: '90%', marginX: 'auto', marginTop: '1.5rem', }}>
      <Typography sx={{fontSize: '1.5rem', textAlign:'start', ml:'5rem'}}>Our Categories : </Typography>
      <div className='flex flex-col justify-between p-[1rem]  m-auto'>
        <Swiper className="slider slider-products items-center flex h-[25rem]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={isDisktop ? 3 : isNonMobile ? 2 : 1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <div className='products-list mx-auto' >
        {
            categories?.map((category) => {
                    
              return (
                <SwiperSlide>
                  <CategoryComponent category={category}  />
                </SwiperSlide>
                
              )
            })
          }
        </div>
      </Swiper>
      </div>
    </Box>
  )
}

export default CategoriesBar;
