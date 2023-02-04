import React, { useEffect, useState } from 'react'
import '../containers/FilterProducts/ListProducts';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Rating, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getShopPageBrand, getShopPageProducts } from '../actions/general';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';

import '../containers/FilterProducts/filter.css';
import { CURRENT_CATEGORY } from '../constants';
const ShopSidebar = ({showSidebar, setShowSidebar, filterPrice, setFilterPrice, filterBrandText, 
    setFilterBrandText, filterText, setFilterText, currentPage, setCurrentPage,
    filterBrand, setFilterBrand, filterCategory, setFilterCategory,}) => {
    const isMobile = useMediaQuery("(max-width: 900px)");
    const {filteredProducts, brands, categories ,numberOfPages, currentCategory} = useSelector((state) => state?.generalReducer);
    console.log(currentCategory, 'ffffffffffffffff')
    // console.log('ggggg', brands);
    const [selected, setSelected] = useState('grid');

    const dispatch = useDispatch();
    const updateFilterBrand = (id) => {
        if (!filterBrand?.includes(id)) {
            setFilterBrand([...filterBrand, id]);
        }
        else {
            let newBrand = filterBrand.filter((brand) => brand != id);
            console.log(filterCategory, newBrand);
            setFilterBrand(newBrand);
        }
    }
    const updateFilterCategory = (id) => {
        dispatch({type: CURRENT_CATEGORY, payload: id});
        console.log(id, currentCategory)
        // if (!filterCategory?.includes(id)) {
            
        //     setFilterCategory([...filterCategory, id]);
        // }
        // else {  
        //     let newCategory = filterCategory.filter((categ) => categ != id);
        //     console.log('dddddd',filterCategory, newCategory)
        //     setFilterCategory(newCategory);
        // }
    }

    const updateFilterPrice = (id) => {

    }
    // navigate
    const navigate = useNavigate();
    // dispatch
    // useEffect(() => {
    //     if (currentCategory != -1) {
    //         updateFilterCategory(currentCategory);
    //     }
    // }, [currentCategory]);
    useEffect(() => {
        
        // let uniqueBrands = [...new Set(filterBrand)];
        setFilterBrandText('');
        // setFilterCategoryText('');

        filterBrand?.map((brand, i) => {
            setFilterBrandText(`${filterBrandText}&brandInputs[${i}]=${brand}`);
        });

        // filterCategory?.map((category, i) => {
        //     setFilterCategoryText(`${filterCategoryText}&categoryInputs[${i}]=${category}`);
        // });
        
    }, [filterBrand, filterCategory]);

    useEffect(() => {
        console.log('filterText', `${filterText}?sortPrice=${filterPrice}${filterBrandText}`)
        dispatch(getShopPageProducts(`${filterText}?sortPrice=${filterPrice}${filterBrandText}&categoryInputs[0]=${currentCategory}&page=${currentPage}`));
    }, [filterBrandText,filterCategory, currentPage, filterPrice, currentCategory]);

    // useEffect(() => {
    //     dispatch(getShopPageBrand(`/filter-product`));
    // }, []);
    const isNonMobile = useMediaQuery("(min-width: 980px)");




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
                {categories?.map((b, i) => {
                    return (
                        <div class="form-check">
                            {/* <input class="form-check-input" id={`input${i}`} type="checkbox" value={} name="brandInput[]"   /> */}
                            <label className='cursor-pointer' for={`input${i}`} onClick={() => updateFilterCategory(b?.id)}>
                                {b?.name} ({b?.id})
                            </label>
                        </div>
                    )
                })}
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
                           
            {brands?.map((b) => {
                return (
                    <div class="form-check">
                        <input className='mr-[.5rem]' type="checkbox" value={b?.id} name="brandInput[]" onChange={(e) => updateFilterBrand(e.target.value)} />
                        <label class="form-check-label" for="flexCheckDefault22">
                            {b?.name} ({b?.id})
                        </label>
                    </div>
                )
            })}
            </div>
            {/* <!-- End Single Widget --> */}
        </div>
        {/* <!-- End Product Sidebar --> */}
    </div>
    </div>
  )
}

export default ShopSidebar;