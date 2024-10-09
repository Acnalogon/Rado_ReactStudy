import React from "react";
import styles from "./AboutMeStyles.module.css";

const AboutMe = () => (
  <div id="about" className={styles.section}>
    <h2 className={styles.heading}>Background & Skills</h2>
    <p className={styles.paragraph}>
      Born on November 13th, 1996, in Bosnia and Herzegovina, I bring a diverse
      background and valuable skills to the field of
      <span>web development</span>. My journey has sharpened my
      <span>communication skills</span> and honed my ability to
      <span>work effectively in teams</span>. I am skilled in various{" "}
      <span>programming languages</span> including Python, Java, and have
      expertise in web technologies like HTML, CSS, JavaScript, React,
      Bootstrap, NODE.js, and REST.
    </p>
    <h2 className={styles.heading}>Professional Experience</h2>
    <p className={styles.paragraph}>
      My career spans various industries from food and retail to customer
      service and event management, instilling in me a strong discipline and
      multi-lingual fluency in German, English, and Bosnian/Croatian/Serbian. My
      roles have ranged from a gas station attendant at Doppler Mineralöle Gmbh
      to a cook at McDonald’s, each teaching me valuable lessons in customer
      service and fast-paced work environments.
    </p>

    <p className={styles.paragraph}>
      My experiences at Shell, FITINN GmbH, ManpowerGroup GmbH, and as an event
      coordinator at Eventservice Parkas GmbH, have further developed my
      customer service, problem-solving skills, and team collaboration.
    </p>

    <h2 className={styles.heading}>Education & Career Focus</h2>
    <p className={styles.paragraph}>
      While I have pursued studies in
      <span>Software & Information Engineering</span> at TU Wien, I am currently
      taking a break from my academic endeavors to concentrate on building a
      career in web development. This decision stems from a strong desire to
      apply my practical skills and experiences in real-world projects and to
      immerse myself fully in the dynamic field of web technologies. I am
      committed to leveraging my knowledge and diverse background to make a
      significant impact in my professional role.
    </p>
  </div>
);

export default AboutMe;
