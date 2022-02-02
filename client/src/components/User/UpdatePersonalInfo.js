import React from 'react';
import { Formik, Form } from 'formik'
import FormField from '../../common/FormField'
import { toast, ToastContainer } from "react-toastify";
import CustomButton from '../../common/CustomButton'
import { Typography, Box, CircularProgress } from '@mui/material';
import { auth, updateProfileUser } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux'

const UpdatePersonalInfo = (props) => {

    const dispatch = useDispatch();

    return (
        <>
            {!props.user ?
                <CircularProgress thickness={7} color='primary' />
                :
                <Formik
                    initialValues={{
                        name: props.user.name,
                        lastname: props.user.lastname,
                        email: props.user.email
                    }}

                    validate={values => {
                        const errors = {};

                        if (!values.name) {
                            errors.name = 'Required';
                        }

                        if (!values.lastname) {
                            errors.lastname = 'Required';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Wrong Email';
                        }

                        return errors;
                    }}

                    onSubmit={(values) => {
                        dispatch(updateProfileUser(values)).then(res => {
                            if (res.payload.success) {
                                toast.success("Profile Updated Successfully", {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                dispatch(auth())
                            }
                            else {
                                toast.error("Profile Update Failed", {
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
                        <Typography component='h2'>Personal Information</Typography>
                        <Box className='form_block_two'>
                            <FormField
                                formType='input'
                                twoField
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                            />
                            <FormField
                                formType='input'
                                twoField
                                name="lastname"
                                placeholder="Enter your lastname"
                                type="text"
                            />
                        </Box>
                        <FormField
                            formType='input'
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <CustomButton
                            type='submit'
                            title='Update Info'
                            styles={{ background: '#e1ddc3', color: 'black' }} />
                    </Form>
                </Formik>
            }
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
        </>
    );
}

export default UpdatePersonalInfo;