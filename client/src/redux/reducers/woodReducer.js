import {
    ADD_WOOD, GET_WOODS
} from '../types'

const woodReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_WOOD:
            return { ...state, addWoodSuccess: action.payload }
        case GET_WOODS:
            return { ...state, woods: action.payload }
        default:
            return state
    }
}

export default woodReducer