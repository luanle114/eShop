import React, { useContext }  from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Store } from "../Store";
import { IStyledCart } from "../components/Cart/Cart.style";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Cart = () => {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { cart: {cartItems},} = state;
  const navigate = useNavigate();

  const updateCartHandler = async (item: any, quantity: any) => {
    const { data } = await axios.get(`/api/products/slug/${item.slug}`);
    if(data.countInStock < quantity){
      window.alert('Sorry. Product is out of stock!');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: {...item, quantity},
    });
  };
  const removeItemHandler = (item: any) => {
    ctxDispatch({
      type: 'CART_REMOVE_ITEM',
      payload: item,
    });
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }

  return(
    <div>
      <Navbar/>
      <IStyledCart>
        <div className="cart-container">
          <div className="cart-row">
            <div className="cart-title">
              Shopping Cart
            </div>
          </div>
          <div className="cart-row">
            <div className="cart-col">
              {cartItems.length === 0 ? <h3 className="infor">Cart is empty. <Link to="/shop">Go Shopping</Link></h3>:
                <div className="cart-cards">
                  {cartItems.map((item: any) => (
                    <div className="cart-card" key={item._id}>
                      <div className="cart-header">
                        <img src={item.image} alt={item.title} />
                      </div>  
                      <div className="cart-body">
                        <Link to={`/product/${item.slug}`}>{item.title}</Link>
                        <div className="buttons">
                          <button onClick={() => updateCartHandler(item, item.quantity - 1 )}  disabled={item.quantity === 1}><FontAwesomeIcon icon={faMinusCircle}/></button>{' '}
                          <span className="cart-quantity">{item.quantity}</span>{' '}
                          <button onClick={() => updateCartHandler(item, item.quantity + 1 )} disabled={item.quantity === item.countInStock}><FontAwesomeIcon icon={faPlusCircle}/></button>
                        </div>
                      </div>
                      <div className="cart-footer">
                        <span className="cart-price">{item.price}</span>
                        <button onClick={() => removeItemHandler(item)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
            <div className="cart-col">
              <div className="checkout-card">
                <div className="checkout-body">
                  <h3 className="checkout-title">
                    Subtotal ({cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}{' '} items) :
                    ${cartItems.reduce((a: any, c: any) => a + c.price * c.quantity, 0)}
                  </h3>
                </div>
                <div className="checkout-footer">
                  <button onClick={checkoutHandler} className="checkout-btn" type="button" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IStyledCart>
      <Footer/>
    </div>
  )
}

export default Cart;