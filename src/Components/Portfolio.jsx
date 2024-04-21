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
import fpga_image from "../images/fpga.gif";
import hornet_image from "../images/Hornet9.gif";
import alex_image from "../images/alex.gif";
import mbot_image from "../images/mbot.gif";
import its_image from "../images/ITS.gif";
import rnd_image from "../images/rnd_robot.gif";
import lego_image from "../images/lego_opencv.gif";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hornet 9.0 🚢",
    description:
      "Autonomous Underwater Vehicle. Competed in SAUVC 2024.",
    url: "https://github.com/ShengBin-101/camera_ws",
    tag: ["ROS", "OpenCV", "YOLO"],
    image: hornet_image,
  },
  {
    title: "Alex - Search & Rescue Robot 🤖",
    description:
      "Tele-operated vehicle with search and rescue functions using Raspberry Pi, Arduino Uno, ROS, and Lidar.",
    url: "https://github.com/ShengBin-101/alex_ws",
    tag: ["ROS", "Raspberry Pi", "Arduino", "Bare Metal Programming"],
    image: alex_image,
  },
  {
    title: "FPGA Project 💻",
    description:
      "Programmed a multiplayer game involving inter-board serial communication for synchronisation of state machines.",
    url: "https://github.com/ShengBin-101/alex_ws",
    tag: ["FPGA", "VHDL"],
    image: fpga_image,
  },
  {
    title: "mBot - Maze Solving Robot 🤖",
    description:
      "Autonomous robot that can solve a maze, detect and process data from the environment using Arduino Uno.",
    url: "https://github.com/ShengBin-101/CG1111A-Final-Project",
    tag: ["Arduino"],
    image: mbot_image,
  },
  {
    title: "Intelligent Transport System 🚦",
    description:
      "Streamlines on-campus Autonomous Vehicle(MooVita) trials with dynamic roadblocks. Cameras monitor traffic for real-time traffic analysis and Microcontrollers enable traffic prioritization at junctions.",
    url: "https://github.com/tanxuanyun/Tiny_YOLO_Vehicle_Detection_and_Counting",
    tag: ["Microcontroller (ESP32)", "Deep Learning (Tiny-Yolo)"],
    image: its_image,
  },
  {
    title: "Autonomous Robot Car 🚗",
    description:
      "Developed teaching materials to guide students with hardware/electronics assembly and ROS basics to future students.",
    tag: ["ROS", "3D CAD", "Raspberry Pi"],
    image: rnd_image,
  },
  {
    title: "Lego Brick Detection 📷",
    description: "A lego detection and counting program.",
    url: "https://github.com/ShengBin-101/lego-brick-detection",
    tag: ["Python", "OpenCV", "HTML/CSS/JavaScript"],
    image: lego_image,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="projects">
      <h2>Projects</h2>
      <div className="container">
        {projectList.map((project) => (
          <div key={project.title}>
            <div className="project-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-description">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3>{project.title}</h3>
                </a>
                <div>
                  <p className="small">{project.description}</p>
                  {project.tag.map((tag) => (
                    <p className="tag" key={tag}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
