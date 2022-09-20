import React, { useContext, useEffect, useReducer }  from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../components/PlaceOrder/PlaceOrder.css';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox/LoadingBox';

const reducer = (state, action) =>{
  switch (action.type) {
    case 'CREATE_REQUEST':
      return {...state, loading: true};
    case 'CREATE_SUCCESS':
      return {...state, loading: false};
    case 'CREATE_FAIL':
      return {...state, loading: false};
    default:
      return state;
  }
};

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [{loading}, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart, userInfo} = state;

  const roundPrice = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = roundPrice(cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0));
  cart.shippingPrice = cart.itemsPrice > 100 ? roundPrice(0) : roundPrice(10);
  cart.taxPrice = roundPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () =>{
    try {
      dispatch({type: 'CREATE_REQUEST'});
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({type: 'CART_CLEAR'});
      dispatch({type: 'CREATE_SUCCESS'});
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({type: 'CREATE_FAIL'});
      toast.error(getError(err));
    }
  };

  useEffect(() =>{
    if(!cart.paymentMethod){
      navigate('/payment');
    }
  }, [cart, navigate]); // if not isset payment, go to last step -> payment

  return (
    <>
      <Navbar/>
      <div className='order-container'>
        <div div className="order-row">
          <div className="order-col">
            <h2 className='order-title'>Order Preview</h2>
          </div>
          <div className="order-col">
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
          </div>
        </div>
        <div className="order-row">
          <div className="order-col">
            <div className="order-shipping">
              <h4 className="order-shipping-title">
                Shipping: 
              </h4>
              <div className="order-shipping-info">
                {cart.shippingAddress.fullname}
                {cart.shippingAddress.address}
                {cart.shippingAddress.postalCode}
                {cart.shippingAddress.city}
                {cart.shippingAddress.country}
                <Link to="/shipping"><FontAwesomeIcon icon={faPencil}/>Edit</Link>
              </div>
              <div className="order-payment">
                <h4>Payment:</h4>
                <span>{cart.paymentMethod}</span>
              </div>
              <div className="order-items">
                <h4 className="order-items-title">
                  Order Items: 
                </h4>
                <div className="order-cards">
                  {cart.cartItems.map((item) => (
                    <div className="order-card">
                      <div className="order-card-body">
                        <img src={item.image} alt={item.title} />
                        <Link to={`/product/${item.slug}`}>{item.title}</Link>
                      </div>
                      <div className="order-card-footer">
                        <span>{item.quantity}</span>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  ))}  
                </div>
                <Link className='order-edit' to="/cart"><FontAwesomeIcon icon={faPencil}/>Edit</Link>
              </div>
            </div>
          </div>
          <div className="order-col">
            <h2 className="order-summary">Order Summary</h2>
            <div className="order-summary-info">
              <h4>Items</h4>
              <span>${cart.itemsPrice.toFixed(2)}</span>
            </div>
            <div className="order-summary-info">
              <h4>Shipping</h4>
              <span>${cart.shippingPrice.toFixed(2)}</span>
            </div>
            <div className="order-summary-info">
              <h4>Tax</h4>
              <span>${cart.taxPrice.toFixed(2)}</span>
            </div>
            <div className="order-summary-info">
              <h4>Totla</h4>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <div className="order-summary-button">
              <button type='button' onClick={placeOrderHandler} disabled={cart.cartItems.length === 0} >Place Order</button>
            </div>
            {!!loading && <LoadingBox></LoadingBox>}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};

export default PlaceOrder;