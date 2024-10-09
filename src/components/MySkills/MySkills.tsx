import dynamic from 'next/dynamic';
import React from "react";
import styles from "./MySkillsStyles.module.css";

// Dynamically import SkillChart component without SSR
const SkillChart = dynamic(() => import("../SkillChart/SkillChart"), { ssr: false });

const MySkills = () => (
  <div className={styles.container}>
    <div className={styles.section} id="skills">
      <h1 className={styles.heading}>My Expertise</h1>
      <h2 className={styles.subheading}>Front-End</h2>
      <div className={styles.paragraph}>
        As a web developer, I have a solid understanding of front-end technologies. I have honed my skills in HTML, CSS, and JavaScript, which are essential to creating visually appealing and user-friendly websites. I am also proficient in using Bootstrap, a popular framework for creating responsive and mobile-friendly web pages. These skills allow me to design and build websites that not only look great, but are also easy to navigate and provide a seamless user experience.
      </div>
      <h2 className={styles.subheading}>Back-End</h2>
      <div className={styles.paragraph}>
        In addition to my front-end skills, I am well-versed in back-end development technologies. I have experience using NODE.js, a popular platform for building server-side applications, and am familiar with REST, a protocol for transmitting data over the web. These skills enable me to build websites that are not only visually appealing, but also efficient and secure, ensuring that users can access the information they need quickly and securely.
      </div>
      <h2 className={styles.subheading}>Languages</h2>
      <div className={styles.paragraph}>
        I have a strong foundation in programming languages such as Java and Python. Java is a popular language for building large-scale applications and is commonly used in the development of mobile and desktop software. Python, on the other hand, is a versatile language that is widely used in data science, machine learning, and web development. My proficiency in these languages allows me to write clean and efficient code, which is essential for creating stable and reliable applications.
      </div>
    </div>
    <div className={styles.chartContainer}>
      <SkillChart /> {/* Chart will be loaded client-side only */}
    </div>
  </div>
);

export default MySkills;
