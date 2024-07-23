import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">Rado_Vidakovic</a>
      </div>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>About Me</a>
        </li>
        <li>
          <a href="#skills" onClick={toggleMenu}>My Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
