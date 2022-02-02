import { Box, Typography } from '@mui/material';
import React from 'react';
import Slide1 from '../../assets/images/featured/featured_home.jpg'
import Slide2 from '../../assets/images/featured/featured_home_2.jpg'
import Slider from 'react-slick'
import CustomButton from '../../common/CustomButton'

const HomeSlider = () => {

    const slides = [
        {
            img: Slide1,
            lineOne: 'Fender',
            lineTwo: 'Custom shop',
            title: 'Shop now',
            path: '/shop'
        },
        {
            img: Slide2,
            lineOne: 'B-Stock',
            lineTwo: 'Awesome discounts',
            title: 'View offers',
            path: '/shop'
        },
    ]

    const settings = {
        dots: false,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <Box className='featured_container'>
            <Slider {...settings}>
                {slides ?
                    slides.map((item, i) => (
                        <Box key={i}>
                            <Box
                                className='featured_image'
                                sx={{
                                    background: `url(${item.img})`,
                                }}>
                                <Box className='featured_action'>
                                    <Typography component='span' className='tag title'>{item.lineOne}</Typography>
                                    <Typography component='span' className='tag low_title'>{item.lineTwo}</Typography>
                                    <Box>
                                        <CustomButton
                                            link
                                            path={item.path}
                                            title={item.title}
                                            styles={{
                                                margin: '10px 0 0 0'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))
                    :
                    null
                }
            </Slider>
        </Box>
    );
}

export default HomeSlider;