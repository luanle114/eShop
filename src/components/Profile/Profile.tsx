import React, { useContext, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { IStyledProfile } from './Profile.style';
import { useNavigate, Link } from 'react-router-dom';
import { Store } from '../../Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useReducer } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../../utils';

const reduce = (state: any, action: any) => {
  switch (action.type){
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true};
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false};
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false};
    default:
      return state;
  }
};

const Profile = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{loadingUpdate}, dispatch] = useReducer(reduce , {
    loadingUpdate: false
  });

  const submitHandler = async (e: any) =>{
    e.preventDefault();
    try{
      const { data } = await axios.put('/api/users/profile',
      {
        name,
        email,
        password
      },
      {
        headers: { Authorization: `Bearer ${userInfo.token}`},
      }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
    }
    catch(err){
      dispatch({
        type: 'FETCH_FAIL'
      });
      toast.error(getError(err));
    }
  };

  return (
    <>
    <Navbar/>
    <IStyledProfile>
      <div className='profile-container'>
        <div className="profile-row">
          <div className="profile-col">
            <form onSubmit={submitHandler}>
              <h2>User Profile</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="form-group">
                <button type="submit">Update</button>
              </div>
              <div className="account-back">
                <Link to='/account'><FontAwesomeIcon icon={faChevronLeft} />Back to Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </IStyledProfile>
    <Footer/>
    </>
  )
};

export default Profile;