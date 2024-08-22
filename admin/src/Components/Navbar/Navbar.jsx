import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import navProfile from '../../assets/nav-profile.png';

export const Navbar = () => {
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const profileMenuRef = useRef();
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
  };

  const closeProfileMenu = () => {
    setProfileMenuVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login', { replace: true }); 
    window.location.reload();
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
      <Link to="/admin/profile">
        <p>TIENDA</p>
      </Link>
      <div className="nav-profile-container">
        <img
          src={navProfile}
          alt="Profile"
          className='nav-profile'
          onClick={toggleProfileMenu}
        />
        {profileMenuVisible && (
          <div ref={profileMenuRef} className="profile-menu">
            <Link to="/admin/profile" onClick={closeProfileMenu}>
              <button>Profile</button>
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
