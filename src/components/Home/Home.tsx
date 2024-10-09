"use client"

import React from "react";
import styles from "./HomeStyles.module.css"

const Home = () => (
  <div id="home" className={styles.section}>
    <h1>Rado Vidakovic</h1>
    <h2>Self-taught web developer</h2>
    <button className={styles.btn}>
      <a href="#about" className={styles.link}>Read More</a>
    </button>
  </div>
);

export default Home;
