import React from 'react';
import { useLocation } from 'react-router-dom';
import './cardValue.css';

function CardValue() {
  const location = useLocation();
  const { title, text } = location.state || { title: 'Título Padrão', text: 'Texto Padrão' };

  return (
    <div className="card-introduction">
      <p className='card-title'>{title}</p>
      <hr className='divider' />
      <p className='card-text' dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
}

export default CardValue; 