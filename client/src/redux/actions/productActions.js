import axios from 'axios'
import {
    PRODUCT_ARCTICLE, PRODUCT_ARCTICLES_BY_SELL,
    PRODUCT_ARCTICLES_BY_ARRIVAL, PRODUCT_ARCTICLE_BY_ID
} from '../../common/API-Types'
import {
    ADD_PRODUCT, GET_PRODUCT_BY_SELL, GET_PRODUCT_BY_ARRIVAL, GET_PRODUCT_BY_ID
} from '../types'

export const addProduct = async (values) => {
    const req = await axios.post(PRODUCT_ARCTICLE, values)
    return {
        type: ADD_PRODUCT,
        payload: req.data
    }
}

export const productsBySell = async () => {
    const req = await axios.get(PRODUCT_ARCTICLES_BY_SELL)
    return {
        type: GET_PRODUCT_BY_SELL,
        payload: req.data
    }
}

export const productsByArrival = async () => {
    const req = await axios.get(PRODUCT_ARCTICLES_BY_ARRIVAL)
    return {
        type: GET_PRODUCT_BY_ARRIVAL,
        payload: req.data
    }
}

export const productsById = async (id) => {
    const req = await axios.get(`${PRODUCT_ARCTICLE_BY_ID}?id=${id}&type=single`)
    return {
        type: GET_PRODUCT_BY_ID,
        payload: req.data[0]
    }
}