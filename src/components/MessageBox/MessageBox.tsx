import React from 'react';
import { IStyledMessageBox } from './MessageBox.style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MessageBox = (props: any) => {
  return (
    <>
      <Navbar/>
      <IStyledMessageBox>
        <div className='message-container'>
          <h2 className='message'>{props.children}</h2>
        </div>
      </IStyledMessageBox>
      <Footer/>
    </>
  )
};

export default MessageBox;