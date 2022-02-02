import React, { useEffect } from "react";
import { Box, Container, Typography } from '@mui/material';
import { FaCompass, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {siteInfo} from '../../redux/actions/siteActions'

const Footer = (props) => {

    const dispatch = useDispatch();
    const site = useSelector(state => state.site);

    useEffect(() => {
        dispatch(siteInfo())
    }, [dispatch]);
    

    return (
        <Box component='footer' className='bck_b_dark'>
            <Container className='container'>
                <Box className="logo">waves</Box>
                <Box className='wrapper' sx={{ marginTop: '1.5rem' }}>
                    <Box className='left'>
                        <Typography component='h2'>Contact Information</Typography>
                        <Box className='business_nfo'>
                            <Box className='tag'>
                                <FaCompass className='icon' />
                                <Box className='nfo'>
                                    <Typography component='p'>Address</Typography>
                                    <Typography component='p'>{site.info?.address}</Typography>
                                </Box>
                            </Box>
                            <Box className='tag'>
                                <FaPhone className='icon' />
                                <Box className='nfo'>
                                    <Typography component='p'>Phone</Typography>
                                    <Typography component='p'>{site.info?.phone}</Typography>
                                </Box>
                            </Box>
                            <Box className='tag'>
                                <FaClock className='icon' />
                                <Box className='nfo'>
                                    <Typography component='p'>Working Hours</Typography>
                                    <Typography component='p'>{site.info?.hours}</Typography>
                                </Box>
                            </Box>
                            <Box className='tag'>
                                <FaEnvelope className='icon' />
                                <Box className='nfo'>
                                    <Typography component='p'>Email</Typography>
                                    <Typography component='p'>{site.info?.email}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='right'>
                        <Typography component='h2'>Be the first to know</Typography>
                        <Box>
                            <Typography component='p'>
                                Get all the latest information on events, sales and offers.
                                You can miss out.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;