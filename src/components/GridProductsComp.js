import { Button, Rating } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import '../containers/FilterProducts/filter.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const GridProductsComp = ({product}) => {
    console.log('listProd', product);
    const {name, selling_price, product_image, category, slug} = product;
    const {image} = product_image[0]; 
  return (
    <div class="col-lg-4 col-md-6 col-12">
        
        {/* <!-- Start Single Product --> */}
        <div class="single-product">
            <div class="product-image">
                <img src={`https://applabb.account-collection.com/${image}`} className='max-h-[10rem] min-h-[10rem]' alt="#" />
                <div class="button">
                    <Link to={`/product/${slug}`} >
                        <Button sx={{width: 'auto',}} variant='contained'><ShoppingCartOutlinedIcon sx={{fontSize:'1.5rem'}} /> Add to Cart</Button>
                    </Link>        
                </div>
            </div>
            <div class="product-info">
                <span class="category">{category?.name}</span>
                <h4 class="title">
                    <a href="product-grids.html">{name}</a>
                </h4>
                <ul class="review">
                    <Rating  value={4} readonly  />
                    <li><span>4.0 Review(s)</span></li>
                </ul>
                <div class="price">
                    <span>${selling_price}</span>
                </div>
            </div>
        </div>
        {/* <!-- End Single Product --> */}
    </div>
  )
}

export default GridProductsComp