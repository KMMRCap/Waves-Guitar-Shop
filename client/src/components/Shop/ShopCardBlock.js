import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import Card from '../../common/Card'

const ShopCardBlock = (props) => {
    return (
        <Box className='card_block_shop'>
            <Box>
                <Box>
                    {props.list ?
                        props.list.length === 0 ?
                            <Box className='no_result'>
                                Sorry, No Result
                            </Box>
                            :
                            props.list.map(card => (
                                <Card key={card._id} {...card} grid={props.grid} />
                            ))
                        :
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                            <CircularProgress thickness={7} color='primary' />
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default ShopCardBlock;