import axios from "axios";
import Cookies from "js-cookie";
import { END_LOADING } from "../constants";

const API = axios.create({ baseURL: 'https://applabb.account-collection.com/api/' });
const MallAPI = axios.create({ baseURL: 'https://applabb.account-collection.com/malltoallmanager/api/' });

API.interceptors.request.use((req) => {
    if (Cookies.get('token')) {
        req.headers.authorization = `Bearer ${Cookies.get('token')}`
    }
    return req;
});



 // user functions
export const signup = (user, dispatch, enqueueSnackbar) => {
    try {
        const res = MallAPI.post('/register/tokens', user)
        dispatch({type: END_LOADING});
        return res;
    }
     catch(error) {
        dispatch({type: END_LOADING});
        enqueueSnackbar(`some error happend when creating the account`, {variant: 'error',})
     }
}


export const login = (user, dispatch, enqueueSnackbar) => {
    try {
        const res = MallAPI.post('/auth/tokens', user);
        dispatch({type: END_LOADING});
        return res;
    }
     catch(error) {
        dispatch({type: END_LOADING});
        enqueueSnackbar(`some error in password or email`, {variant: 'error',})
     }
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
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
    });
    console.log('res', res);
    return res;
}
export const addToWishlist = async (id, enqueueSnackbar) => {
    await API.post(`/add-wishlist`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
        product_id: id,
    }).then((res) => {
        enqueueSnackbar('Added to wishlist Succesfully', {variant: 'success',});
        return res;

    }).catch((err) => {
        enqueueSnackbar(`${err?.data?.message}`, {variant: 'error',});
    })
    // console.log('res', res);
}
export const deleteFromWishlist = async (id, enqueueSnackbar) => {
    await API.delete(`/delWishlist-item/${id}`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
    }).then((res) => {
        enqueueSnackbar('Product deleted from wishlist Succesfully', {variant: 'success',});
        return res;

    }).catch((err) => {
        enqueueSnackbar(`${err?.data?.message}`, {variant: 'error',});
    })
    
}


export const logoutUser = async () => {
    const res = await API.delete(`/auth/tokens/${Cookies.get('tokenNumber')}`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
    });
    console.log('res', res);
    return res;
}



// product details functions




export const LeaveProductReview = async (review, enqueueSnackbar) => {
    await API.post(`/add-review`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
        review,
    })
    .then((res) => {
        enqueueSnackbar('Review Added Succesfully', {variant: 'success',});
    })
    .catch((error) => {
        enqueueSnackbar('Already added comment to this product', {variant: 'error',});
    });
}


export const fetchProductReviews = async (product_id) => {
    const res = await API.get(`/show-review/${product_id}`);
    return res;
}

export const fetchChatUsers = async () => {
    const res = await API.get(`/show-review/`);
    return res;
}

