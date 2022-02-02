import React from "react";
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { auth, logoutUser } from "../../redux/actions/userActions";

const Header = (props) => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Guitars', path: '/shop' },
    ]

    const handleLogout = () => {
        dispatch(logoutUser()).then(res => {
            if (res.payload.success) {
                toast.success('You Successfully Logged out', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                dispatch(auth())
            }
        })
    }

    return (
        <Box component='header' className="bck_b_light">
            <Container className='container'>
                <Box className='right'>
                    <Box className='top'>
                        {user.userData?.isAuth ?
                            <>
                                <Box
                                    className='log_out_link'
                                    onClick={handleLogout}>
                                    <Typography
                                        component='span'
                                        sx={{ fontWeight: 'bold' }}>Log out</Typography>
                                </Box>
                                <Link to='/user/dashboard'>
                                    My Account
                                </Link>
                                <Box className='cart_link'>
                                    <Link to='/user/cart'>
                                        My Cart
                                    </Link>
                                    <Typography component='span'>
                                        {user.userData?.cart.length}
                                    </Typography>
                                </Box>
                            </>
                            :
                            <Link to='/auth'>
                                Log in
                            </Link>
                        }
                    </Box>
                    <Box className='bottom'>
                        {pages.map((item, i) => (
                            <Link to={item.path} key={i}>
                                {item.name}
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box className='left'>
                    <Box className='logo' sx={{ textAlign: 'center' }}>waves</Box>
                </Box>
            </Container>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Box>
    );
}

export default Header;