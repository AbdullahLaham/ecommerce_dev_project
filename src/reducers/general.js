import {  ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART_ITEM, TRANSACTION, LATEST_PRODUCTS, CATEGORY_PRODUCTS, CURRENT_PRODUCT, CATEGORIES, ALL_PRODUCTS, GET_BRANDS, SLIDER_IMAGES, CURRENT_CATEGORY, WHISHLIST_ITEMS, START_LOADING, END_LOADING, PAGE_SELECTED, PRODUCT_REVIEWS } from "../constants";
const reducer = (state = { 
        cart: (localStorage.getItem('cart')!== "undefined" && localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
        // transaction: null,
        products: localStorage.getItem('products')!== "undefined" ? JSON.parse(localStorage.getItem('products')) : [],
        filteredProducts: localStorage.getItem('filteredProducts')!== undefined ? JSON.parse(localStorage.getItem('filteredProducts')) : [],
        categories: [],
        categoryProducts: [],
        product: localStorage.getItem('product')!== "undefined" ? JSON.parse(localStorage.getItem('product')) : {},
        language: 'Arabic',
        isLoading: false,
        brands: localStorage.getItem('brands')!== "undefined" ? JSON.parse(localStorage.getItem('brands')) : [] ,
        categories: localStorage.getItem('categories')!== "undefined" ? JSON.parse(localStorage.getItem('categories')) : [] ,
        numberOfPages: localStorage.getItem('numberOfPages')!== "undefined" ? JSON.parse(localStorage.getItem('numberOfPages')) : 1 ,
        sidebarData: localStorage.getItem('sidebarData')!== "undefined" ? JSON.parse(localStorage.getItem('sidebarData')) : [],
        currentCategory: localStorage.getItem('currentCategory')!== "undefined" ? localStorage.getItem('currentCategory') : -1,
        whislistItems: localStorage.getItem('whislistItems') ? JSON.parse(localStorage.getItem('whislistItems')) : [],
        page_selected: localStorage.getItem('page_selected')!== "undefined" ? localStorage.getItem('page_selected') : '',
        product_reviews: localStorage.getItem('product_reviews') ? JSON.parse(localStorage.getItem('product_reviews')) : [],           
    },

    action
    ) => {
    switch(action.type) {
        case  ADD_TO_CART: {
            let item = action.payload;
            const index = state?.cart.findIndex((cartItem) => cartItem?.id == item?.id);
            console.log(index);
            let newCart;
            if (index >= 0) {
                const myCart = state?.cart;
                const itemm = myCart[index];
                let newCartItem = {...(state?.cart[index]), qty: (itemm?.qty) + 1 }
                newCart = state?.cart.map((product) => product?.id == item?.id ? newCartItem : product);
            } else {
                newCart = [...state?.cart, {...item, qty: 1}];
            }
            
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {...state, cart: newCart}
        }

        case DELETE_FROM_CART: {
            let item = action.payload;
            const newCart = state.cart.filter((prod) => prod?.id !== item?.id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {...state, cart: newCart}
        }
        
        case UPDATE_CART_ITEM: {
            let item = action.payload;
            const newCart = state.cart.map((prod) => prod.id == item.id ?  item : prod              
            );
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {...state, cart: newCart}
        }

        case TRANSACTION: {
            localStorage.setItem('cart', null);
            return {...state, transaction: action?.payload};
        }

        case LATEST_PRODUCTS: {
            localStorage.setItem('products', JSON.stringify(action?.payload));
            return {...state, products: action?.payload};
        }
        
        case CATEGORY_PRODUCTS: {
            return {...state, categoryProducts: action?.payload}
        }

        case CURRENT_PRODUCT: {
            localStorage.setItem('product', JSON.stringify(action?.payload))
            return {...state, product: action.payload}
        }

        case CATEGORIES: {
            return {...state, categories: action?.payload}
        }
        
        // case LANGUAGE: {
        //     return {...state, language: action?.payload}
        // }
        case START_LOADING: {
            return { ...state, isLoading: true }
        }
        case END_LOADING: {
            return { ...state, isLoading: false }
        }
        case ALL_PRODUCTS: {
            
            return {...state, filteredProducts: action?.payload?.data, numberOfPages: action?.payload?.last_page}
        }

        case GET_BRANDS: {
            const {filter_brand, filter_category} = action?.payload;
            localStorage.setItem('brands', JSON.stringify(filter_brand));
            localStorage.setItem('categories', JSON.stringify(filter_category));
            return {...state, brands: filter_brand, categories: filter_category};
        }

        case SLIDER_IMAGES: {
            localStorage.setItem('sidebarData', JSON.stringify(action?.payload))
            return {...state, sidebarData: action?.payload}
        }

        case CURRENT_CATEGORY: {
            localStorage.setItem('currentCategory', action?.payload)
            return {...state, currentCategory: action.payload}
        }

        case WHISHLIST_ITEMS: {
            localStorage.setItem('whislistItems', JSON.stringify(action?.payload));
            return {...state, whislistItems: action?.payload}
        }

        case PAGE_SELECTED: {
            localStorage.setItem('page_selected', action?.payload);
            return {...state, page_selected: action?.payload}
        }
        // PRODUCT_REVIEWS
        case PRODUCT_REVIEWS: {
            localStorage.setItem('product_reviews', JSON.stringify(action?.payload));
            return {...state, product_reviews: action?.payload}
        }
        
        default: {
            return state;
        }
    }
}
export default reducer;
