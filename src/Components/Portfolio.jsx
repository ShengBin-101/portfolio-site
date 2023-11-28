/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mbot.gif";

const imageAltText = "robot traversing maze";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "mBot - Maze Solving Robot 🤖",
    description:
      "Autonomous robot that can solve a maze, detect and process data from the environment using Arduino Uno.",
    url: "https://github.com/ShengBin-101/CG1111A-Final-Project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", paddingTop: "2rem"}}>
        <div className="container">
          <div style={{ maxWidth: "80%", maxHeight: "80%" }}>
            <img
              src={image}
              className="slideIn"
              style={{
                animation: "2s ease-out 0s 1 slideInLeft",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              alt={imageAltText}
            />
          </div>
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
