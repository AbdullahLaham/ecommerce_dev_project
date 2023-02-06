import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { fetchLatestProducts, getCategories, getHomePageSlider } from '../actions/general'
import BottomMenue from '../components/BottomMenue'
import BottomNav from '../components/BottomNav'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestProducts from '../components/latestProducts/LatestProducts'
import SliderHome from '../components/productsSlider/Slider'
import AccountSidebarComponent from '../components/AccountSidebarComponent'
import TopCate from '../components/top/TopCate'
const HomePage = ({showAccountSidebar, setShowAccountSidebar}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestProducts());
    dispatch(getCategories());
    dispatch(getHomePageSlider());
  }, []);
  const {products} = useSelector((state) => state?.generalReducer);
  const {categories} = useSelector((state) => state?.generalReducer);
  console.log('prod', categories);
  return (
    <Box sx={{maxWidth: '100%', }} mx='auto' minWidth='100%' >
      <Box sx={{backgroundColor: '#F5F5F5', paddingTop: '1rem',}}>
        
        <SliderHome />
        <TopCate />
        {/* <CategoriesBar categories={categories} /> */}
        <FlashDeals products={products} />
        <BottomNav />
        
      </Box>
      
      
    </Box>
  )
}

export default HomePage
