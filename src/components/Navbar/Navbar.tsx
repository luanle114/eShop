import React, { useContext }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag, faHeart, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { IStyledNavbar } from './Navbar.style';
import { Link, NavLink } from "react-router-dom";
import { Store } from "../../Store.js";

const Navbar = (props: any) =>{
  const {state, dispatch: ctxDispatch}: any = useContext(Store);
  const { cart, wish, userInfo } = state;

  const signoutHandler = () =>{
    ctxDispatch({type: 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/login';
  };

  return(
    <IStyledNavbar>
      <div className="n-container">
        <div className="n-row">
          <div className="n-col">
            <span className="n-email">avqwdq@gmail.com</span>
            {
              userInfo ? (<Link to='/account'><FontAwesomeIcon icon={faUser}/>{userInfo.name}</Link>) : (
                <span><FontAwesomeIcon icon={faUser}/>Guest</span>
              )
            }
          </div>
          <div className="n-col">
            <div className="socials">
              <a href="/">
                <img src="/images/socials/facebook.png" alt="" />
              </a>
              <a href="/">
                <img src="/images/socials/instagram.png" alt="" />
              </a>
              <a href="/">
                <img src="/images/socials/youtube.png" alt="" />
              </a>
              <a href="/">
                <img src="/images/socials/twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="n-row">
          <div className="n-col">
            <a href="/">
              <img src="/images/logo/logo.jpg" alt="" className="logo"/>
            </a>
          </div>
          <div className="n-col">
            <div className="icons">
              {
                userInfo ? (<Link to='#signout' onClick={signoutHandler}><span><FontAwesomeIcon icon={faArrowRightToBracket}/>
                Logout</span></Link>) : (<a href="/login"><span><FontAwesomeIcon icon={faArrowRightToBracket}/>
                Login</span></a>)
              }
              <a href="/wish">
                <span><FontAwesomeIcon icon={faHeart}/>{wish.wishItems.length > 0 && <span className="totalItems">{
                wish.wishItems.length}</span>}</span>
              </a>
              <a href="/cart">
                <span><FontAwesomeIcon icon={faShoppingBag}/>{cart.cartItems.length > 0 && (<span className='totalItems'>{cart.cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}</span>)}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="n-row">
          <nav className="nav">
            <ul className="items">
              <li className="list"><NavLink to="/" >Home</NavLink></li>
              <li className="list"><NavLink to="/shop">Shop</NavLink></li>
              <li className="list"><NavLink to="/about">About</NavLink></li>
              <li className="list"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button className="btn">BTN</button>
          </nav>
        </div>
      </div>
    </IStyledNavbar>
  )
};
export default Navbar;