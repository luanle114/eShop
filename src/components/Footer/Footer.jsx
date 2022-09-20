import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-row">
        <div className="footer-col">
          <img src='/images/logo/logo.jpg' alt=''/>
          <p>Lorem ipsum dolor sit amet consectetup, adipisicing elit. Exepturi, nesciunt! Ipsum 
            repellat saepe, similique magnam aut eveniet nobis ut sunt neque harum consequatur.</p>
        </div>
        <div className="footer-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
        <h2>Category </h2>
          <ul>
            <li>
              <NavLink to="/">Men</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Women</NavLink>
            </li>
            <li>
              <NavLink to="/about">Kids</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h2>Stay in touch with us</h2>
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
      <div className="footer-copyrow">
        <p>&copy; 2022. All Rights Reserved. Powered by Luan Le</p>
      </div>
    </div>
  )
};

export default Footer;