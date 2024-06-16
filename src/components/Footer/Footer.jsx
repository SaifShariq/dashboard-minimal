import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
        <div className="copyright">
            &copy; Copyright{' '}
            <strong>
                Dashboard Minimal
            </strong>
            . All rights reserved
        </div>
        <div className="credits">
            Created by <a href="https://www.linkedin.com/in/saif-shariq-68ab63a0/">Saif Shariq</a>
        </div>
    </footer>
  )
}

export default Footer;