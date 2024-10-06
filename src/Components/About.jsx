/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hey there! I'm a Computer Engineering undergraduate student at National University of Singapore (NUS). ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const languagesList = ["C/C++", "Python", "HTML/CSS/JavaScript", "Dart"];

const hardwareList = ["Robot Operating System (ROS)", "Arduino", "Verilog"];

const frameworkList = ["React", "Express", "Flutter", "Firebase"];

const databaseList = ["Firestore"];

const toolList = ["Git/GitHub", "Docker", "Kubernetes", "Jupyter Notebook"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const detailOrQuote = (
  <span>
    Passionate in Robot Autonomy and Computer Vision. 
    <br />
    Open for Summer Internship in 2025 (13 May - 25 July).
    <br />
    <br />
    I am also part of <a href="https://bumblebee.sg/" className="glowing-link">NUS Team Bumblebee</a> as a Software Engineer, working on the perception stack for our Autonomous Surface Vessel in preparation for <a href="https://robotx.org/programs/2024/" target="_blank" rel="noopener noreferrer" className="glowing-link">
      RobotX 2024
    </a>.
  </span>
);

const About = () => {
  return (
    <section className="padding" id="about">
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <p className="large">{detailOrQuote}</p>
      </div>
      <div className="skill-content">
        <h2>Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-container">
            <p className="skill-label">Languages</p>
            {languagesList.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="skills-container">
            <p className="skill-label">Hardware</p>
            {hardwareList.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="skills-container">
            <p className="skill-label">Frameworks</p>
            {frameworkList.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="skills-container">
            <p className="skill-label">Database</p>
            {databaseList.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="skills-container">
            <p className="skill-label">Tools</p>
            {toolList.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default About;
