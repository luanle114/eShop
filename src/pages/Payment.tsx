import React, { useEffect, useContext, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';
import { IStyledPayment } from '../components/Payment/Payment.style'
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart : { shippingAddress, paymentMethod }, } = state;
  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'Cash'
  );

  useEffect(() =>{
    if(!shippingAddress.address){
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    ctxDispatch({type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName});
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  }

  return (
    <div>
      <Navbar/>
      <IStyledPayment>
        <div className='payment-container'>
          <div className="payment-row">
            <div className="payment-col">
              <h2 className='payment-title'>Payment Method</h2>
            </div>
            <div className="payment-col">
              <CheckoutSteps step1 step2 step3></CheckoutSteps>
            </div>
          </div>
          <div className="payment-row">
            <div className="payment-col">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="name">Paypal</label>
                  <input type="radio" value="Paypal" checked={paymentMethodName === 'Paypal'} className="radio" name="" id="paypal" 
                  onChange={(e) => setPaymentMethod(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Cash</label>
                  <input type="radio" value="Cash" checked={paymentMethodName === 'Cash'} className="radio" name="" id="cash"
                  onChange={(e) => setPaymentMethod(e.target.value)}  />
                </div>
                <div className="form-group">
                  <button type="submit">Countinue</button>
                </div>
              </form>      
            </div>
          </div>
        </div>
      </IStyledPayment>
      <Footer/>
    </div>
  )
};

export default Payment;