import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './musicPlayer.css';

const playIcon = require('../../img/musicImages/player/play.png');
const pauseIcon = require('../../img/musicImages/player/pause.png');

function MusicPlayer({ musicName, musicImage, musicFile }) {
  const waveformRef = useRef(null);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#fff',
      progressColor: '#FF007A',
      height: 40,
      responsive: true,
      barWidth: 0,
    });

    ws.load(musicFile);
    setWaveSurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [musicFile]);

  const togglePlayPause = () => {
    if (waveSurfer) {
      waveSurfer.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='music-player-wrapper'>
      <p className="music-player-title">{musicName}</p>
      <div className="music-player">
        <img src={musicImage} alt={musicName} className="music-player-thumbnail" />
        <div className="music-player-waveform">
          <div ref={waveformRef}></div>
        </div>
        <button onClick={togglePlayPause} className="music-player-control">
          <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} />
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer; 