import React from 'react'
import '../containers/FilterProducts/ListProducts';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
const ShopSidebar = ({setShowSidebar, showSidebar}) => {
    const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    
    <div className={`absolute ${showSidebar ? 'right-0' : '-right-[100%]'} transition-all ease-in-out delay-150  top-0 w-[80%] max-w-[80%] bg-white h-[100vh] z-10 border-2 `} >
     <p className='absolute right-0 m-[1rem] text-2xl mb-[1rem]' onClick={() => setShowSidebar(false)}><CloseIcon sx={{fontSize: '3rem'}} /> </p>  
    <div className='mt-[1.5rem]'>
        {/* <!-- Start Product Sidebar --> */}
        <div class="product-sidebar">
            {/* <!-- Start Single Widget --> */}
            <div class="single-widget search" >
                <h3>Search Product</h3>
                <form>
                    <input type="text" placeholder="Search Here..." />
                    <button type="submit"><SearchOutlinedIcon /></button>
                </form>
            </div>
            {/* <!-- End Single Widget -->
            <!-- Start Single Widget --> */}
            <div class="single-widget">
                <h3>All Categories</h3>
                <ul class="list">
                    <li>
                        <a href="product-grids.html">Computers & Accessories </a><span>(1138)</span>
                    </li>
                    <li>
                        <a href="product-grids.html">Smartphones & Tablets</a><span>(2356)</span>
                    </li>
                    <li>
                        <a href="product-grids.html">TV, Video & Audio</a><span>(420)</span>
                    </li>
                    <li>
                        <a href="product-grids.html">Cameras, Photo & Video</a><span>(874)</span>
                    </li>
                    <li>
                        <a href="product-grids.html">Headphones</a><span>(1239)</span>
                    </li>
                    <li>
                        <a href="product-grids.html">Wearable Electronics</a><span>(340)</span>
                    </li>
                    <li>
                        <a href="product-grids.html">Printers & Ink</a><span>(512)</span>
                    </li>
                </ul>
            </div>
            {/* <!-- End Single Widget -->
            <!-- Start Single Widget --> */}
            <div class="single-widget range">
                <h3>Price Range</h3>
                <input type="range" class="form-range" name="range" step="1" min="100" max="10000"
                    value="10" onchange="rangePrimary.value=value" />
                <div class="range-inner">
                    <label>$</label>
                    <input type="text" id="rangePrimary" placeholder="100" />
                </div>
            </div>
            {/* <!-- End Single Widget -->
            <!-- Start Single Widget --> */}
            <div class="single-widget condition">
                <h3>Filter by Price</h3>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label class="form-check-label" for="flexCheckDefault1">
                        $50 - $100L (208)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label class="form-check-label" for="flexCheckDefault2">
                        $100L - $500 (311)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                    <label class="form-check-label" for="flexCheckDefault3">
                        $500 - $1,000 (485)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                    <label class="form-check-label" for="flexCheckDefault4">
                        $1,000 - $5,000 (213)
                    </label>
                </div>
            </div>
            {/* <!-- End Single Widget -->
            <!-- Start Single Widget --> */}
            <div class="single-widget condition">
                <h3>Filter by Brand</h3>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                    <label class="form-check-label" for="flexCheckDefault11">
                        Apple (254)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                    <label class="form-check-label" for="flexCheckDefault22">
                        Bosh (39)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                    <label class="form-check-label" for="flexCheckDefault33">
                        Canon Inc. (128)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault44" />
                    <label class="form-check-label" for="flexCheckDefault44">
                        Dell (310)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault55" />
                    <label class="form-check-label" for="flexCheckDefault55">
                        Hewlett-Packard (42)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault66" />
                    <label class="form-check-label" for="flexCheckDefault66">
                        Hitachi (217)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault77" />
                    <label class="form-check-label" for="flexCheckDefault77">
                        LG Electronics (310)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault88" />
                    <label class="form-check-label" for="flexCheckDefault88">
                        Panasonic (74)
                    </label>
                </div>
            </div>
            {/* <!-- End Single Widget --> */}
        </div>
        {/* <!-- End Product Sidebar --> */}
    </div>
    </div>
  )
}

export default ShopSidebar;