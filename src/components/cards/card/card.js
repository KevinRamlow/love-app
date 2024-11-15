import React from 'react';
import './card.css';

function Card({ image, onClick }) {
  return (
    <button
      onClick={onClick}
      className="card"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

export default Card; 