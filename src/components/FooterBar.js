import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './footerBar.css';

function FooterBar() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handlePortfolioClick = () => {
    setShowPopup(true);
    setFadeOut(false);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setFadeOut(true), 1400);
      const fadeTimer = setTimeout(() => setShowPopup(false), 2000);
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }
  }, [showPopup]);

  return (
    <div className="footer-bar">
      <button className="footer-icon" onClick={() => window.open('https://www.instagram.com/sk.an07/', '_blank')}>
        <img src="/footBarImages/instagram.png" alt="Instagram" />
      </button>
      <button className="footer-icon" onClick={() => window.open('https://github.com/KevinRamlow', '_blank')}>
        <img src="/footBarImages/gitHub.png" alt="GitHub" />
      </button>
      <button className="footer-icon" onClick={() => navigate('/')}>
        <img src="/footBarImages/home.png" alt="Home" />
      </button>
      <button className="footer-icon" onClick={() => window.open('https://www.linkedin.com/in/kevin-ramlow-028509281/', '_blank')}>
        <img src="/footBarImages/linkedin.png" alt="Linkedin" />
      </button>
      <button className="footer-icon" onClick={handlePortfolioClick}>
        <img src="/footBarImages/portfolio.png" alt="Portfolio" />
      </button>

      {showPopup && (
        <div className="popup" style={{ opacity: fadeOut ? 0 : 1 }}>
          <p>Portfólio em desenvolvimento...</p>
        </div>
      )}
    </div>
  );
}

export default FooterBar;