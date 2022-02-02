import React from 'react';
import { Box, Container,Typography } from '@mui/material'

const ShopPagesHeader = (props) => {
    return (
        <Box className='page_top'>
            <Container className='container'>
                <Typography component='h6'>
                    {props.title}
                </Typography>
            </Container>
        </Box>
    );
}

export default ShopPagesHeader;