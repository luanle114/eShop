import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Account.css';
import { useContext } from 'react';
import { Store } from '../../Store';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  const { state } = useContext(Store);
  const { userInfo} = state;

  return (
    <div>
      <Navbar/>
      <div className="account-container">
        <div className="account-row">
          <div className="account-col">
            <h2 className="account-title">
              Your Account
            </h2>
          </div>
        </div>
        <div className="account-row">
          <div className="account-col">
            <Link to='/profile'>User Profile <FontAwesomeIcon icon={faChevronRight}/></Link>
            <Link to='/orderhistory'>Order History <FontAwesomeIcon icon={faChevronRight}/></Link>
          </div>
          <div className="account-col">
            <img src="https://res.cloudinary.com/dzevej4xd/image/upload/v1664598743/images/users/download_q2mh9i.png" alt="User" />
            <span className='user-name'>{userInfo.name}</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Account;