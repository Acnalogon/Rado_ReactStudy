import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;

      if (backgroundRef.current) {
        backgroundRef.current.style.background = `
          radial-gradient(circle at ${xPos}% ${yPos}%, #ff9a9e, #fecfef) 
        `; /* #fecfef  #8a2be2,*/
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className={styles.background} ref={backgroundRef} />;
};

export default AnimatedBackground;
