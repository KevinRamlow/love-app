import React from 'react';
import { useNavigate } from 'react-router-dom';
import Introduction from '../../introduction/introduction';
import CardTable from '../../cards/cardTable/cardTable';

const images = {
  card1: require('../../../img/storieCard/image.png'),
  card2: require('../../../img/storieCard/image2.png'),
  card3: require('../../../img/storieCard/image3.png'),
  card4: require('../../../img/storieCard/image4.png')
};

function Poems() {
  const navigate = useNavigate();

  const cards = [
    [
      { image: images.card1, onClick: () => navigate('/card', { state: { title: 'Título do Poema 1', text: 'Texto do Poema 1<br /> Linha 2' } }) },
      { image: images.card2, onClick: () => navigate('/card', { state: { title: 'Título do Poema 2', text: 'Texto do Poema 2' } }) }
    ],
    [
      { image: images.card3, onClick: () => navigate('/card', { state: { title: 'Título do Poema 3', text: 'Texto do Poema 3' } }) },
      { image: images.card4, onClick: () => navigate('/card', { state: { title: 'Título do Poema 4', text: 'Texto do Poema 4' } }) }
    ]
  ];

  return (
    <div className='container'>
      <Introduction
        title="Poemas" 
        text="Amor, nesta página, guardo os poemas que escrevi para você, com todo o carinho e sentimento. 
          Cada palavra é uma forma de expressar o quanto você significa para mim. Aqui, entre versos, vamos reviver momentos especiais e recordar o nosso amor. 
          Que cada poema seja uma lembrança do nosso carinho e da nossa jornada juntos."
      />
      <CardTable cards={cards} />
    </div>
  );
}

export default Poems;