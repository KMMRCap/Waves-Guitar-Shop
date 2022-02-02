import {
    SHOP_PRODUCTS
} from '../types'

const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload.articles,
                size: action.payload.size,
            }
        default:
            return state
    }
}

export default shopReducer