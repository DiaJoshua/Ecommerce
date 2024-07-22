import React from 'react'
import './Footer.css'
// import footer_logo from '../Assets/logo_big.png'
import world_icon from '../Assets/world_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        {/* <img src={footer_logo} alt="" /> */}
        <p>TIENDA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={world_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
