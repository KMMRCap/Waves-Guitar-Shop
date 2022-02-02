import React, { useEffect, useState } from 'react';
import { Box, Collapse } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const CollapseCheckBox = (props) => {

    const [open, setOpen] = useState(props.initState);
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        props.handleFilter(checked)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    const handleToggleCheckBox = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
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
                        {props.list ?
                            props.list.map((value, index) => (
                                <ListItem
                                    key={index}
                                    sx={{ padding: '10px 0' }}
                                    secondaryAction={
                                        <Checkbox
                                            color='primary'
                                            edge="end"
                                            onChange={() => handleToggleCheckBox(value._id)}
                                            checked={checked.indexOf(value._id) !== -1}
                                        />
                                    }>
                                    <ListItemText primary={value.name} />
                                </ListItem>
                            ))
                            :
                            null
                        }
                    </List>
                </Collapse>
            </List>
        </Box>
    );
}

export default CollapseCheckBox;