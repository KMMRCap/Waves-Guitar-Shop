import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserLayout = (props) => {

    const user = useSelector(state => state.user);

    const links = [
        { name: 'My Account', path: '/user/dashboard' },
        { name: 'User Information', path: '/user/profile' },
        { name: 'My Cart', path: '/user/cart' },
    ]

    const admin = [
        { name: 'Site Info', path: '/admin/site-info' },
        { name: 'Add Product', path: '/admin/add-product' },
        { name: 'Manage Categories', path: '/admin/manage-categories' },
    ]

    return (
        <Container className='container'>
            <Box className='user_container'>
                <Box className='user_left_nav'>
                    <Box className='user-navs'>
                        <Typography
                            component='h2'
                            variant='h5'
                            sx={{ fontWeight: 'bold', margin: '1rem 0' }}>My Account</Typography>
                        <Box className='links'>
                            {links.map((link, i) => (
                                <Link to={link.path} key={i}>
                                    {link.name}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    {user.userData?.isAdmin ?
                        <Box className='user-navs'>
                            <Typography
                                component='h2'
                                variant='h5'
                                sx={{ fontWeight: 'bold', margin: '2rem 0 1rem' }}>Admin</Typography>
                            <Box className='links'>
                                {admin.map((link, i) => (
                                    <Link to={link.path} key={i}>
                                        {link.name}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        :
                        null
                    }
                </Box>
                <Box className='user_right'>
                    {props.children}
                </Box>
            </Box>
        </Container>
    );
}

export default UserLayout;