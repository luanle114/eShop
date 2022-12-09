import React, { useContext, useReducer, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IStyledOrderHistory } from './OrderHistory.style';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { Store } from '../../Store';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const reduce = (state: any, action: any) =>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading: true, error: ''};
    case 'FETCH_SUCCESS':
      return {...state, loading: false, orders: action.payload, error: ''};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

const OrderHistory = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  const [{loading, error, orders}, dispatch] = useReducer(reduce, {
    loading: true,
    error: '',
    order: {},
  })

  useEffect(() =>{
    const fetchData = async () =>{
      dispatch({ type: 'FETCH_REQUEST' });
      try{
        const { data } = await axios.get(`/api/orders/mine`, {
          headers: { authorization: `Bearer ${userInfo.token}`},
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      }
      catch(err){
        dispatch({ type: 'FETCH_FAIL', payload: getError(err)});
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    loading ? <LoadingBox></LoadingBox> : error ? <MessageBox>{error}</MessageBox>:
    <>
      <Navbar/>
      <IStyledOrderHistory>
        <div className="orderhistory-container">
          <div className="orderhistory-row">
            <div className="orderhistory-col">
              <h2 className='orderhistory-title'>Order History</h2>
            </div>
          </div>
          <div className="orderhistory-row">
            <div className="orderhistory-col">
              <div className="tables">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                      {orders.map((order: any) =>(
                        <tr key={order._id}>
                          <th>{order._id}</th>
                          <th>{order.createdAt.substring(0, 10)}</th>
                          <th>{order.totalPrice.toFixed(2)}</th>
                          <th>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</th>
                          <th>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</th>
                          <th>
                            <button type='button' onClick={() => { navigate(`/order/${order._id}`)}}>
                              Details
                            </button>
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="account-back">
                <Link to='/account'><FontAwesomeIcon icon={faChevronLeft} />Back to Account</Link>
              </div>
            </div>
          </div>
        </div>
      </IStyledOrderHistory>
      <Footer/>
    </>
  )
};

export default OrderHistory;