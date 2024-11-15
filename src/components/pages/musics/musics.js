import React from 'react';
import Introduction from '../../introduction/introduction';
import MusicPlayer from '../../musicPlayer/musicPlayer';

function Musics() {
  const musicFile = require('../../../files/mp3/minha-cura.mp3');
  const musicImage = require('../../../img/musicImages/minha-cura.png');

  return (
    <div className='container'>
      <Introduction 
        title="Músicas" 
        text="Amor, nesta página, você encontrará as músicas que marcaram nossa história. Cada melodia é uma lembrança dos momentos especiais que compartilhamos. Espero que ao ouvir, você sinta todo o amor que tenho por você."
      />

      <MusicPlayer 
        musicName="Minha Cura - Kevin Ramlow" 
        musicImage={musicImage} 
        musicFile={musicFile} 
      />
      
      <MusicPlayer 
        musicName="Minha Cura - Kevin Ramlow" 
        musicImage={musicImage} 
        musicFile={musicFile} 
      />
    </div>
  );
}

export default Musics;