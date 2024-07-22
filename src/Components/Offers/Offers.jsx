import React from 'react'
import './Offers.css'
// import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {

  const scrollTo = () => {
    window.scrollTo({
      top: window.scrollY + 500, 
      behavior: 'smooth'
    });
  }

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive Offers</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLING PPRODUCTS</p>
        <p></p>
        <button onClick={scrollTo}>Check Now</button>
      </div>
      <div className="offers-right">
        {/* <img src={exclusive_image} alt="" /> */}
      </div>
    </div>
  )
}

export default Offers
