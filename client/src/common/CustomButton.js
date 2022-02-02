import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'

const CustomButton = (props) => {
    return (
        <Box className='my_link'>
            {props.link ?
                <Link
                    to={props.path}
                    className={props.altClass ? props.altClass : "link_default"}
                    {...props.styles}
                    state={props.state}
                >
                    {props.title}
                </Link>
                :
                <Button type={props.type} className='link_default' sx={props.styles}>
                    {props.title}
                </Button>
            }
        </Box>
    );
}

export default CustomButton;