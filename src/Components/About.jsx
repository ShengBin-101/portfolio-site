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
  "Hey there! I'm a Computer Engineering Freshman currently studying at National University of Singapore (NUS). ";

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
const detailOrQuote =
  "I am passionate in Robotics and Computer Vision. I am also interested in creating tech solutions to better improve the quality of lives for others.";

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
