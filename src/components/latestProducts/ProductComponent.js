import { Box, Button, Paper, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import mobile from '../../images/mobile.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../actions/general';
const ProductComponent = ({ourProduct}) => {
  const {name, original_price, selling_price, slug, product_image} = ourProduct;
  const current_product_image = product_image[0];
  const {image} = current_product_image;

  const [productImage, setProductImage] = useState(null);
  // dispatch
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProductDetails(slug));
  // })
  // const {product} = useSelector((state) => state?.generalReducer);
  // const {product_image} = product;
  return (
    <Paper>
        <img className='w-[12rem] h-[12rem] object-cover  m-auto select-none' src={`https://applabb.account-collection.com/${image}`} />
        <Typography sx={{display: 'flex', justifyContent: 'start', marginLeft: '1rem', fontSize: '1.5rem', height: '2rem'}}>{name}</Typography>
        <Typography textAlign='start' marginLeft='1rem' fontSize='1.5rem' marginTop= '1rem'>{selling_price}$ <sub className='line-through	'>{original_price}$</sub></Typography>
        <Box className='flex items-center justify-between mx-[1rem]'>
            <Rating sx={{display: 'flex', justifyContent: 'start'}}  value={5} readonly  />
            <ShoppingCartOutlinedIcon sx={{fontSize: '2rem'}} />
        </Box>
        <Button variant='contained' sx={{width: '100%', backgroundColor: 'orange'}} >Details</Button>
    </Paper>
  )
}

export default ProductComponent;