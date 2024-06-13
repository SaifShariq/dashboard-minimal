import React from 'react';
import './Logo.css';
import LogoImg from '../../images/logo-icon.png';

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
        <img className='logoImg' src={LogoImg} alt="LogoImage" />
        <a href="/" className='logo d-flex align-items-center'>
            <span className='d-none d-lg-block'>Dashboard Minimal</span>
        </a>   
        <i className="bi bi-list toggle-sidebar-btn" 
           onClick={handleToggleSidebar}>    
        </i>
    </div>
  );
}

export default Logo;