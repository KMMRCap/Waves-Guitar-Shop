// --------------Users API s

export const USERS = '/api/users'

export const USERS_AUTH = '/api/users/auth' // get
export const USERS_REGISTER = '/api/users/register' // post

export const USERS_LOGIN = '/api/users/login' // post
export const USERS_LOGOUT = '/api/users/logout' // get

export const USERS_UPLOADIMAGE = '/api/users/uploadimage' // post
export const USERS_REMOVEIMAGE = '/api/users/removeimage' // get

export const USERS_ADDTOCART = '/api/users/addToCart' // post
export const USERS_REMOVEFROMCART = '/api/users/removeFromCart' // get
 
export const USERS_SUCCESSBUY = '/api/users/successBuy' // post

export const USERS_UPDATEPROFILE = '/api/users/update_profile'

// -----------------Product API s

export const PRODUCT = '/api/product'

export const PRODUCT_ARCTICLE = '/api/product/article' // post
export const PRODUCT_ARCTICLES = '/api/product/articles' // get

export const PRODUCT_ARCTICLES_BY_SELL = '/api/product/articles?sortBy=sold&order=desc&limit=4' // get
export const PRODUCT_ARCTICLES_BY_ARRIVAL = '/api/product/articles?sortBy=createdAt&order=desc&limit=4' // get
export const PRODUCT_ARCTICLE_BY_ID = '/api/product/articles_by_id' // get

export const PRODUCT_BRAND = '/api/product/brand' // post
export const PRODUCT_BRANDS = '/api/product/brands' // get

export const PRODUCT_WOOD = '/api/product/wood' // post
export const PRODUCT_WOODS = '/api/product/woods' // get

export const PRODUCT_SHOP = '/api/product/shop'  // post

// ------------------------ Site

export const SITE_DATA = '/api/site/site_data'