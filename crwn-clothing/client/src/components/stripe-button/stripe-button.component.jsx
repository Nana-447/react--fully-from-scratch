import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HrEylE04DaUDpM06PPB6c5yNbObwj4zES2NOxSNROje8RKW6WlCQyeYSDUgza6i4bpsZlVWZdC4jayA2eTQ169v00UioR9bUC';

  const onToken = token => {
    debugger
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Plase sure you use the provided credit card');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;