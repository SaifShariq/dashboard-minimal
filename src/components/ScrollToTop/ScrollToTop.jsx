import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        }
    }, [scroll]);

    const ScrollUp = () => {
        window.scrollTo(0, 0);
    }

  return (
    <a 
        href="/"
        onClick={ScrollUp}
        className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}
    >
        <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}

export default ScrollToTop;