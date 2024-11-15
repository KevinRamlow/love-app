import React from 'react';
import './cardTable.css';
import Card from '../card/card';

function CardTable({ cards }) {
  return (
    <div className="button-table">
      {cards.map((row, index) => (
        <div className="row" key={index}>
          {row.map((card, idx) => (
            <Card key={idx} image={card.image} onClick={card.onClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardTable; 