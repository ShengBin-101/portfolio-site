/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hey there! I'm a Computer Engineering Freshman currently studying at National University of Singapore (NUS). ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const languagesList = ["Robot Operating System (ROS)", "C/C++", "Python", "Computer Vision"];

const hardwareList = ["Robot Operating System (ROS)", "Arduino"];

const webList = ["HTML/CSS/JavaScript", "React"];

const otherList = ["Git, GitHub", "Docker"];

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
        <br />
        <h2>Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-container">
            <p className="skill-label">Programming Languages</p>
            {languagesList.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
          <div className="skills-container">
            <p className="skill-label">Web Development</p>
            {webList.map((skill, index) => (
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
            <p className="skill-label">Others</p>
            {otherList.map((skill, index) => (
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
