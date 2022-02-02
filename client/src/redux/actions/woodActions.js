import axios from 'axios'
import {
    PRODUCT_WOOD, PRODUCT_WOODS
} from '../../common/API-Types'
import {
    ADD_WOOD, GET_WOODS
} from '../types'

export const wood = async () => {
    const req = await axios.get(PRODUCT_WOODS)
    return {
        type: GET_WOODS,
        payload: req.data
    }
}

export const addWood = async (values) => {
    const req = await axios.post(PRODUCT_WOOD, values)
    return {
        type: ADD_WOOD,
        payload: req.data
    }
}