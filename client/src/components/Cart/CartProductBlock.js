import React from 'react';
import { Box, Typography } from '@mui/material'
import notAvailable from '../../assets/images/image_not_availble.png'

const CartProductBlock = (props) => {

    return (
        <Box>
            {props.products ?
                props.products.map(product => (
                    <Box className='user_product_block' key={product._id}>
                        <Box className='item'>
                            <Box
                                className='image'
                                component='img'
                                src={product.images.length > 0 ?
                                    product.images[0].url
                                    :
                                    notAvailable
                                }
                            />
                        </Box>
                        <Box className='item'>
                            <Typography component='h4'>Product Name:</Typography>
                            <Typography component='p'>{product.brand.name} {product.name}</Typography>
                        </Box>
                        <Box className='item'>
                            <Typography component='h4'>Quantity:</Typography>
                            <Typography component='p'>{product.quantity}</Typography>
                        </Box>
                        <Box className='item'>
                            <Typography component='h4'>Price:</Typography>
                            <Typography component='p'>${product.price}</Typography>
                        </Box>
                        <Box className='item btn'>
                            <Box
                                className='cart_remove_btn'
                                onClick={() => props.removeItem(product._id)}
                            >
                                Remove
                            </Box>
                        </Box>
                    </Box>
                ))
                :
                null
            }
        </Box>
    );
}

export default CartProductBlock;