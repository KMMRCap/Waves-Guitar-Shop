import { Box, Typography } from '@mui/material';
import React from 'react';
import notAvailable from '../assets/images/image_not_availble.png'
import CustomButton from './CustomButton'
import { FaShoppingBag } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartUser, auth } from '../redux/actions/userActions'

const Card = (props) => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleCardImage = (images) => {
        if (images.length > 0) {
            return images[0].url
        }
        else {
            return notAvailable
        }
    }

    const handleAddToCart = (id) => {
        if (user.userData?.isAuth) {
            dispatch(addToCartUser(id)).then(res => {
                if (res.payload) {
                    // dispatch(auth())
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
        <Box className={`card_item_wrapper ${props.grid}`} >
            <Box
                className='image'
                sx={{ background: `url(${handleCardImage(props.images)}) no-repeat` }}></Box>
            <Box className='action_container'>
                <Box className='tags'>
                    <Typography component='p' className='brand'>{props.brand.name}</Typography>
                    <Typography component='p' className='name'>{props.name}</Typography>
                    <Typography component='p' className='price'>${props.price}</Typography>
                </Box>
                {props.grid ?
                    <Box className='description'>
                        <Typography component='p'>
                            {props.description}
                        </Typography>
                    </Box>
                    :
                    null
                }
                <Box className='actions'>
                    <Box className='button_wrapp'>
                        <CustomButton
                            link
                            path={`/product-detail/${props._id}`}
                            title='View Product'
                            altClass='card_link'
                            styles={{ margin: '10px 0 0 0' }}
                            state={props._id}
                        />
                    </Box>
                    <Box className='button_wrapp'>
                        <Box className='bag_link' onClick={() => handleAddToCart(props._id)}>
                            <FaShoppingBag />
                        </Box>
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
        </Box>
    );
}

export default Card;