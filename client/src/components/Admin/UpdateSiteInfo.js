import React from 'react';
import { Formik, Form } from 'formik'
import FormField from "../../common/FormField";
import CustomButton from "../../common/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSiteInfo } from '../../redux/actions/siteActions'

const UpdateSiteInfo = () => {

    const site = useSelector(state => state.site);
    const dispatch = useDispatch();

    return (
        <>
            {!site.info ?
                <CircularProgress thickness={7} color='primary' />
                :
                <Formik
                    initialValues={{
                        address: site.info.address,
                        hours: site.info.hours,
                        phone: site.info.phone,
                        email: site.info.email
                    }}

                    validate={values => {
                        const errors = {};

                        if (!values.address) {
                            errors.address = 'Required';
                        }

                        if (!values.hours) {
                            errors.hours = 'Required';
                        }

                        if (!values.phone) {
                            errors.phone = 'Required';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Wrong Email';
                        }

                        return errors;
                    }}

                    onSubmit={(values) => {
                        dispatch(updateSiteInfo(values)).then(res => {
                            if(res.payload.success){
                                toast.success("Information Updated Successfully", {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
                            else {
                                toast.error("Update Failed", {
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
                            name="address"
                            placeholder="Enter the site address"
                            type="text"
                            label='Address'
                        />
                        <FormField
                            formType='input'
                            name="hours"
                            placeholder="Enter the site working hours"
                            type="text"
                            label='Working Hours'
                        />
                        <FormField
                            formType='input'
                            name="phone"
                            placeholder="Enter the phone number"
                            type="tel"
                            label='Phone Number'
                        />
                        <FormField
                            formType='input'
                            name="email"
                            placeholder="Enter your email address"
                            type="email"
                            label='Shop Email'
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

export default UpdateSiteInfo;