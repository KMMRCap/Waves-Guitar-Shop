import { Box, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../../common/CustomButton';
import Slide3 from '../../assets/images/featured/featured_home_3.jpg'

const HomePromotion = () => {

    const promotion = {
        img: Slide3,
        lineOne: 'Up to 40% off',
        lineTwo: 'In seconds hand guitars',
        title: 'Shop now',
        path: '/shop'
    }
    return (
        <Box className='home_promotion'>
            {promotion ?
                <Box className='home_promotion_img' sx={{ background: `url(${promotion.img})` }}>
                    <Typography component='span' className='tag title'>{promotion.lineOne}</Typography>
                    <Typography component='span' className='tag low_title'>{promotion.lineTwo}</Typography>
                    <Box>
                        <CustomButton
                            link
                            path={promotion.path}
                            title={promotion.title}
                            styles={{
                                margin: '10px 0 0 0'
                            }}
                        />
                    </Box>
                </Box>
                :
                null
            }
        </Box>
    );
}

export default HomePromotion;