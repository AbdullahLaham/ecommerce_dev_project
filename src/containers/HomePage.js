import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProducts, getCategories } from '../actions/general'
import BottomMenue from '../components/BottomMenue'
import BottomNav from '../components/BottomNav'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestProducts from '../components/latestProducts/LatestProducts'

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestProducts());
    dispatch(getCategories());
  }, []);
  const {products} = useSelector((state) => state?.generalReducer);
  const {categories} = useSelector((state) => state?.generalReducer);
  console.log('prod', categories);
  return (
    <Box sx={{maxWidth: '100%',}}>
      <Header />
      <Box sx={{backgroundColor: '#F5F5F5', paddingTop: '1rem', position: 'relative'}}>
        <CategoriesBar categories={categories} />
        <LatestProducts products={products} />
        <BottomNav />
        <Footer />
        <BottomMenue />
      </Box>
      
      
    </Box>
  )
}

export default HomePage
