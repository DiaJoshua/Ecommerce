import React from 'react';
import './AboutUs.css';
// import office1 from '../Assets/office1.png';
// import office2 from '../Assets/office2.png';
// import office3 from '../Assets/office3.png';
// import office4 from '../Assets/office4.png';
// import office5 from '../Assets/office5.png';
// import office6 from '../Assets/office6.png';
// import office7 from '../Assets/office7.png';
// import office8 from '../Assets/office8.png';
// import office9 from '../Assets/office9.png';
// import office10 from '../Assets/office10.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Read our inspiring story</h1>
      
      <div className="about-sections">
        <section className="about-section">
          <h2>Tradition and Innovation</h2>
          <p>
            Tienda is a global online marketplace where Indigenous people come together to make, sell, and buy unique and authentic items. Our mission is to preserve and promote Indigenous culture through their products while fostering a community of support and positive change for small businesses, artisans, and the environment. Here’s how we’re making a difference together:
          </p>
        </section>
        
        <section className="about-section">
          <h2>Indigenous Empowerment</h2>
          <p>
            At Tienda, there are no warehouses – just a diverse community of people sharing their heritage through the products they love. We simplify the process, helping you connect directly with Indigenous makers to find something truly extraordinary and meaningful.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Trust and Integrity</h2>
          <p>
            Your privacy and security are our top priorities. Our dedicated team ensures your information is protected. If you ever need assistance, we are always ready to support you.
          </p>
        </section>
      </div>
      
      <div className="offices-section">
        <h2>Our Offices</h2>
        <div className="offices-list">
          {/* <div className="office-item">
            <img src={office1} alt="CAR" />
            <p>CAR</p>
          </div>
          <div className="office-item">
            <img src={office2} alt="Region 1" />
            <p>Region 1</p>
          </div>
          <div className="office-item">
            <img src={office3} alt="Region 2" />
            <p>Region 2</p>
          </div>
          <div className="office-item">
            <img src={office4} alt="Region 3" />
            <p>Region 3</p>
          </div>
          <div className="office-item">
            <img src={office5} alt="Region 4A" />
            <p>Region 4A</p>
          </div>
          <div className="office-item">
            <img src={office6} alt="Region 4B" />
            <p>Region 4B</p>
          </div>
          <div className="office-item">
            <img src={office7} alt="Region 5" />
            <p>Region 5</p>
          </div>
          <div className="office-item">
            <img src={office8} alt="Region 6 & 7" />
            <p>Region 6 & 7</p>
          </div>
          <div className="office-item">
            <img src={office9} alt="Region 9" />
            <p>Region 9</p>
          </div>
          <div className="office-item">
            <img src={office10} alt="Region 10" />
            <p>Region 10</p>
          </div>
          <div className="office-item">
            <img src={office1} alt="Region 11" />
            <p>Region 11</p>
          </div>
          <div className="office-item">
            <img src={office4} alt="Region 12" />
            <p>Region 12</p>
          </div>
          <div className="office-item region-13">
            <img src={office3} alt="Region 13" />
            <p>Region 13</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;