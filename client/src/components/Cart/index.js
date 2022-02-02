import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material'
import UserLayout from '../../hoc/UserLayout'
import { FaFrown, FaSmile } from 'react-icons/fa'
import CartProductBlock from './CartProductBlock';
import Paypal from './Paypal'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, removeCartItem } from '../../redux/actions/userActions'

const Cart = () => {

    const [paymentSuccess, setPaymentSuccess] = useState(false)

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        let cartItemsId = []
        if (user.userData.cart) {
            if (user.userData.cart.length > 0) {
                user.userData.cart.forEach(item => {
                    cartItemsId.push(item.id)
                })
            }
        }
        dispatch(getCartItems(cartItemsId, user.userData.cart))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTotalPrice = () => {
        let totalPrice = 0
        user.cartDetail?.forEach(item => {
            let price = item.price * item.quantity
            totalPrice += price
        })
        return totalPrice
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeCartItem(id))
    }

    return (
        <UserLayout>
            <Box>
                <Typography
                    component='h1'
                    variant='h4'
                    sx={{ fontWeight: 'bold', margin: '1rem 0' }}>My Cart</Typography>
                <Box className='user_cart'>
                    <CartProductBlock
                        products={user.cartDetail}
                        removeItem={(id) => handleRemoveFromCart(id)}
                    />
                    {user.cartDetail?.length > 0 ?
                        <Box className='user_cart_sum'>
                            <Typography component='p'>
                                Total Price : ${handleTotalPrice()}
                            </Typography>
                        </Box>
                        :
                        user.cartDetail?.length === 0 && !paymentSuccess ?
                            <Box className='cart_no_items'>
                                <FaFrown />
                                <Typography component='p'>
                                    You have no items
                                </Typography>
                            </Box>
                            :
                            null
                    }
                    {user.cartDetail?.length > 0 && !paymentSuccess ?
                        <Box className='paypal_button_container'>
                            <Paypal
                                total={handleTotalPrice()}
                                cartDetail={user.cartDetail}
                                setPaymentSuccess={setPaymentSuccess}
                            />
                        </Box>
                        :
                        null
                    }
                </Box>
                {paymentSuccess ?
                    <Box className='cart_no_items'>
                        <FaSmile />
                        <Typography component='p'>
                            Your Orders has been submited
                        </Typography>
                    </Box>
                    :
                    null
                }
            </Box>
        </UserLayout>
    );
}

export default Cart;