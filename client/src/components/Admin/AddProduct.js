import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserLayout from '../../hoc/UserLayout'
import { Formik, Form } from 'formik'
import { toast, ToastContainer } from "react-toastify";
import CustomButton from '../../common/CustomButton';
import FormField from '../../common/FormField';
import FileUpload from './FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { wood } from '../../redux/actions/woodActions'
import { brand } from '../../redux/actions/brandActions'
import { addProduct } from '../../redux/actions/productActions'

const AddProduct = (props) => {

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const allWoods = useSelector(state => state.wood);
    const allBrands = useSelector(state => state.brand);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wood())
        dispatch(brand())
    }, [dispatch]);

    const frets = [
        { _id: 20, name: 20 },
        { _id: 21, name: 21 },
        { _id: 22, name: 22 },
        { _id: 24, name: 24 },
    ]

    const shipping = [
        { _id: true, name: 'Yes' },
        { _id: false, name: 'No' },
    ]

    const publish = [
        { _id: true, name: 'Public' },
        { _id: false, name: 'Hidden' },
    ]

    return (
        <UserLayout>
            <Typography
                component='h1'
                variant='h4'
                sx={{ fontWeight: 'bold', margin: '2rem 0' }}>Add Product</Typography>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    price: '',
                    brand: '',
                    shipping: '',
                    available: '',
                    wood: '',
                    frets: '',
                    publish: ''
                }}

                validate={values => {
                    const errors = {};

                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.description) {
                        errors.description = 'Required';
                    }
                    if (!values.price) {
                        errors.price = 'Required';
                    }
                    if (!values.brand) {
                        errors.brand = 'Required';
                    }
                    if (!values.shipping) {
                        errors.shipping = 'Required';
                    }
                    if (!values.available) {
                        errors.available = 'Required';
                    }
                    if (!values.wood) {
                        errors.wood = 'Required';
                    }
                    if (!values.frets) {
                        errors.frets = 'Required';
                    }
                    if (!values.publish) {
                        errors.publish = 'Required';
                    }

                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    let newValues = { ...values, images: uploadedFiles }
                    dispatch(addProduct(newValues)).then(res => {
                        if (res.payload.success) {
                            toast.success('Product Added Successfully', {
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
                                setUploadedFiles([])
                            }, 2100)
                        }
                        else {
                            toast.error(res.data.err.message, {
                                position: "top-right",
                                autoClose: 3000,
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
                    <FileUpload
                        uploadedFiles={uploadedFiles}
                        setUploadedFiles={setUploadedFiles}
                    />
                    <FormField
                        formType='input'
                        name="name"
                        label='Product Name'
                        placeholder="Enter Product Name"
                        type="text"
                    />
                    <FormField
                        formType='textarea'
                        name="description"
                        label='Product Description'
                        placeholder="Enter Product Description"
                    />
                    <FormField
                        formType='input'
                        name="price"
                        label='Product Price'
                        placeholder="Enter Product Price"
                        type="number"
                    />
                    <Box className='form_devider'></Box>
                    <FormField
                        formType='select'
                        name="brand"
                        label='Product Brand'
                        options={allBrands.brands}
                    />
                    <FormField
                        formType='select'
                        name="shipping"
                        label='Shipping'
                        options={shipping}
                    />
                    <FormField
                        formType='select'
                        name="available"
                        label='Available, In Stock'
                        options={shipping}
                    />
                    <Box className='form_devider'></Box>
                    <FormField
                        formType='select'
                        name="wood"
                        label='Wood Material'
                        options={allWoods.woods}
                    />
                    <FormField
                        formType='select'
                        name="frets"
                        label='Frets'
                        options={frets}
                    />
                    <Box className='form_devider'></Box>
                    <FormField
                        formType='select'
                        name="publish"
                        label='Publish'
                        options={publish}
                    />
                    <CustomButton
                        type='submit'
                        title='Add Product'
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
        </UserLayout>
    );
}

export default AddProduct;