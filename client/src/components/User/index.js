import React from 'react';
import { Box, Typography } from '@mui/material'
import UserLayout from '../../hoc/UserLayout';
import CustomButton from '../../common/CustomButton'
import HistoryBlock from './HistoryBlock';

const UserDashboard = (props) => {
    return (
        <UserLayout>
            <Box>
                <Box className='user_nfo_panel'>
                    <Typography component='h1' variant='h3'>User Information</Typography>
                    <Box>
                        <Typography component='span'>Name : {props.user.name}</Typography>
                        <Typography component='span'>Last Name : {props.user.lastname}</Typography>
                        <Typography component='span'>Email : {props.user.email}</Typography>
                    </Box>
                    <CustomButton
                        link
                        path='/user/profile'
                        title='Edit account info'
                    />
                </Box>
                {props.user.history ?
                    <Box className='user_nfo_panel'>
                        <Typography component='h1' variant='h3'>Purchase History</Typography>
                        <Box className='user_product_block_wrapper'>
                            <HistoryBlock products={props.user.history} />
                        </Box>
                    </Box>
                    :
                    null
                }
            </Box>
        </UserLayout>
    );
}

export default UserDashboard;