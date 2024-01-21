import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';


function Footer() {
  return (
    
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className="left-container">
        <Link to='/' className='navbar-logo-b'>
             
             Company <span className="log-b">logo</span> 
           </Link>
        <p className='footer-subscription-heading'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet turpis. Integer a nisi at purus tincidunt mollis eget nec turpis.
        </p>
        <div className='social-icons'>
          <div className="fb">
          <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
          </div>
            
            <Link
              className='social-icon-link'
              to='/'
              target='https://www.instagram.com/accounts/login/'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
          
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
           
          </div>
        </div>
     
          <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          
            <h2>About Us</h2>
            <Link to='/sign-up'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Industries</h2>
            <Link to='/'>Finance & Fintech</Link>
            <Link to='/'>Automotive</Link>
            <Link to='/'>Enterprise</Link>
            <Link to='/'>IT / Consulting</Link>
            <Link to='/'>Telecom</Link>
            <Link to='/'>Agree Tech</Link>
            <Link to='/'>Food Tech</Link>
            <Link to='/'>Health Care</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Project & Digital Innovation</Link>
            <Link to='/'>UI UX Design</Link>
            <Link to='/'>Front end development</Link>
            <Link to='/'>Web Application</Link>
            <Link to='/'>Mobile Application</Link>
            <Link to='/'>Custom Application</Link>
            <Link to='/'>SAAS Implementation</Link>
            
          </div>
        
        </div>
      </div>
         
      </section>
      
     
     
      <small className="web-register">© 2021 Company name. All rights reserved.</small>
    </div>
    
  );
  
}

export default Footer;
