import React from 'react';
import Introduction from '../../introduction/introduction';
import ReactPlayer from 'react-player';

function Declaration() {
  return (
    <div className='container'>
      <Introduction 
        title="Declaração" 
        text="Amor, nesta página tem um vídeo que fiz para você, para tentar expressar o quanto sou apaixonado por cada detalhe seu. 
          Em cada palavra, coloquei todo o meu amor, para que você sinta o quanto é especial para mim. 
          Que ao assistir, você veja o quanto  o meu coração é cheio de você e o quanto sou grato por te ter ao meu lado."
      />

      <ReactPlayer 
        url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
        controls 
        width='90%'
        height='360px'
      />
    </div>
  );
} 

export default Declaration;