import {
    ADD_BRAND, GET_BRANDS
} from '../types'

const brandReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BRANDS:
            return { ...state, brands: action.payload }
        case ADD_BRAND:
            return {
                ...state, success: action.payload.success,
                brands: [...state.brands, action.payload.brand]
            }
        default:
            return state
    }
}

export default brandReducer