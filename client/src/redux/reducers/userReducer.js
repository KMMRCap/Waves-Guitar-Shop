import {
    LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER,
    UPDATE_PROFILE_USER, ADD_TO_CART_USER, GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER, ON_SUCCESS_BUY_USER
} from '../types'

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload.loginSuccess }
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        case LOGOUT_USER:
            return { ...state, logoutSuccess: action.payload.success }
        case UPDATE_PROFILE_USER:
            return { ...state, updateSuccess: action.payload }
        case ADD_TO_CART_USER:
            return {
                ...state,
                userData: { ...state.userData, cart: action.payload }
            }
        case GET_CART_ITEMS_USER:
            return { ...state, cartDetail: action.payload }
        case REMOVE_CART_ITEM_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: { ...state.userData, cart: action.payload.cart }
            }
        case ON_SUCCESS_BUY_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: { ...state.userData, cart: action.payload.cart },
                buySuccess: action.payload.success
            }
        default:
            return state
    }
}

export default userReducer