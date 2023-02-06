import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, getShopPageBrand, getShopPageProducts } from '../../actions/general';
import ListProductsComp from '../../components/ListProductsComp';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import './filter.css';
import { Button, useMediaQuery } from '@mui/material';
import ShopSidebar from '../../components/ShopSidebar';
import { CURRENT_CATEGORY } from '../../constants';
import { useSnackbar } from 'notistack';

const ListProducts = () => {
    const {filteredProducts, brands, categories ,numberOfPages, currentCategory} = useSelector((state) => state?.generalReducer);
    console.log(brands, 'ffffffffffffffff')
    // console.log('ggggg', brands);
    const [selected, setSelected] = useState('list');
    const [showSidebar, setShowSidebar] = useState(false);
    const [filterPrice, setFilterPrice] = useState('low');
    const [filterBrandText, setFilterBrandText] = useState('');
    const [filterCategoryText, setFilterCategoryText] = useState('');
    const [filterText, setFilterText] = useState(`/filter-product`);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterBrand, setFilterBrand] = useState([]);
    const [filterCategory, setFilterCategory] = useState(currentCategory);
     // whislistItems
     const {whislistItems} = useSelector((state) => state?.generalReducer);
    const updateFilterBrand = (id) => {
        if (!filterBrand?.includes(id)) {
            setFilterBrand([...filterBrand, id]);
        }
        else {
            let newBrand = filterBrand.filter((brand) => brand != id);
            console.log(filterCategory, newBrand)
            setFilterBrand(newBrand)
        }
    }
    const updateFilterCategory = (id) => {
        dispatch({type: CURRENT_CATEGORY, payload: id});
        console.log(id, currentCategory);

        // if (!filterCategory?.includes(id)) {
            
        //     setFilterCategory([...filterCategory, id]);
        // }
        // else {  
        //     let newCategory = filterCategory.filter((categ) => categ != id);
        //     console.log(filterCategory, newCategory)
        //     setFilterCategory(newCategory);
        // }
    }

    const { enqueueSnackbar } = useSnackbar();
    const addProductToWishist = (id, enqueueSnackbar) => {
        dispatch(addToWishlist(id));
    }
    // navigate
    const navigate = useNavigate();
    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        // let uniqueBrands = [...new Set(filterBrand)];
        setFilterBrandText('');
        setFilterCategoryText('');
        
        filterBrand?.map((brand, i) => {
            setFilterBrandText(`${filterBrandText}&brandInputs[${i}]=${brand}`);
        });

        // filterCategory?.map((category, i) => {
        //     setFilterCategoryText(`${filterCategoryText}&categoryInputs[${i}]=${category}`);
        // });
        
    }, [filterBrand, filterCategory]);


    useEffect(() => {
        dispatch({type: CURRENT_CATEGORY, payload: 0});
    }, []);
    
    useEffect(() => {
        console.log('filterText', `${filterText}?sortPrice=${filterPrice}${filterBrandText}${filterCategoryText}`)
        if (currentCategory != 0) {
            dispatch(getShopPageProducts(`${filterText}?sortPrice=${filterPrice}${filterBrandText}&categoryInputs[0]=${currentCategory}&page=${currentPage}`));
        } else {
            dispatch(getShopPageProducts(`${filterText}?sortPrice=${filterPrice}${filterBrandText}&page=${currentPage}`));
        }
    }, [filterBrandText,filterCategory, currentPage, filterPrice, currentCategory, whislistItems]);

    // useEffect(() => {
    //     dispatch(getShopPageBrand(`/filter-product`));
    // }, []);
    const isNonMobile = useMediaQuery("(min-width: 980px)");
  return (
    <section class="product-grids section" >
        <ShopSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} filterPrice={filterPrice} setFilterPrice={setFilterPrice} filterBrandText={filterBrandText} 
        setFilterBrandText={setFilterBrandText} filterText={filterText} setFilterText={setFilterText} currentPage={currentPage} setCurrentPage={setCurrentPage}
        filterBrand={filterBrand} setFilterBrand={setFilterBrand} filterCategory={filterCategory} setFilterCategory={setFilterCategory}
            />
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
                                value="10" />
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
                            <div class="row">
                                <div class="col-12">
                                    {/* <!-- Pagination --> */}
                                    <div class="pagination left">
                                        <ul class="pagination-list">
                                            {(new Array(numberOfPages).fill(0)).map((item, i) => {
                                                return <li class="active" onClick={() => setCurrentPage(i+1)}><a href="javascript:void(0)">{i+1}</a></li>
                                            })}
                                        </ul>
                                    </div>
                                     {/* End Pagination  */}
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