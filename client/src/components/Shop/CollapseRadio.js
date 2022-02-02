import React, { useEffect, useState } from 'react';
import { Box, Collapse } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CollapseRadio = (props) => {

    const [open, setOpen] = useState(props.initState);
    const [radioValue, setRadioValue] = useState(0);

    useEffect(() => {
        props.handleFilter(radioValue)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [radioValue]);


    const handleRadioValue = (e) => {
        setRadioValue(parseInt(e.target.value))
    }

    return (
        <Box className='collapse_items_wrapper'>
            <List sx={{ borderBottom: '1px solid #dbdbdb', padding: '10px 23px 10px 0' }}>
                <ListItem onClick={() => setOpen(!open)} sx={{ cursor: 'pointer' }}>
                    <ListItemText primary={props.title} className='collapse_title' />
                    {open ?
                        <FaAngleUp className='icon' />
                        :
                        <FaAngleDown className='icon' />
                    }
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <RadioGroup
                            name="radio-buttons-group"
                            value={radioValue}
                            onChange={(e) => handleRadioValue(e)}
                        >
                            {props.list ?
                                props.list.map((value, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={value._id}
                                        control={<Radio />}
                                        label={value.name}
                                    />
                                ))
                                :
                                null
                            }
                        </RadioGroup>
                    </List>
                </Collapse>
            </List>
        </Box>
    );
}

export default CollapseRadio;