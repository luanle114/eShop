import React from 'react';
import { IStyledLoadingBox } from './LoadingBox.style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const LoadingBox = () => {
  return (
    <>
      <Navbar/>
      <IStyledLoadingBox>
        <div className='message-container'>
          <h2 className='messageLoading'>Loading...</h2>
        </div>
      </IStyledLoadingBox>
      <Footer/>
    </>
  )
};

export default LoadingBox;