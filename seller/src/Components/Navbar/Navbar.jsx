import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import navlogo from '../../assets/nav-logo.png';
import navProfile from '../../assets/nav-profile.png';

export const Navbar = () => {
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const profileMenuRef = useRef();

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
  };

  const closeProfileMenu = () => {
    setProfileMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='navbar'>

        <img src={navlogo} alt="Logo" className="nav-logo" />

        <p>TIENDA</p>

      <div className="nav-profile-container">
        <img
          src={navProfile}
          alt="Profile"
          className='nav-profile'
          onClick={toggleProfileMenu}
        />
        {profileMenuVisible && (
          <div ref={profileMenuRef} className="profile-menu">
            <Link to="/profile" onClick={closeProfileMenu}>
              <button>Profile</button>
            </Link>
            <Link to="/login" onClick={closeProfileMenu}>
              <button>Logout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
