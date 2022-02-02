import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { onSuccessBuy } from '../../redux/actions/userActions';

const Paypal = (props) => {
    const dispatch = useDispatch();

    const client = {
        sandbox: 'AfbA2-qjz92KhC5IDxvx2UpiIDBmSD7PdlKkZk1-OndNwg7Wc5wVAJKlPWQJcHwioMFz0kn4zOXnbqGW',
        production: ''
    }

    const onSuccess = (payment) => {
        dispatch(onSuccessBuy({
            cartDetail: props.cartDetail,
            paymentData: payment
        })).then(res => {
            props.setPaymentSuccess(true)
        })
    }
    const onCancel = (data) => {
        toast.warning("Payment Cancelled", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const onError = (err) => {
        toast.error('Payment Failed', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <PaypalExpressBtn
                env='sandbox'
                client={client}
                currency={'USD'}
                total={props.total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{
                    size: 'large',
                    color: 'blue',
                    shape: 'rect',
                    label: 'checkout'
                }}
            />
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

export default Paypal;