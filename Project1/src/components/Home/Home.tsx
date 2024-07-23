/* "use client"

import React, { useState, useEffect, useRef } from "react";
import "./HomeStyles.css";
import * as THREE from 'three';
window.THREE = THREE; 
import NET from "vanta/dist/vanta.net.min";


const AboutRead = () => (
  <div className="section" id="home">
    <h1>Rado Vidakovic</h1>
    <h2>Self-taught web developer</h2>
    <button>Read More</button>
  </div>
);

interface VantaEffect {
  destroy: () => void;
}

const Home: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const effect = NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      }) as VantaEffect;

      setVantaEffect(effect);
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef}> {<AboutRead />} </div>;
};

export default Home; */

"use client"

import React, { useState, useEffect, useRef } from "react";

const Home = () => (
  <div className="section" id="home">
    <h1>Rado Vidakovic</h1>
    <h2>Self-taught web developer</h2>
    <button>Read More</button>
  </div>
);

export default Home;