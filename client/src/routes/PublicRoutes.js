import React from 'react';
import Home from '../components/Home'
import Auth from '../components/Auth'
import Register from '../components/Auth/Register'
import { Navigate } from 'react-router-dom';
import Shop from '../components/Shop';
import Product from '../components/Product';

const PublicRoutes = (props) => {

    return props.restrict ?
        (!props.user.isAuth ?
            (props.comp === 'auth' ?
                <Auth />
                :
                props.comp === 'register' ?
                    <Register />
                    :
                    null
            )
            :
            <Navigate to='/user/dashboard' replace />
        )
        :
        (props.comp === 'home' ?
            <Home />
            :
            props.comp === 'shop' ?
                <Shop />
                :
                props.comp === 'product-detail' ?
                    <Product />
                    :
                    null
        )
}

export default PublicRoutes;