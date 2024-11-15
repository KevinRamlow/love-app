import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

function Home() {
  const navigate = useNavigate();

  const routeMap = {
    'Histórias': 'stories',
    'Poemas': 'poems',
    'Músicas': 'musics',
    'Declaração': 'declaration'
  };

  return (
    <div className='container'>
      <p className='title'>Love App</p>

      <hr className='divider' />

      <p className='introduction'>
        Amor, nesses dois anos ao seu lado, meu coração se encheu de alegria e felicidade a cada dia. 
        Você torna minha vida mais doce e especial. Eu só quero continuar ao seu lado, compartilhando muitos
        outros momentos incríveis. Feliz dois anos de nós minha princesa!
      </p>

      <hr className='divider' />
      
      <div className='button-column'>
        {['Histórias', 'Poemas', 'Músicas', 'Declaração'].map((text, index) => (
          <button key={index} className='btn' onClick={() => navigate(`/${routeMap[text]}`)}>
            <span className='btn-text'>{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
