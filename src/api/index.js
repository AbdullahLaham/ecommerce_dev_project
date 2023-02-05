import axios from "axios";

const API = axios.create({ baseURL: 'https://applabb.account-collection.com/api/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
})
 // user functions
export const signup = async (user) => {
    const res = await API.post('/management/signupUser', user);
    return res;
}
export const login = async (user) => {
    const res = await API.post('/auth/tokens', user);
    return res;
}
// system functions
export const getLatestProducts = async () => {
    const res = await API.get('/products');
    return res;
}
export const getShopPageProducts = async (text) => {
    const res = await API.get(`${text}`);
    return res;
}

export const getHomePageSlider = async () => {
    const res = await API.get('/slider-home');
    return res;
}

export const getCategories = async () => {
    const res = await API.get('/categories');
    return res;
}
export const getProductsByCategories = async (category) => {
    const res = await API.get(`/general/getCategoryProducts/${category}`);
    return res;
}
export const fetchProductDetails = async (slug) => {
    console.log('dddddddddddddddddddd')
    const res = await API.get(`/product-details/${slug}`);
    console.log('dddddddddddddddddddd')
    return res;
}

export const createTransaction = async (orderData) => {
    const res = await API.post(`/general/createTransaction`, orderData);
    return res;
}

export const fetchWishlistItems = async () => {
    const res = await API.get(`/wishlist-item`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    console.log('res', res);
    return res;
}
export const addToWishlist = async (id) => {
    const res = await API.post(`/add-wishlist`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        product_id: id,
    });
    console.log('res', res);
    return res;
}

