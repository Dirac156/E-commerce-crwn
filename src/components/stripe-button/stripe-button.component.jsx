import React from "react";

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51IYpyKFaWyuFnMJkc5uPCb1Kud3b0jJ0SqOecv3AUvS5PAhPiv6atcxqPwHsJxgzrjvWfVP7FCh9iT2SezwwPoVg00IcSkMfSc";

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout 
            lable='Pay Now'

            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}

            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}

            stripeKey = {publishablekey}
        />
    )
}

export default StripeCheckoutButton;