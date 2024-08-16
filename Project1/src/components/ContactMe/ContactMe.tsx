import React from "react";
import styles from "./ContactMeStyles.module.css";

const ContactMe = () => (
  <div id="contact" className={styles.section}>
    <h2 className={styles.heading}>Contact Me</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>GitHub</li>
      <li className={styles.listItem}>LinkedIn</li>
      <li className={styles.listItem}>Email</li>
    </ul>
  </div>
);

export default ContactMe;
