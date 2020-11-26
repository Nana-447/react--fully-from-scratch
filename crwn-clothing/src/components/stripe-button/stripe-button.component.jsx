import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 1000;
    const publishableKey = 'pk_test_51HrEylE04DaUDpM06PPB6c5yNbObwj4zES2NOxSNROje8RKW6WlCQyeYSDUgza6i4bpsZlVWZdC4jayA2eTQ169v00UioR9bUC';

    const onToken = token => {
        console.log(token);
        alert('Payment sucessfull');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;