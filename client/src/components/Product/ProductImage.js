import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'
import notAvailable from '../../assets/images/image_not_availble.png'
import { FiMoreHorizontal } from 'react-icons/fi'
import LightBox from './LightBox';

const ProductImage = (props) => {

    const [images, setImages] = useState([]);
    const [lightbox, setLightbox] = useState(false);

    useEffect(() => {
        if (props.product.images.length > 0) {
            let prodImages = []
            props.product.images.forEach(item => {
                prodImages.push(item.url)
            })
            setImages(prodImages)
        }
        else {
            setImages([notAvailable])
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <Box className='product_image_container'>
                <Box className='main_pic' sx={{ textAlign: 'center', cursor: 'unset !important' }}>
                    <Box
                        component='img'
                        src={images[0]}
                        onClick={() => { }}
                        sx={{ maxWidth: '100%', maxHeight: '50vh' }}
                    />
                </Box>
                <Box className='main_thumbs'>
                    {images.map((item, index) => (
                        index > 0 && index < 3 ?
                            <Box
                                key={index}
                                component='img'
                                className='thumb'
                                src={item}
                                sx={{ cursor: 'unset !important' }}
                            />
                            :
                            null
                    ))}
                    {images.length > 2 ?
                        <Box
                            className='thumb'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'gray'
                            }}
                            onClick={() => setLightbox(true)}
                        >
                            <FiMoreHorizontal style={{ width: '3rem', height: '3rem' }} />
                        </Box>
                        :
                        null
                    }
                </Box>
            </Box>
            {!lightbox ?
                null
                :
                <LightBox images={images} setLightbox={setLightbox} />
            }
        </>
    );
}

export default ProductImage;