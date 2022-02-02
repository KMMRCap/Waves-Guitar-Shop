import {
    ADD_PRODUCT, GET_PRODUCT_BY_SELL, GET_PRODUCT_BY_ARRIVAL, GET_PRODUCT_BY_ID
} from '../types'

const productReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, addProductSuccess: action.payload }
        case GET_PRODUCT_BY_SELL:
            return { ...state, bySell: action.payload }
        case GET_PRODUCT_BY_ARRIVAL:
            return { ...state, byArrival: action.payload }
        case GET_PRODUCT_BY_ID:
            return { ...state, byId: action.payload }
        default:
            return state
    }
}

export default productReducer