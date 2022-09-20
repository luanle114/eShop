import React from 'react';
import './CheckoutSteps.css';

const CheckoutSteps = (props) => {
  return (
    <div className='checkout-steps'>
      <p className={props.step1 ? 'active' : ''}>Sign-in</p>
      <p className={props.step2 ? 'active' : ''}>Shipping</p>
      <p className={props.step3 ? 'active' : ''}>Payment</p>
      <p className={props.step4 ? 'active' : ''}>Place Order</p>
    </div>
  )
};

export default CheckoutSteps;