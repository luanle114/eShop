import React, { useReducer, useContext, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { IStyledOrderDetail } from './OrderDetail.style';
import { Store } from '../../Store';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../../utils';

const reduce = (state: any, action: any) =>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading: true, error: ''};
    case 'FETCH_SUCCESS':
      return {...state, loading: false, order: action.payload, error: ''};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};


const OrderDetail = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const params = useParams();
  const { id: orderId } = params;
  const [{loading, error, order}, dispatch] = useReducer(reduce, {
    loading: true,
    error: '',
    order: {},
  })

  useEffect(() =>{
    const fetchOrder = async () =>{
      try{
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}`},
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      }
      catch(err){
        dispatch({ type: 'FETCH_FAIL', payload: getError(err)});
      }
    };

    if(!userInfo){
      return navigate('/login')
    }
    
    if(!order._id || (order._id && order._id !== orderId)){
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);

  return (
    loading ? ( <LoadingBox></LoadingBox> ): error ? <MessageBox></MessageBox> :(
    <>
      <Navbar/>
      <IStyledOrderDetail>
        <div className="order-details-container">
          <div className="order-details-row">
            <div className="order-details-col">
              <h2 className='order-details-title'>Your Order</h2>
              <h4 className="order-details-subtitle">Order ID: {orderId}</h4>
            </div>
          </div>
          <div className="order-row">
            <div className="order-col">
              <div className="order-shipping">
                <h4 className="order-shipping-title">
                  Shipping: 
                </h4>
                <div className="order-shipping-info">
                  {order.shippingAddress.fullname}
                  {order.shippingAddress.address}
                  {order.shippingAddress.postalCode}
                  {order.shippingAddress.city}
                  {order.shippingAddress.country}
                  {order.isPaid ? (<span>Paid at {order.deliveredAt}</span>) : <span>Not Delivery</span> }
                </div>
                <div className="order-payment">
                  <h4>Payment:</h4>
                  {order.isPaid ? (<span>Paid at {order.paidAt}</span>) : <span>Not Paid<br/><span className='after'>* you will pay after delivery</span></span> }
                </div>
                <div className="order-items">
                  <h4 className="order-items-title">
                    Order Items: 
                  </h4>
                  <div className="order-cards">
                    {order.orderItems.map((item: any) => (
                      <div className="order-card">
                        <div className="order-card-body">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="order-card-footer">
                          <span>{item.quantity}</span>
                          <span>${item.price}</span>
                        </div>
                      </div>
                    ))}  
                  </div>
                </div>
              </div>
            </div>
            <div className="order-col">
              <h2 className="order-summary">Order Summary</h2>
              <div className="order-summary-info">
                <h4>Items</h4>
                <span>${order.itemsPrice.toFixed(2)}</span>
              </div>
              <div className="order-summary-info">
                <h4>Shipping</h4>
                <span>${order.shippingPrice.toFixed(2)}</span>
              </div>
              <div className="order-summary-info">
                <h4>Tax</h4>
                <span>${order.taxPrice.toFixed(2)}</span>
              </div>
              <div className="order-summary-info">
                <h4>Totla</h4>
                <span>${order.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </IStyledOrderDetail>
      <Footer/>
    </>)
  )
};

export default OrderDetail;