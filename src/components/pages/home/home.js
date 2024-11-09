// components/pages/home/home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToMusics = () => {
    navigate('/musics');
  };

  return (
    <div>
      <h1>Home</h1>
      <button 
        onClick={navigateToMusics} 
        style={{ backgroundColor: 'blue', borderRadius: '0', color: 'white', padding: '10px 20px', border: 'none' }}
      >
        Go to Musics
      </button>
    </div>
  );
}

export default Home;
