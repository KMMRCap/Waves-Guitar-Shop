import {
    SITE_INFO, UPDATE_SITE_INFO
} from '../types'

const siteReducer = (state = {}, action) => {
    switch (action.type) {
        case SITE_INFO:
            return { ...state, info: action.payload }
        case UPDATE_SITE_INFO:
            return {
                ...state,
                updateSuccess: action.payload.success,
                info: action.payload.siteInfo[0]
            }
        default:
            return state
    }
}

export default siteReducer