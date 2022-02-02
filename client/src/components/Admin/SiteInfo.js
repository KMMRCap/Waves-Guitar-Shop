import { Typography } from '@mui/material';
import React from 'react';
import UserLayout from '../../hoc/UserLayout'
import UpdateSiteInfo from './UpdateSiteInfo';

const SiteInfo = () => {
    return (
        <UserLayout>
            <Typography
                component='h1'
                variant='h4'
                sx={{ fontWeight: 'bold', margin: '1rem 0' }}
            >
                Site Info
            </Typography>
            <UpdateSiteInfo />
        </UserLayout>
    );
}

export default SiteInfo;