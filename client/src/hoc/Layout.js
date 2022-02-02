import React from 'react'
import { Box } from '@mui/material';
import Header from './../components/Header';
import Footer from './../components/Footer';

const Layout = (props) => {
    return (
        <>
            <Header />
            <Box className='page_container'>
                {props.children}
            </Box>
            <Footer />
        </>
    );
}

export default Layout;