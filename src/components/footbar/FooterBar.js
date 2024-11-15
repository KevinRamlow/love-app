import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './footerBar.css';

const images = {
  home: require('../../img/footBarImages/home.png'),
  instagram: require('../../img/footBarImages/instagram.png'),
  gitHub: require('../../img/footBarImages/gitHub.png'),
  linkedin: require('../../img/footBarImages/linkedin.png'),
  portfolio: require('../../img/footBarImages/portfolio.png')
};

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
        <img src={images.instagram} alt="Instagram" />
      </button>
      <button className="footer-icon" onClick={() => window.open('https://github.com/KevinRamlow', '_blank')}>
        <img src={images.gitHub} alt="GitHub" />
      </button>
      <button className="footer-icon" onClick={() => navigate('/')}>
        <img src={images.home} alt="Home" />
      </button>
      <button className="footer-icon" onClick={() => window.open('https://www.linkedin.com/in/kevin-ramlow-028509281/', '_blank')}>
        <img src={images.linkedin} alt="Linkedin" />
      </button>
      <button className="footer-icon" onClick={handlePortfolioClick}>
        <img src={images.portfolio} alt="Portfolio" />
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