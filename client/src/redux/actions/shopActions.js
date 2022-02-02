import axios from 'axios'
import {
    PRODUCT_SHOP
} from '../../common/API-Types'
import {
    SHOP_PRODUCTS
} from '../types'

export const shopProducts = (skip, limit, filters = [], previousState = []) => {

    let data = { limit, skip, filters }
    const req = axios.post(PRODUCT_SHOP, data).then(res => {
        let newState = [
            ...previousState,
            ...res.data.articles
        ]
        return {
            size: res.data.size,
            articles: newState
        }
    })
    return {
        type: SHOP_PRODUCTS,
        payload: req
    }
}