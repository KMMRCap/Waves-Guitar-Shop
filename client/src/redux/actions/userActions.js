import axios from 'axios'
import {
    USERS_LOGIN, USERS_REGISTER, USERS_AUTH,
    USERS_LOGOUT, USERS_UPDATEPROFILE, USERS_ADDTOCART, PRODUCT_ARCTICLE_BY_ID,
    USERS_REMOVEFROMCART, USERS_SUCCESSBUY
} from '../../common/API-Types'
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER,
    LOGOUT_USER, UPDATE_PROFILE_USER, ADD_TO_CART_USER, GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER, ON_SUCCESS_BUY_USER
} from '../types'

export const loginUser = async (values) => {
    const req = await axios.post(USERS_LOGIN, values)
    return {
        type: LOGIN_USER,
        payload: req.data
    }
}

export const registerUser = async (values) => {
    const req = await axios.post(USERS_REGISTER, values)
    return {
        type: REGISTER_USER,
        payload: req.data
    }
}

export const auth = async () => {
    const req = await axios.get(USERS_AUTH)
    return {
        type: AUTH_USER,
        payload: req.data
    }
}

export const logoutUser = async () => {
    const req = await axios.get(USERS_LOGOUT)
    return {
        type: LOGOUT_USER,
        payload: req.data
    }
}

export const updateProfileUser = async (values) => {
    const req = await axios.post(USERS_UPDATEPROFILE, values)
    return {
        type: UPDATE_PROFILE_USER,
        payload: req.data
    }
}

export const addToCartUser = async (id) => {
    const req = await axios.post(`${USERS_ADDTOCART}?productId=${id}`)
    return {
        type: ADD_TO_CART_USER,
        payload: req.data
    }
}

export const getCartItems = (cartItems, userCart) => {
    let req = []
    if (cartItems.length > 0 && userCart.length > 0) {
        req = axios.get(`${PRODUCT_ARCTICLE_BY_ID}?id=${cartItems}&type=array`).then(res => {
            userCart.forEach(item => {
                res.data.forEach((k, i) => {
                    if (item.id === k._id) {
                        res.data[i].quantity = item.quantity
                    }
                })
            })
            return res.data
        })
    }
    return {
        type: GET_CART_ITEMS_USER,
        payload: req
    }
}

export const removeCartItem = (id) => {
    const req = axios.get(`${USERS_REMOVEFROMCART}?_id=${id}`).then(res => {
        res.data.cart.forEach(item => {
            res.data.cartDetail.forEach((k, i) => {
                if (item.id === k._id) {
                    res.data.cartDetail[i].quantity = item.quantity
                }
            })
        })
        return res.data
    })
    return {
        type: REMOVE_CART_ITEM_USER,
        payload: req
    }
}

export const onSuccessBuy = async (values) => {
    const req = await axios.post(USERS_SUCCESSBUY,values)
    return {
        type: ON_SUCCESS_BUY_USER,
        payload: req.data
    }
}