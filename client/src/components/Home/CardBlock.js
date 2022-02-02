import React from 'react';
import { Box, Container, Typography } from '@mui/material'
import Card from '../../common/Card';

const CardBlock = (props) => {
    return (
        <Box className='card_block'>
            <Container className='container'>
                {props.title ?
                    <Typography component='p' className='title'>
                        {props.title}
                    </Typography>
                    :
                    null
                }
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {props.list ?
                    props.list.map((card,i)=>(
                        <Card key={i} {...card} />
                    ))
                    :
                    null
                    }
                </Box>
            </Container>
        </Box>
    );
}

export default CardBlock;