
import { Language } from '@mui/icons-material';
import * as api from '../api'
import {CATEGORY_PRODUCTS, CATEGORIES, LATEST_PRODUCTS, CURRENT_PRODUCT, LANGUAGE} from '../constants'

export const fetchLatestProducts = () => async (dispatch) => {
    const {data: {data}} = await api.getLatestProducts();
    dispatch({type: LATEST_PRODUCTS, payload: data});
}

export const getCategories = () => async (dispatch) => {
    const {data: {data}} = await api.getCategories();
    console.log('fff', data)
    dispatch({type: CATEGORIES, payload: data});

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
    console.log('hello')
    const {data} = await api.fetchProductDetails(slug);
    dispatch({type: CURRENT_PRODUCT, payload: data[0]});
}
export const createTransaction = (orderData) => async (dispatch) => {
    const {data} = await api.createTransaction(orderData);
}

export const changeLanguage = (language) => async (dispatch) => {
    dispatch({type: LANGUAGE, payload: language});
}