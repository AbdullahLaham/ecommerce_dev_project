
import { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import '../slider/slider.css';
import './Products.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mobile from '../../images/mobile.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import ProductComponent from './ProductComponent';
const LatestProducts = ({products}) => {
    // const products = [0,0,0,0,0,0,0,0,0,0];
    const isNonMobile = useMediaQuery("(min-width: 800px)");
    const isDisktop = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
        <Box sx={{ backgroundColor: 'white', borderRadius: '3px', width: '90%', marginX: 'auto', marginTop: '1.5rem', }}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingY: '1rem', }}>
                <Typography sx={{fontSize: '1.5rem', textAlign:'start', ml:'5rem', borderBottom: '2px solid orange', }}>
                    Latest Products
                </Typography>
                <Button variant='contained' sx={{backgroundColor:'green'}}>
                    View All Products
                </Button>
                
            </Box>
            <hr className='py-[1rem]'></hr>
            
            <div className='flex flex-col justify-between p-[1rem]  m-auto'>
                <Swiper className="slider slider-products items-center flex h-[25rem]"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={isDisktop ? 4 : isNonMobile ? 2 : 1}
                    
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <div className='products-list mx-auto' >
                {
                    products?.map((product) => {
                            
                    return (
                        <SwiperSlide>
                            <ProductComponent ourProduct={product} />
                        </SwiperSlide>
                        
                    )
                    })
                }
                </div>
            </Swiper>
            </div>
        </Box>
    </div>
  )
}

export default LatestProducts