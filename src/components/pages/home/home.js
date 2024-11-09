import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

function Home() {
  const navigate = useNavigate();

  return (
      <div className='container'>
        <p className='title'>Love App</p>

        <hr className='divider divider1' />
      
        <p className='introduction'>
          Amor, nesses dois anos ao seu lado, meu coração se encheu de alegria e felicidade a cada dia. 
          Você torna minha vida mais doce e especial. Eu só quero continuar ao seu lado, compartilhando muitos
          outros momentos incríveis. Feliz dois anos de nós minha princesa!
        </p>

        <hr className='divider divider2' />

        <div className='button-column'>
        <button className='btn' onClick={() => navigate('/histories')}>
          <span className='btn-text'>Histórias</span>
        </button>
        <button className='btn' onClick={() => navigate('/poems')}>
          <span className='btn-text'>Poemas</span>
        </button>
        <button className='btn' onClick={() => navigate('/musics')}>
          <span className='btn-text'>Músicas</span>
        </button>
        <button className='btn' onClick={() => navigate('/declaration')}>
          <span className='btn-text'>Declaração</span>
        </button>
        </div>
      </div>
  );
}

export default Home;
