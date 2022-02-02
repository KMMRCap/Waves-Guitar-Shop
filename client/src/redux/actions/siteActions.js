import axios from 'axios'
import {
    SITE_DATA
} from '../../common/API-Types'
import {
    SITE_INFO,UPDATE_SITE_INFO
} from '../types'

export const siteInfo = async () => {
    const req = await axios.get(SITE_DATA)
    return {
        type: SITE_INFO,
        payload: req.data[0]
    }
}

export const updateSiteInfo = async (values) => {
    const req = await axios.post(SITE_DATA, values)
    return {
        type: UPDATE_SITE_INFO,
        payload: req.data
    }
}