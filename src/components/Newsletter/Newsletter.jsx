import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='news-container'>
      <div className="news-row">
        <div className="new-col">
          <h2 className="news-title">Newsletter</h2>
          <p className="news-desc">Get timely updates from your favorite products</p>
          <div className="input-container">
            <input type="text" className="text" placeholder='Your E-mail'/>
            <button><FontAwesomeIcon icon={faPaperPlane}/></button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Newsletter;