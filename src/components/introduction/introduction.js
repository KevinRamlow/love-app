import React from 'react';
import './introduction.css';

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