'use client';

import React, { useState, useRef } from 'react';
import styles from './styles.module.css';

export const runtime = "edge"; 

const musics = [
  {
    title: 'HorseAlone',
    src: '/audios/HorseAlone.mp3',
  },
  {
    title: 'EndOfLife',
    src: '/audios/EndOfLife.mp3',
  },
  {
    title: 'Yalnızlık',
    src: '/audios/tahis (1).mp3',
  },
  {
    title: 'Cappadocia',
    src: '/audios/cappadocia.mp3',
  },
];

function MusicsPage() {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];
    if (currentAudio.paused) {
      currentAudio.play();
      setCurrentPlaying(index);
    } else {
      currentAudio.pause();
      setCurrentPlaying(null);
    }
  };

  return (
    <div className={styles.musicsPage}>
      <h1 className={styles.pacificoFont}>Musics</h1>
      <div className={styles.musicsContainer}>
        {musics.map((music, index) => (
          <div key={index} className={styles.musicCard}>
            <h2>{music.title}</h2>
            <button onClick={() => handlePlayPause(index)} className={styles.playButton}>
              {currentPlaying === index ? 'Pause' : 'Play'}
            </button>
            <audio ref={(el) => (audioRefs.current[index] = el)} src={music.src} className={styles.audio} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicsPage;
