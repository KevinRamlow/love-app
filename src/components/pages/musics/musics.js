import React from 'react';
import { useNavigate } from 'react-router-dom';

function Musics () {
  const navigate = useNavigate();

  const navigateToPoems = () => {
    navigate('/poems');
  };

  return (
    <div>
      <h1>Home</h1>
      <button 
        onClick={navigateToPoems} 
        style={{ backgroundColor: 'red', borderRadius: '0', color: 'white', padding: '10px 20px', border: 'none' }}
      >
        Go to Poems
      </button>
    </div>
  );
}

export default Musics;