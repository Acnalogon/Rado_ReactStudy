"use client";

import React, { ReactNode } from "react";
import styles from './LayoutStyles.module.css';
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import MySkills from "../MySkills/MySkills";
import ContactMe from "../ContactMe/ContactMe";
import Navbar from "../Navbar/Navbar";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <div className={styles.scrollContainer}>
        <div id="home" className={styles.section}>
          <Home />
        </div>
        <div id="about" className={styles.section}>
          <AboutMe />
        </div>
        <div id="skills" className={styles.section}>
          <MySkills />
        </div>
        <div id="contact" className={styles.section}>
          <ContactMe />
        </div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
