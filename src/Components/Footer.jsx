import React from 'react';
import Logo from '../Assests/logo-black-2.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  return (
    <div>
      <div className='footer-container'>  
      <div className='heading-line'>
       <img src={Logo} alt='LOGO' />
       
         
          
          <ul type='none'> 
          <li> Quick Links</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
       
         
          <ul type='none'> 
          <li>Orders</li>
            <li>Products</li>
            <li>Present Packs</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        
          
          <ul type='none'> 
          <li>Explore</li>
            <li>Services</li>
            <li>Wall of Love</li>
          </ul>
        
         
          <ul type='none'> 
          <li>Legal</li>
            <li>Policies</li>
            <li>Terms and conditions</li>
            <li>Return policy</li>
          </ul>
       
        
          <ul type='none'> 
          <li>Follow us on</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
          </div>
      </div>
      <hr className='footer-hr' />
      <div className='last-con'>
        <h3><FontAwesomeIcon icon={faCopyright} size='xs'></FontAwesomeIcon> Swageazy 2022. All rights reserved.</h3>
        <div className='last-right'>
          <h3>Policies</h3>
          <h3>Terms and conditions</h3>
          <h3>Refund and return policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
