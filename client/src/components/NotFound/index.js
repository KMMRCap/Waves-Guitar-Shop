import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Box>
            <Typography component='h1' variant='h1'>
                404 ERROR
            </Typography>
            <Typography component='h1' variant='h1'>
                Page not found
            </Typography>
        </Box>
    );
}
 
export default NotFound;