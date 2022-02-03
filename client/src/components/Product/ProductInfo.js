import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaTruck, FaCheck, FaTimes, FaShoppingBag } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartUser } from '../../redux/actions/userActions'

const ProductInfo = ({ product }) => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleAddToCart = (id) => {
        if (user.userData?.isAuth) {
            dispatch(addToCartUser(id)).then(res => {
                if (res.payload) {
                    toast.success('Product Added Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        }
        else {
            toast.error('you need to login first', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <>
            <Typography compinent='h1' variant='h4' sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                {product.brand.name} {product.name}
            </Typography>
            <Typography component='p'>
                {product.description}
            </Typography>
            <Box className='product_tags'>
                {product.shipping ?
                    <Box className='tag'>
                        <Box>
                            <FaTruck />
                        </Box>
                        <Box className='tag_text'>
                            <Typography component='p'>Free Shipping</Typography>
                            <Typography component='p'>and return</Typography>
                        </Box>
                    </Box>
                    :
                    null
                }
                {product.available ?
                    <Box className='tag'>
                        <Box>
                            <FaCheck />
                        </Box>
                        <Box className='tag_text'>
                            <Typography component='p'>Available</Typography>
                            <Typography component='p'>in store</Typography>
                        </Box>
                    </Box>
                    :
                    <Box className='tag'>
                        <Box>
                            <FaTimes />
                        </Box>
                        <Box className='tag_text'>
                            <Typography component='p'>Not Available</Typography>
                            <Typography component='p'>Preorder only</Typography>
                        </Box>
                    </Box>
                }
            </Box>
            <Box className='product_actions'>
                <Typography className='price' component='p'>
                    ${product.price}
                </Typography>
                <Box className='cart'>
                    <Box className='my_link'>
                        <Box className='add_to_cart_link' onClick={() => handleAddToCart(product._id)}>
                            <FaShoppingBag />
                            <Typography component='span'>
                                Add To Cart
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='product_specifications'>
                <Typography
                    component='h2'
                    variant='h5'
                    sx={{ fontWeight: 'bold', margin: '1rem 0' }}
                >
                    Specs:
                </Typography>
                <Box>
                    <Box className='item'>
                        <Typography component='p'>
                            <Typography component='strong' sx={{ marginRight: '5px' }}>
                                Frets:
                            </Typography>
                            {product.frets}
                        </Typography>
                    </Box>
                    <Box className='item'>
                        <Typography component='p'>
                            <Typography component='strong' sx={{ marginRight: '5px' }}>
                                Wood:
                            </Typography>
                            {product.wood.name}
                        </Typography>
                    </Box>
                </Box>
            </Box>
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
        </>
    );
}

export default ProductInfo;