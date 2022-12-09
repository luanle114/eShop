import React from 'react';
import { IStyledCheckoutSteps } from './CheckoutSteps.style';

const CheckoutSteps = (props: any) => {
  return (
    <IStyledCheckoutSteps>
      <div className='checkout-steps'>
        <p className={props.step1 ? 'active' : ''}>Sign-in</p>
        <p className={props.step2 ? 'active' : ''}>Shipping</p>
        <p className={props.step3 ? 'active' : ''}>Payment</p>
        <p className={props.step4 ? 'active' : ''}>Place Order</p>
      </div>
    </IStyledCheckoutSteps>
  )
};

export default CheckoutSteps;