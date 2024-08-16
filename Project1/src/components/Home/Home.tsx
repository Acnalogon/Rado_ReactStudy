"use client"

import React, { useState, useEffect, useRef } from "react";
import styles from "./HomeStyles.module.css"

const Home = () => (
  <div id="home" className={styles.section}>
    <h1>Rado Vidakovic</h1>
    <h2>Self-taught web developer</h2>
    <button className={styles.btn}>Read More</button>
  </div>
);

export default Home;