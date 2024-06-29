"use client";
import React, { useState, useEffect } from 'react';
import styles from './HelloComponent.module.css';

const greetings = [
  "नमस्ते",          // Hindi
  "કેમ છો",         // Gujarati
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",    // Punjabi
  "Hello",           // English
  "Bonjour",         // French
  "Olá",             // Portuguese
  "こんにちは",       // Japanese
  "你好",            // Chinese
  "안녕하세요",        // Korean
];

const HelloComponent = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    // Hide scroll when component is loading
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => {
        const nextGreeting = (prevGreeting + 1) % greetings.length;
        if (nextGreeting === 0) {
          const mainContainer = document.getElementById('mainContainer');
          if (mainContainer) {
            mainContainer.classList.add(styles.slideOut);
          }
          clearInterval(interval);
          // Restore scroll when component is done loading
          document.body.style.overflow = 'auto';
        }
        return nextGreeting;
      });
    }, 180); // Set interval to 180ms for faster change
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="mainContainer" className={styles.mainContainer}>
      <div className={styles.helloContainer}>
        <div className={styles.rotatingText}>
          <span className={styles.dot}>•</span>
          <span className={styles.text}>{greetings[currentGreeting]}</span>
        </div>
      </div>
    </main>
  );
}

export default HelloComponent;