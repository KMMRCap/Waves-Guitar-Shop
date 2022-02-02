import React, { useState } from 'react';
import { Box } from '@mui/material';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightBox = (props) => {

    const [index, setIndex] = useState(0);

    return (
        <Box>
            <Lightbox
                mainSrc={props.images[index]}
                nextSrc={props.images[(index + 1) % props.images.length]}
                prevSrc={props.images[(index + props.images.length - 1) % props.images.length]}
                onCloseRequest={() => props.setLightbox(false)}
                onMovePrevRequest={() => setIndex((index + props.images.length - 1) % props.images.length)}
                onMoveNextRequest={() => setIndex((index + 1) % props.images.length)}
            />
        </Box>
    );
}

export default LightBox;