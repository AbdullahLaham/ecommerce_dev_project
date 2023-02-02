
import { Language } from '@mui/icons-material';
import * as api from '../api'
import {CATEGORY_PRODUCTS, CATEGORIES, LATEST_PRODUCTS, CURRENT_PRODUCT, LANGUAGE, ADD_TO_CART, ALL_PRODUCTS, GET_BRANDS} from '../constants'

export const fetchLatestProducts = () => async (dispatch) => {
    const {data: {data}} = await api.getLatestProducts();
    dispatch({type: LATEST_PRODUCTS, payload: data});
}

export const getCategories = () => async (dispatch) => {
    const {data: {data}} = await api.getCategories();
    console.log('fff', data)
    dispatch({type: CATEGORIES, payload: data});

}
// shop page functions
export const getShopPageProducts = (text) => async (dispatch) =>  {
    const {data} = await api.getShopPageProducts(text);
    // console.log('products', data?.data);
    dispatch({type: ALL_PRODUCTS, payload: data?.data});
    const {filter_brand, filter_category} = data;
    // console.log('filter', filter_brand);
    dispatch({type: GET_BRANDS, payload: {filter_brand, filter_category}});
}

export const getShopPageBrand = (text) => async (dispatch) =>  {
        
}



export const getFilteredProducts = () => async (dispatch) =>  {

}


export const addToCart = (product) => async (dispatch) => {
    dispatch({type: CATEGORIES, payload: product});
}

// export const getCategories = () => async (dispatch) => {
//     const {data: {data}} = await api.getCategories();
//     console.log('fff', data)
//     dispatch({type: CATEGORIES, payload: data});
// }





export const getProductsByCategory = (category) =>  async (dispatch) => {
    const {data} = await api.getProductsByCategories(category);
    console.log('datafffff', data);
    dispatch({type: CATEGORY_PRODUCTS, payload: data});
}

// fetch Product Details using its ID
export const fetchProductDetails = (slug) => async (dispatch) => {
    console.log('dddddddddddd')
    const {data: {data}} = await api.fetchProductDetails(slug);
    console.log('hello', data);
    dispatch({type: CURRENT_PRODUCT, payload: data[0]});
}

export const createTransaction = (orderData) => async (dispatch) => {
    const {data} = await api.createTransaction(orderData);
}

export const changeLanguage = (language) => async (dispatch) => {
    dispatch({type: LANGUAGE, payload: language});
}