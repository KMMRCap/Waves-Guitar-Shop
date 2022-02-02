import axios from 'axios'
import {
    PRODUCT_BRAND, PRODUCT_BRANDS
} from '../../common/API-Types'
import {
    ADD_BRAND, GET_BRANDS
} from '../types'

export const brand = async () => {
    const req = await axios.get(PRODUCT_BRANDS)
    return {
        type: GET_BRANDS,
        payload: req.data
    }
}

export const addBrand = async (values) => {
    const req = await axios.post(PRODUCT_BRAND, values)
    return {
        type: ADD_BRAND,
        payload: req.data
    }
}