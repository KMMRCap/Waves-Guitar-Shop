import React, { useEffect } from 'react';
import { Box, CircularProgress, Container } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import ShopPagesHeader from '../../common/ShopPagesHeader'
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import { useDispatch, useSelector } from 'react-redux'
import { productsById } from '../../redux/actions/productActions'

const Product = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const product_id = location.state
        dispatch(productsById(product_id)).then(res => {
            if(!res.payload){
                navigate('/shop')
            }
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Box>
            <ShopPagesHeader title='Product Detail' />
            <Container className='container'>
                {product.byId ?
                    <Box className='product_detail_wrapper'>
                        <Box className='left'>
                            <Box sx={{ width: '500px' }}>
                                <ProductImage product={product.byId} />
                            </Box>
                        </Box>
                        <Box className='right'>
                            <ProductInfo
                                product={product.byId}
                            />
                        </Box>
                    </Box>
                    :
                    <CircularProgress thickness={7} color='primary' />
                }
            </Container>
        </Box>
    );
}

export default Product;