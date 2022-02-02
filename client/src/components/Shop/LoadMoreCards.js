import { Box, Typography } from '@mui/material';
import React from 'react';
import ShopCardBlock from './ShopCardBlock'

const LoadMoreCards = (props) => {
    return (
        <Box>
            <Box>
                <ShopCardBlock grid={props.grid} list={props.products} />
            </Box>
            {props.size > 0 && props.size >= props.limit ?
                <Box className='load_more_container'>
                    <Typography component='span' onClick={() => props.loadMore()}>
                        Load More
                    </Typography>
                </Box>
                :
                null
            }
        </Box>
    );
}

export default LoadMoreCards;