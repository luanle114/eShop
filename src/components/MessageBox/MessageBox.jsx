import React from 'react';
import './MessageBox.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MessageBox = (props) => {
  return (
    <>
      <Navbar/>
      <div className='message-container'>
        <h2 className='message'>{props.children}</h2>
      </div>
      <Footer/>
    </>
  )
};

export default MessageBox;