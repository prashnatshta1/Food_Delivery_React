import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Tomato is a user-friendly food delivery app offering quick restaurant discovery, real-time order tracking, multiple payment options, and personalized meal orders, making food delivery seamless and efficient for customers.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
       </div>
        <div className="footer-content-center">
            <h2>Tomato</h2>
            <li>Home</li>
            <li>Delivery</li>
            <li>About Us</li>
            <li>Privacy Policy </li>
        </div>

        <div className="footer-content-right">
            <h2>Connect with Us</h2>
          <ul>
            <li>+977-986532221</li>
            <li>foodie@tomato.com</li>
            <li>San Fransisco, USA</li>
            </ul>
        </div>
        </div>
        <hr />

        <p className='footer-copyright'>&copy; {new Date().getFullYear()} Tomato. All rights reserved.</p>
    </div>
  )
}

export default Footer
