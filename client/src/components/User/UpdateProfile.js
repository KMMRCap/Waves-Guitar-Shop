import { Typography } from '@mui/material';
import React from 'react';
import UserLayout from '../../hoc/UserLayout'
import UpdatePersonalInfo from './UpdatePersonalInfo';

const UpdateProfile = (props) => {
    return (
        <UserLayout>
            <Typography
                component='h1'
                variant='h4'
                sx={{ margin: '1rem 0', fontWeight: 'bold' }}>
                Profile
            </Typography>
            <UpdatePersonalInfo user={props.user} />
        </UserLayout>
    );
}

export default UpdateProfile;