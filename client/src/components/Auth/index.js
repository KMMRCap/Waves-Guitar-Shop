import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CustomButton from '../../common/CustomButton';
import Login from './Login'

const Auth = () => {
    return (
        <Box className='page_wrapper'>
            <Container className='container'>
                <Box className='register_login_container'>
                    <Box className='left'>
                        <Typography component='h1'>New Customer</Typography>
                        <Typography component='p'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
                        </Typography>
                        <CustomButton
                            link
                            path='/register'
                            title='Create an account' />
                    </Box>
                    <Box className='right'>
                        <Typography component='h2'>New Customer</Typography>
                        <Typography component='p'>If you have an account, please log in.</Typography>
                        <Login />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Auth;