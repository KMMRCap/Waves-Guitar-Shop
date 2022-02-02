import React from 'react';
import { Navigate } from 'react-router-dom';
import AddProduct from '../components/Admin/AddProduct';
import ManageCategories from '../components/Admin/ManageCategories'
import SiteInfo from '../components/Admin/SiteInfo';

const PrivateRoites = (props) => {

    return (
        <>
            {props.user.isAdmin ?
                props.comp === '/admin/add-product' ?
                    <AddProduct />
                    :
                    props.comp === '/admin/manage-categories' ?
                        <ManageCategories />
                        :
                        props.comp === '/admin/site-info' ?
                        <SiteInfo />
                        :
                        null
                :
                <Navigate to='/user/dashboard' replace />
            }
        </>
    );
}

export default PrivateRoites;