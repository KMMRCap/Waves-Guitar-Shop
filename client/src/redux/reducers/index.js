import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import siteReducer from "./siteReducer";
import userReducer from "./userReducer";
import woodReducer from "./woodReducer";

const rootReducer = combineReducers({
    user: userReducer,
    site: siteReducer,
    wood: woodReducer,
    brand: brandReducer,
    product: productReducer,
    shop: shopReducer
})

export default rootReducer