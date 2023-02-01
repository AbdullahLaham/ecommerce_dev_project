import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopPageBrand, getShopPageProducts } from '../../actions/general';
import ListProductsComp from '../../components/ListProductsComp';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import './filter.css';
import { Button, useMediaQuery } from '@mui/material';
import ShopSidebar from '../../components/ShopSidebar';

const ListProducts = () => {
    const {filteredProducts, brands} = useSelector((state) => state?.generalReducer);
    // console.log(filteredProducts, 'ffffffffffffffff')
    // console.log('ggggg', brands);
    const [selected, setSelected] = useState('list');
    const [showSidebar, setShowSidebar] = useState(false);
    const [filterPrice, setFilterPrice] = useState('low');
    const [filterBrandText, setFilterBrandText] = useState('');
    const [filterText, setFilterText] = useState(`/filter-product`);
    
    const [filterBrand, setFilterBrand] = useState([]);
    const updateFilterBrand = (id) => {
        setFilterBrand([...filterBrand, id]);
    }
    const updateFilterPrice = (id) => {

    }
    // navigate
    const navigate = useNavigate();
    // dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        let uniqueBrands = [...new Set(filterBrand)];
        uniqueBrands?.map((brand, i) => {
            setFilterBrandText(`${filterBrandText}&brandInputs[${i}]=${brand}`);
            console.log('filterText', `${filterText}?sortPrice=${filterPrice}${filterBrandText}`)
        });
    }, [filterBrand]);
    useEffect(() => {
        dispatch(getShopPageProducts(`${filterText}?sortPrice=${filterPrice}${filterBrandText}`));
        
    }, [filterPrice, filterBrandText]);
    // useEffect(() => {
    //     dispatch(getShopPageBrand());
    // }, []);
    const isNonMobile = useMediaQuery("(min-width: 980px)");
  return (
    <section class="product-grids section" >
            {!isNonMobile && showSidebar && <ShopSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
        <div class="container">
            <div class="row">
                {isNonMobile && <div class="col-lg-3 col-12">
                    {/* <!-- Start Product Sidebar --> */}
                    <div class="product-sidebar">
                        {/* <!-- Start Single Widget --> */}
                        <div class="single-widget search">
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
                           
                            {brands?.map((b) => {
                                return (
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={b?.id} name="brandInput[]" onChange={(e) => updateFilterBrand(e.target.value)} />
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
                </div>}
                <div class="col-lg-9 col-12">
                    <div class="product-grids-head">
                        <div class="product-grid-topbar">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-8 col-12">
                                    <div class="product-sorting">
                                        <label for="sorting">Sort by:</label>
                                        <select class="form-control" id="sorting" onChange={(e) => setFilterPrice(e?.target?.value)}>
                                            <option value='low'>Low - High Price</option>
                                            <option value='high'>High - Low Price</option>
                                        </select>
                                        <h3 class="total-show-product">Showing: <span>1 - 12 items</span></h3>
                                    </div>
                                </div>
                                {isNonMobile ? (
                                    <div class="col-lg-5 col-md-4 col-12">
                                        <nav>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button onClick={() => navigate('/grid')} class={`nav-link ${selected == 'grid' ? 'active' : ''}`} id="nav-grid-tab"><GridViewIcon /></button>
                                                <button class={`nav-link ${selected == 'list' ? 'active' : ''}`} id="nav-list-tab"> <FormatListBulletedIcon /></button>
                                            </div>
                                        </nav>
                                    </div>
                                ) : (
                                    <div class="col-lg-5 col-md-4 col-12">
                                        <nav>
                                            <div className='flex items-center justify-center mt-[.4rem]' id="nav-tab" role="tablist">
                                                <Button onClick={() => setShowSidebar(!showSidebar)} variant='outlined'><p className='text-[1.3rem]'>Filter</p> <FilterAltIcon /></Button>
                                            </div>
                                        </nav>
                                    </div>
                                )
                                
                            
}
                                
                            </div>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                <div class="row">

                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        {/* <!-- Pagination --> */}
                                        <div class="pagination left">
                                            <ul class="pagination-list">
                                                <li><a href="javascript:void(0)">1</a></li>
                                                <li class="active"><a href="javascript:void(0)">2</a></li>
                                                <li><a href="javascript:void(0)">3</a></li>
                                                <li><a href="javascript:void(0)">4</a></li>
                                                <li><a href="javascript:void(0)"><i
                                                            class="lni lni-chevron-right"></i></a></li>
                                            </ul>
                                        </div>
                                        {/* <!--/ End Pagination --> */}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane show active fade" id="nav-list" role="tabpanel"
                                aria-labelledby="nav-list-tab">
                                <div class="row">
                                {filteredProducts?.map((product) => {
                                    return (
                                        <ListProductsComp product={product} />
                                    )
                                 })}  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ListProducts