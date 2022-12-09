import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IStyledRegister } from './Register.style';
import axios from 'axios';
import { Store } from '../../Store.js';
import { toast } from 'react-toastify';
import { getError } from '../../utils';

const Register = () => {
  const {search} = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl: '/';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const navigate = useNavigate();
  const { userInfo } = state;

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('Passwords do not match');
      return;
    }
    try{
      const {data} = await axios.post('/api/users/signup', {
        name,
        email,
        password
      });
      ctxDispatch({type: 'USER_SIGNUP', payload: data});
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
    <IStyledRegister>
      <div className='register-container'>
        <div className="register-row">
          <div className="register-col">
            <form onSubmit={submitHandler}>
              <h2>Sign Up</h2>
              <div className="form-group">
                <label htmlFor="email">Full Name</label>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="c-password">Confirm Password</label>
                <input type="password" id="c-password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
              </div>
              <div className="form-group">
                <button type="submit">Sign Un</button>
              </div>
              <div className="form-group">
                <Link to={`/login?redirect=${redirect}`}>Already have an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </IStyledRegister>
  )
};

export default Register;