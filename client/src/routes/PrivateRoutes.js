import React from 'react';
import UserDashboard from '../components/User';
import { Navigate } from 'react-router-dom';
import Cart from '../components/Cart';
import UpdateProfile from '../components/User/UpdateProfile'

const PrivateRoites = (props) => {

    return (
        <>
            {props.user.isAuth ?
                props.comp === '/user/dashboard' ?
                    <UserDashboard user={props.user} />
                    :
                    props.comp === '/user/cart' ?
                        <Cart user={props.user} />
                        :
                        props.comp === '/user/profile' ?
                            <UpdateProfile user={props.user} />
                            :
                            null
                :
                <Navigate to='/auth' replace />
            }
        </>
    );
}

export default PrivateRoites;