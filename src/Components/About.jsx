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
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

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
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>Skills</h2>
        <h4>Programming Languages</h4>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 2rem",
            gap: "2rem",
          }}
        >
          {languagesList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h4>Hardware</h4>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 2rem",
            gap: "2rem",
          }}
        >
          {hardwareList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h4>Web Development</h4>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 2rem",
            gap: "2rem",
          }}
        >
          {webList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h4>Others</h4>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 2rem",
            gap: "2rem",
          }}
        >
          {otherList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
