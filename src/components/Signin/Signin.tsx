import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IStyledSignin } from './Signin.style';
import axios from 'axios';
import { Store } from '../../Store.js';
import { toast } from 'react-toastify';
import { getError } from '../../utils';

const Signin = () => {
  const {search} = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl: '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const navigate = useNavigate();
  const { userInfo } = state;

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try{
      const {data} = await axios.post('/api/users/login', {
        email,
        password
      });
      ctxDispatch({type: 'USER_SIGNIN', payload: data});
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    }
    catch (err){
      toast.error(getError(err));
    }
  };

  useEffect(() =>{
    if(userInfo){
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <IStyledSignin>
      <div className='signin-container'>
        <div className="signin-row">
          <div className="signin-col">
            <form onSubmit={submitHandler}>
              <h2>Sign in</h2>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="form-group">
                <button type="submit">Sign in</button>
              </div>
              <div className="form-group">
                <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </IStyledSignin>
  )
};

export default Signin;