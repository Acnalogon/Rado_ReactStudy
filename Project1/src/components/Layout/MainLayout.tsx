/* "use client";

import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./LayoutStyles.css";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import MySkills from "../MySkills/MySkills";
import ContactMe from "../ContactMe/ContactMe";
import Navbar from "../Navbar/Navbar";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <AnimatedBackground />
    <Scrollbars
      renderTrackHorizontal={({ style, ...props }) => (
        <div {...props} style={{ ...style, height: '8px' }} />
      )}
      renderThumbHorizontal={({ style, ...props }) => (
        <div {...props} style={{ ...style, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '4px' }} />
      )}
      renderView={({ style, ...props }) => (
        <div {...props} className="scroll-content" style={{ ...style }} />
      )}
    >
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <AboutMe />
      </div>
      <div id="skills" className="section">
        <MySkills />
      </div>
      <div id="contact" className="section">
        <ContactMe />
      </div>
      {children}
    </Scrollbars>
  </>
);

export default MainLayout;
 */
"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      {mounted && (
        <Scrollbars
          className={styles.horizontalScroll}
          autoHide
          renderTrackHorizontal={({ style, ...props }) => (
            <div {...props} style={{ ...style, height: '8px' }} />
          )}
          renderThumbHorizontal={({ style, ...props }) => (
            <div {...props} style={{ ...style, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '4px' }} />
          )}
          renderView={({ style, ...props }) => (
            <div {...props} className={styles.scrollContent} style={{ ...style }} />
          )}
        >
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
        </Scrollbars>
      )}
    </>
  );
};

export default MainLayout;
