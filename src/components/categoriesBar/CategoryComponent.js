import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import mobile from '../../images/mobile.png'
const CategoryComponent = ({ category }) => {
  const {name, description, image} = category;

  return (
      <Paper sx={{display: 'flex', flexDirection: 'column', width:'17rem', marginX: 'auto', }}>
        {/* category image */}
        <div className='	bg-blue-500 b-[1px] border-solid rounded-[1.5rem] rounded-br-[0rem] w-[100%] flex items-center justify-between h-[14rem]'>
          <div className='mx-auto flex items-center justify-between w-[10.5rem] h-[10.5rem] bg-white rounded-[2rem] m-[1rem]'>
            <img src={`https://applabb.account-collection.com/uploads/category/${image}`} className='mx-auto border border-blue w-[10rem] h-[10rem] rounded-[2rem]' />
          </div>
        </div>
        {/* category name */}
        <Box sx={{}} borderRadius='1.5rem'>
          <Typography sx={{textAlign: 'center', marginY: '.2rem'}} pu='.5rem'>{name}</Typography>
          {/* category Description */}
          <Typography sx={{textAlign: 'center', marginY: '.2rem'}} pu='.5rem'>{description}</Typography>
          <Button variant='contained' sx={{marginY: '.7rem'}}>View More</Button>
        </Box>
      </Paper>
      
  )
}

export default CategoryComponent