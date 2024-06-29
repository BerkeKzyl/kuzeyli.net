'use client';

import React from 'react';
import Carousel from '@/components/carousel';
import styles from './styles.module.css';

export const runtime = "edge"; 

const images = [
  { src: '/images/Berkelogox-Photoroom.jpg', alt: 'Project 1', link: '/about' },
  { src: '/images/studentfinderafis.jpg', alt: 'Project 2', link: '/projects/studentfinder' },
  { src: '/images/cultureljourney.jpg', alt: 'Project 3', link: '/projects/culture-website' },
];

function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <h1>Kuzeyli Projects</h1>
      <p>WELCOME</p>
      <Carousel images={images} />
    </div>
  );
}

export default HomeContainer;
