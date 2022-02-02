import {
    ADD_BRAND,GET_BRANDS
} from '../types'

const brandReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_BRAND:
            return { ...state, addBrandSuccess: action.payload }
        case GET_BRANDS:
            return { ...state, brands: action.payload }
        default:
            return state
    }
}

export default brandReducer