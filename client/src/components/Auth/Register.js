import React, { useState } from "react";
import { Box, Container, Dialog, Typography } from '@mui/material'
import { Formik, Form } from "formik";
import FormField from "../../common/FormField";
import CustomButton from "../../common/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { registerUser } from "../../redux/actions/userActions";

const Register = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const navigate = useNavigate()

    const dispatch = useDispatch()

    return (
        <Box>
            <Container className='container'>
                <Box className='register_login_container'>
                    <Box className='left'>
                        <Formik
                            initialValues={{
                                name: '',
                                lastname: '',
                                email: '',
                                password: '',
                                confirmPassword: ''
                            }}

                            validate={values => {
                                const errors = {};

                                if (!values.name) {
                                    errors.name = 'Required';
                                } else if (values.name.match(/\d+/g)) {
                                    errors.name = 'Should be a text'
                                }

                                if (!values.lastname) {
                                    errors.lastname = 'Required';
                                } else if (values.lastname.match(/\d+/g)) {
                                    errors.lastname = 'Should be a text'
                                }

                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                    errors.email = 'Wrong Email';
                                }

                                if (!values.password) {
                                    errors.password = 'Required';
                                } else if (values.password.length < 6) {
                                    errors.password = 'Min : 6';
                                }

                                if (!values.confirmPassword) {
                                    errors.confirmPassword = 'Required';
                                } else if (values.confirmPassword !== values.password) {
                                    errors.confirmPassword = 'Not the same';
                                }

                                return errors;
                            }}

                            onSubmit={(values) => {
                                let newValues = {}
                                for (let key in values) {
                                    if (key !== 'confirmPassword') {
                                        newValues[key] = values[key]
                                    }
                                }
                                dispatch(registerUser(newValues)).then(res => {
                                    if (res.payload.success) {
                                        toast.success('Success', {
                                            position: "top-right",
                                            autoClose: 2000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                        setOpenDialog(true)
                                        setTimeout(() => {
                                            navigate('/auth')
                                        }, 2500)
                                    }
                                    else {
                                        toast.error(res.data.message, {
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
                                <Typography component='h2'
                                    variant='h5' sx={{ fontWeight: 'bold' }}>Personal Information</Typography>
                                <Box className='form_block_two'>
                                    <FormField
                                        formType='input'
                                        twoField
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                    />
                                    <FormField
                                        formType='input'
                                        twoField
                                        name="lastname"
                                        placeholder="Last Name"
                                        type="text"
                                    />
                                </Box>
                                <FormField
                                    formType='input'
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                />
                                <Typography component='h2'
                                    variant='h5' sx={{ fontWeight: 'bold' }}>Verify Password</Typography>
                                <Box className='form_block_two'>
                                    <FormField
                                        formType='input'
                                        twoField
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                    />
                                    <FormField
                                        formType='input'
                                        twoField
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        type="password"
                                    />
                                </Box>
                                <CustomButton
                                    type='submit'
                                    title='Create Account'
                                    styles={{
                                        background: '#e1ddc3',
                                        color: 'black',
                                        marginTop: '1rem'
                                    }} />
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
            </Container>
            <Dialog open={openDialog}>
                <Box className='dialog_alert'>
                    <Box>Congratulations !!</Box>
                    <Box>You will be redirected in a few seconds</Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default Register;