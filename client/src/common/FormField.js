import { Box, Typography } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

const FormField = (props) => {
    return (
        <Box className={props.twoField ? 'block' : 'formBlock'}
            sx={{ display: 'flex', flexDirection: 'column' }}>
            {props.label ?
                <Typography component='span' className='label_inputs' sx={{ width: 'fit-content' }}>
                    {props.label}
                </Typography>
                :
                null
            }
            {props.formType === 'input' ?
                <Field
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder} />
                :
                props.formType === 'select' ?
                    <Field
                        as='select'
                        id={props.name}
                        name={props.name}
                    >
                        <option value=''>Select One</option>
                        {props.options?.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </Field>
                    :
                    props.formType === 'textarea' ?
                        <Field
                            as='textarea'
                            name={props.name}
                            id={props.name}
                            placeholder={props.placeholder}
                            style={{ minWidth: '100%', minHeight: '5rem' }} />
                        :
                        null
            }
            <Typography component='span' sx={{ color: '#f44336', fontSize: '15px', minHeight: '20px' }}>
                <ErrorMessage name={props.name} />
            </Typography>
        </Box>
    );
}

export default FormField;