import React from 'react';
import './LoadingBox.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const LoadingBox = () => {
  return (
    <>
      <Navbar/>
      <div className='message-container'>
        <h2 className='messageLoading'>Loading...</h2>
      </div>
      <Footer/>
    </>
  )
};

export default LoadingBox;