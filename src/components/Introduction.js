import React from 'react';
import './Introduction.css'; // Atualize o caminho para o novo arquivo CSS

function Introduction({ title, text }) {
  return (
    <>
      <p className='title'>{title}</p>
      <hr className='divider' />
      <p className='introduction'>{text}</p>
      <hr className='divider' />
    </>
  );
}

export default Introduction; 