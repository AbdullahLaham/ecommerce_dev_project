import { Button, Rating } from '@mui/material';
import React from 'react'
import '../containers/FilterProducts/filter.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
const ListProductsComp = ({product}) => {
  const {name, selling_price, original_price, product_image, category, slug} = product;
  const {image} = product_image[0];
  
   
  return (
    <div class="col-lg-12 col-md-12 col-12">
      {/* <!-- Start Single Product --> */}
      <div class="single-product">
          <div class="row align-items-center">
              <div class="col-lg-4 col-md-4 col-12">
                  <div class="product-image">
                      <img src={`https://applabb.account-collection.com/${image}`} className='min-h-[8rem] max-h-[6.5rem]' alt="#" />
                      <span class="sale-tag">-10%</span>
                      <div class="button">
                          <Link to={`/product/${slug}`} >
                            <Button sx={{width: '10rem', display: 'flex', alignItems: 'center', }} variant='contained'><ShoppingCartOutlinedIcon sx={{fontSize:'1.3rem'}} mr='1rem' /> Add to Cart</Button>
                          </Link>
                      </div>
                  </div>
              </div>
              <div class="col-lg-8 col-md-8 col-12">
                  <div class="product-info">
                      <span class="category">{category?.name}</span>
                      <h4 class="title">
                          <a href="product-grids.html">{name}</a>
                      </h4>
                      <ul class="review">
                          <Rating value={4} readonly  />
                          <li><span>4.0 Review(s)</span></li>
                      </ul>
                      <div class="price">
                          <span>${selling_price}</span>
                          <span class="discount-price">${original_price}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- End Single Product --> */}
  </div>
  )
}

export default ListProductsComp;