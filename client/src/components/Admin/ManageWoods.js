import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Formik, Form } from 'formik'
import CustomButton from '../../common/CustomButton'
import { toast, ToastContainer } from 'react-toastify';
import FormField from '../../common/FormField';
import { useDispatch, useSelector } from 'react-redux'
import { wood, addWood } from '../../redux/actions/woodActions'

const ManageWoods = () => {

    const allWoods = useSelector(state => state.wood);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wood())
    }, [dispatch]);

    return (
        <Box className='admin_category_wrapper'>
            <Typography
                component='h1'
                variant='h4'
                sx={{ fontWeight: 'bold', margin: '1rem 0' }}>Woods</Typography>
            <Box className='admin_two_column'>
                <Box className='left'>
                    <Box className='brands_container'>
                        {allWoods.woods?.map((item, index) => (
                            <Box key={index} className='category_item'>
                                <Typography component='span'>
                                    {item.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className='right'>
                    <Formik
                        initialValues={{
                            name: ''
                        }}

                        validate={values => {
                            const errors = {};

                            if (!values.name) {
                                errors.name = 'Required';
                            }

                            return errors;
                        }}

                        onSubmit={(values, { resetForm }) => {
                            dispatch(addWood(values)).then(res => {
                                if (res.payload.success) {
                                    toast.success('Wood Added Successfully', {
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                    setTimeout(() => {
                                        resetForm()
                                    }, 1500)
                                }
                                else {
                                    toast.error('Something Went Wrong', {
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                }
                            })
                        }}
                    >
                        <Form>
                            <FormField
                                formType='input'
                                name="name"
                                placeholder="Wood Name"
                                type="text"
                            />
                            <CustomButton
                                type='submit'
                                title='Add Wood'
                                styles={{ background: '#e1ddc3', color: 'black' }} />
                        </Form>
                    </Formik>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default ManageWoods;