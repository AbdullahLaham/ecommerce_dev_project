import { Box } from '@mui/material'
import React from 'react'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestProducts from '../components/latestProducts/LatestProducts'

const HomePage = () => {
  return (
    <Box sx={{maxWidth: '100%',}}>
      <Header />
      <CategoriesBar />
      <LatestProducts />
      <Footer />
    </Box>
  )
}

export default HomePage
