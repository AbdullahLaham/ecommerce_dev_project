import { Button, Rating, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, fetchWishlistItems, getShopPageBrand, getShopPageProducts } from '../../actions/general';
import GridProductsComp from '../../components/GridProductsComp';
import GridViewIcon from '@mui/icons-material/GridView';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as api from '../../api'
import './filter.css';
import ShopSidebar from '../../components/ShopSidebar';
import { CURRENT_CATEGORY } from '../../constants';
import { useSnackbar } from 'notistack';
import Spinner from '../../components/Spinner';
const GridProducts = ({filterCategory, setFilterCategory}) => {
    const { brands, categories ,numberOfPages, currentCategory, isLoading} = useSelector((state) => state?.generalReducer);
    console.log(currentCategory, 'ffffffffffffffff')
    // navigate
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({});

    // console.log('ggggg', brands);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selected, setSelected] = useState('grid');
    const [showSidebar, setShowSidebar] = useState(false);
    const [filterPrice, setFilterPrice] = useState('low');
    const [filterBrandText, setFilterBrandText] = useState('');
    const [filterCategoryText, setFilterCategoryText] = useState('');
    const [filterText, setFilterText] = useState(`/filter-product`);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterBrand, setFilterBrand] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

    // const [filterCategory, setFilterCategory] = useState(currentCategory);

    // whislistItems
    const {whislistItems} = useSelector((state) => state?.generalReducer);
    const dispatch = useDispatch();
    const updateFilterBrand = (id) => {
        if (!filterBrand?.includes(`${id}`)) {
            setFilterBrand([...filterBrand, id]);
            // setSelectedBrand
        }
        else {
            let newBrand = filterBrand.filter((brand) => brand != id);
            setFilterBrand(newBrand);
        }
    }
    const { enqueueSnackbar } = useSnackbar();

    const addProductToWishist = (id) => {
        dispatch(addToWishlist(id, enqueueSnackbar));
        dispatch(fetchWishlistItems());
    }








    
    // const updateFilterCategory = (id) => {
    //     setFilterBrand([]);
    //     setFilterBrandText('');
    //     setFilterCategory([id]);
    // }
    
    
    // const updateFilterPrice = (id) => {

    // }
   
    // // dispatch
    // // useEffect(() => {
    // //     if (currentCategory != -1) {
    // //         updateFilterCategory(currentCategory);
    // //     }
    // // }, [currentCategory]);
    // useEffect(() => {
    //     // let uniqueBrands = [...new Set(filterBrand)];
    //     setFilterBrandText('');
    //     // setFilterCategoryText('');

    //     filterBrand?.map((brand, i) => {
    //         setFilterBrandText(`${filterBrandText}&brandInputs[${i}]=${brand}`);
    //     });
        
    //     filterCategory?.map((categ, i) => {
    //         setFilterCategoryText(`&categoryInputs[0]=${categ}`);
    //     });

        
    //     // filterCategory?.map((category, i) => {
    //     //     setFilterCategoryText(`${filterCategoryText}&categoryInputs[${i}]=${category}`);
    //     // });
        
    // }, [filterBrand, filterCategory]);

    // useEffect(() => {
    //     console.log('filterText', `${filterText}?sortPrice=${filterPrice}${filterBrandText}${filterCategoryText}`)
    //     dispatch(getShopPageProducts(`${filterText}?sortPrice=${filterPrice}${filterBrandText}${filterCategoryText}&page=${currentPage}`));
    // }, [filterBrandText,filterCategoryText, currentPage, filterPrice, whislistItems]);


    // const {category = 'all', query = 'all', price = 'all', rating = 'all', sort = 'default'} = searchParams;

    const [state , setState] = useState({category : 'all', brand : 'all', query : 'all', price : 'all', rating : 'all', sort : 'default'});
    const {category, query , price , rating , sort, brand} = state;

    // console.log('search', searchParams.entries())
    
    useEffect(() => {
        

        const fetchData = async () => {
            try {
                let query1 = '/filter-product';
                if (category !== 'all') {
                    // state?.brand == 'all';
                    setState({...state, brand: 'all',})
                    query1 += `?categoryInputs[0]=${category}`
                }
                if (brand !== 'all') {
                    query1 += `&brandInputs[0]=${brand}`
                }
                
                // if (query !== 'all') {
                //     query1 += `&& name match ${query}`
                // }

                // if (price !== 'all') {
                //     const minPrice = Number(price.split('-')[0]);
                //     const maxPrice = Number(price.split('-')[1]);
                //     query1 += `&& price >= ${minPrice} && price <= ${maxPrice}`;

                // }

                // if (rating !== 'all') {
                //     query1 += `&& rating >= ${Number(rating)}`
                // }


                let order = '';
                // if (sort !== 'default') {
                //     query1 += `&&sortPrice=${sort}`
                //     // if (sort == 'lowest') order = '| order(price asc)';
                //     // if (sort == 'highest') order = '| order(price desc)';
                //     // if (sort == 'toprated') order = '| order(rating desc)';
                // }
                // query1 += `] ${order}`;


                
                // setState({loading: true,});

                const {data: {data: {data}}} = await api.getShopPageProducts(query1);
                console.log('yyyyyyyyyyyyyyy', data)
                setFilteredProducts(data);
                dispatch(getShopPageProducts(query1));
                // setState({loading: false, products});
            } catch(err) {
                // setState({error: err.message, loading: false,})
            }
        }

        fetchData();
    }, [category, brand, price, query, rating, sort]);



    // useEffect(() => {
    //     dispatch(getShopPageBrand(`/filter-product`));
    // }, []);
    const isNonMobile = useMediaQuery("(min-width: 980px)");

  return (
    <>  
    <section class="product-grids section overflow-x-hidden">
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
                    <div class="single-widget search" >
                        <h3>Search Product</h3>
                        <form>
                            <input type="text" placeholder="Search Here..." />
                            <button type="submit"><SearchOutlinedIcon /></button>
                        </form>
                    </div>
                    {/* <!-- End Single Widget -->


to here
                    <!-- Start Single Widget --> */}
                    <div class="single-widget">
                        <h3>All Categories</h3>
                        {categories?.map((b, i) => {
                                return (
                                    <div class="form-check">
                                        {/* <input class="form-check-input" id={`input${i}`} type="checkbox" value={} name="brandInput[]"   /> */}
                                        <label className='cursor-pointer' for={`input${i}`} onClick={() => setState({...state, category: b?.id})}>
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
                                    <input className='mr-[.5rem]' checked={filterBrand.includes(`${b?.id}`) ? 'checked' : ''} type="checkbox" value={b?.id} name="brandInput[]" onClick={(e) => setState({...state, brand: e?.target?.value})} />
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
                                                <button class={`nav-link ${selected == 'grid' ? 'active' : ''}`} id="nav-grid-tab"><GridViewIcon /></button>
                                                <button onClick={() => navigate('/list')} class={`nav-link ${selected == 'list' ? 'active' : ''}`} id="nav-list-tab"> <FormatListBulletedIcon /></button>
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


                    {!isLoading ? <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-grid" role="tabpanel"
                            aria-labelledby="nav-grid-tab">
                            <div class="row">
                                {
                                    filteredProducts?.map((product) => {
                                        return (
                                            <GridProductsComp product={product} />
                                        )
                                    })
                                }
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

                        </div>: <Spinner />}



                    </div>
                </div>
            </div>
        </div>
</section>
    </>
  )
}

export default GridProducts;




// <div class="row">
//                                 <div class="col-12">
//                                     {/* <!-- Pagination --> */}
//                                     <div class="pagination left">
//                                         <ul class="pagination-list">
//                                             <li><a href="javascript:void(0)">1</a></li>
//                                             <li class="active"><a href="javascript:void(0)">2</a></li>
//                                             <li><a href="javascript:void(0)">3</a></li>
//                                             <li><a href="javascript:void(0)">4</a></li>
//                                             <li><a href="javascript:void(0)"><i
//                                                         class="lni lni-chevron-right"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     {/* <!--/ End Pagination --> */}
//                                 </div>
//                             </div>