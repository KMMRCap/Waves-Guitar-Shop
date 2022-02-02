import React from "react";
import { Formik, Form } from 'formik'
import { Box } from '@mui/material'
import FormField from "../../common/FormField";
import CustomButton from "../../common/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { auth, loginUser } from '../../redux/actions/userActions'

const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    return (
        <Box className="signin_wrapper">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validate={values => {
                    const errors = {};

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

                    return errors;
                }}

                onSubmit={(values) => {
                    dispatch(loginUser(values)).then(res => {
                        if (res.payload.loginSuccess) {
                            toast.success('You Successfully Logged in', {
                                position: "top-right",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            dispatch(auth()).then(res => {
                                if (res.payload.isAuth) {
                                    setTimeout(() => {
                                        navigate('/user/dashboard')
                                    }, 1000)
                                }
                            })
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
                    <FormField
                        formType='input'
                        name="email"
                        placeholder="Email Address"
                        type="email"
                    />
                    <FormField
                        formType='input'
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <CustomButton
                        type='submit'
                        title='Log In'
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
    );
}

export default Login;