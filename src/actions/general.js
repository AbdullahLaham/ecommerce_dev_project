
import { Language } from '@mui/icons-material';
import * as api from '../api'
import {CATEGORY_PRODUCTS, CATEGORIES, LATEST_PRODUCTS, CURRENT_PRODUCT, LANGUAGE, ADD_TO_CART, ALL_PRODUCTS, GET_BRANDS, SLIDER_IMAGES, WHISHLIST_ITEMS} from '../constants'

export const fetchLatestProducts = () => async (dispatch) => {
    const {data: {data}} = await api.getLatestProducts();
    dispatch({type: LATEST_PRODUCTS, payload: data});
}

export const getCategories = () => async (dispatch) => {
    const {data: {data}} = await api.getCategories();
    // console.log('fff', data)
    dispatch({type: CATEGORIES, payload: data});

}

// shop page functions
export const getShopPageProducts = (text) => async (dispatch) =>  {
    const {data} = await api.getShopPageProducts(text);
    // console.log('products', data);
    dispatch({type: ALL_PRODUCTS, payload: data?.data});
    const {filter_brand, filter_category} = data;
    // console.log('filter', filter_brand);
    dispatch({type: GET_BRANDS, payload: {filter_brand, filter_category}});
}

export const getHomePageSlider = (text) => async (dispatch) =>  {
    const {data: {data}} = await api.getHomePageSlider();
    dispatch({type: SLIDER_IMAGES, payload: data});
    // console.log('sidebar', data);
}

// SliderImages

export const getFilteredProducts = () => async (dispatch) =>  {

}


// export const getCategories = () => async (dispatch) => {
//     const {data: {data}} = await api.getCategories();
//     console.log('fff', data)
//     dispatch({type: CATEGORIES, payload: data});
// }





export const getProductsByCategory = (category) =>  async (dispatch) => {
    const {data} = await api.getProductsByCategories(category);
    // console.log('datafffff', data);
    dispatch({type: CATEGORY_PRODUCTS, payload: data});
}

// fetch Product Details using its ID
export const fetchProductDetails = (slug) => async (dispatch) => {
    // console.log('dddddddddddd')
    const {data: {data}} = await api.fetchProductDetails(slug);
    // console.log('hello', data);
    dispatch({type: CURRENT_PRODUCT, payload: data[0]});
}

export const createTransaction = (orderData) => async (dispatch) => {
    const {data} = await api.createTransaction(orderData);
}

export const changeLanguage = (language) => async (dispatch) => {
    dispatch({type: LANGUAGE, payload: language});
}


// wishlist page functions ..

export const fetchWishlistItems = () => async (dispatch) => {
    const {data: {data}} = await api.fetchWishlistItems();
    dispatch({type: WHISHLIST_ITEMS, payload: data});
}

export const addToWishlist = (id) => async (dispatch) => {
    const {data} = await api.addToWishlist(id);
    console.log('res', data);
    // dispatch({type: WHISHLIST_ITEMS, payload: data});
}



// cart page functions 

