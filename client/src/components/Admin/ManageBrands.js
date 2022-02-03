import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Formik, Form } from 'formik'
import CustomButton from '../../common/CustomButton'
import { toast, ToastContainer } from 'react-toastify';
import FormField from '../../common/FormField';
import { useDispatch, useSelector } from 'react-redux'
import { brand, addBrand } from '../../redux/actions/brandActions'

const ManageBrands = () => {

    const allBrands = useSelector(state => state.brand);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(brand())
    }, [dispatch]);

    return (
        <Box className='admin_category_wrapper'>
            <Typography
                component='h1'
                variant='h4'
                sx={{ fontWeight: 'bold', margin: '1rem 0' }}>Brands</Typography>
            <Box className='admin_two_column'>
                <Box className='left'>
                    <Box className='brands_container'>
                        {allBrands.brands?.map((item, index) => (
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
                            dispatch(addBrand(values)).then(res => {
                                if (res.payload.success) {
                                    toast.success('Brand Added Successfully', {
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
                                placeholder="Brand Name"
                                type="text"
                            />
                            <CustomButton
                                type='submit'
                                title='Add Brand'
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
        </Box >
    );
}

export default ManageBrands;