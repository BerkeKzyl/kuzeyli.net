'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';

export const runtime = "edge"; 

function AnimatedCards({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="slide"
              id={`c${index + 1}`}
              className={styles.hiddenInput}
              defaultChecked={index === 0}
            />
            <label
              htmlFor={`c${index + 1}`}
              className={styles.card}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className={styles.row}>
                <div className={styles.icon}>{index + 1}</div>
                <div className={styles.description}>
                  <h4>Project Image {index + 1}</h4>
                  <p>Project image description {index + 1}</p>
                </div>
              </div>
              <button
                className={styles.viewButton}
                onClick={() => handleImageClick(image)}
              >
                <img src="/images/buyutec.png" alt="View" />
              </button>
            </label>
          </React.Fragment>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="Full Size" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimatedCards;
