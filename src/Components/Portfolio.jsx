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
import gitbook_image from "../images/gitbook.png";
import asv_image from "../images/bbasv4.png";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const ongoingProjectList = [
  {
    title: "Gitbook 📚",
    description:
      "A collection of notes and resources for Robotics. I try to keep it updated with my learning journey in Robotics",
    url: "https://leftover-ice.gitbook.io/resources",
    tag: ["Gitbook", "ROS", "Tutorials", "Robotics"],
    image: gitbook_image,
  },
];

const completedProjectList = [
  {
    title: "Maritime RobotX Challenge 2024 🚢",
    description:
      "Under Team Bumblebee, I worked on LiDAR and Camera Perception for the Autonomous Surface Vehicle (ASV), this vehicle, along with the drone, won first place.",
    url: "https://bumblebee.sg/competitions/robotx/robotx24/2024/",
    tag: ["Robotics", "LiDAR-Camera Perception", "ROS"],
    image: asv_image,
  },
  {
    title: "Hornet 9.0 🚢",
    description: "NUS Bumblebee's Hornet Program, a 9-month training program to build a Autonomous Underwater Vehicle (AUV) from scratch. \n\
    Part of the Software Team, worked on Perception. \n\
    Competed in Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2024.",
    url: "https://github.com/Hornet9Software",
    tag: ["ROS", "OpenCV", "YOLO", "Robotics"],
    image: hornet_image,
    completedDate: "April 2024",
  },
  {
    title: "Alex - Search & Rescue Robot 🤖",
    description:
      "Tele-operated vehicle with search and rescue functions using Raspberry Pi, Arduino Uno, ROS, and Lidar. \n\
      Done as a group project for CG2111A course which focuses on Bare Metal Programming and secure networking with TLS.",
    url: "https://github.com/ShengBin-101/alex_ws",
    tag: ["ROS", "Raspberry Pi", "Bare Metal Programming", "TLS"],
    image: alex_image,
    completedDate: "April 2024",
  },
  {
    title: "FPGA Project 💻",
    description:
      "Programmed a multiplayer game involving inter-board serial communication for synchronisation of state machines. \n\
      Done as a group project for a Digital System Design course (EE2026).",
    url: "https://github.com/ShengBin-101/alex_ws",
    tag: ["FPGA", "VHDL"],
    image: fpga_image,
    completedDate: "April 2024",
  },
  {
    title: "mBot - Maze Solving Robot 🤖",
    description:
      "Done as a group project for CG1111A. \n\
      An autonomous robot that can solve a maze, detect and process data from the environment using Arduino Uno. \n\
      Utilizes PID control for line following and obstacle avoidance and K-NN algorithm for colour identification.",
    url: "https://github.com/ShengBin-101/CG1111A-Final-Project",
    tag: ["Arduino"],
    image: mbot_image,
    completedDate: "November 2023",
  },
  {
    title: "Intelligent Transport System 🚦",
    description:
      "Done as a Final Year Project in Ngee Ann Poly (2 person team). \n\
      Streamlines on-campus Autonomous Vehicle(AV) trials with real-time traffic analysis and enable traffic prioritization for AVs at junctions.",
    url: "https://github.com/tanxuanyun/Tiny_YOLO_Vehicle_Detection_and_Counting",
    tag: ["Microcontroller (ESP32)", "Deep Learning (Tiny-Yolo)", "Bluetooth Low Energy (BLE)"],
    image: its_image,
    completedDate: "October 2020",
  },
  {
    title: "Lego Brick Detection 📷",
    description:
      "Done as an assignment for a computer vision (OpenCV) course in Python.\n\
    A lego detection and counting program using image processing techniques for identification.",
    url: "https://github.com/ShengBin-101/lego-brick-detection",
    tag: ["Python", "OpenCV", "HTML/CSS/JavaScript"],
    image: lego_image,
    completedDate: "October 2020",
  },
  {
    title: "Autonomous Robot Car 🚗",
    description:
      "Developed teaching materials to guide students with hardware/electronics assembly and ROS basics to future students. \n\
      This was also my first time working with ROS.",
    tag: ["ROS", "3D CAD", "Raspberry Pi"],
    image: rnd_image,
    completedDate: "April 2020",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="projects">
      <h2>Projects</h2>
      <h4>Ongoing</h4>
      <div className="container">
        {ongoingProjectList.map((project) => (
          <div key={project.title}>
            <div className="project-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-description style={{ textAlign: 'center' }" >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3>{project.title}</h3>
                </a>
                {/* Split description into paragraphs */}
                {project.description.split('\n').map((paragraph, index) => (
                  <p className="small" key={index} style={{ textAlign: 'left', paddingInline: '20px' }}>{paragraph}</p>
                ))}
                {/* Project Tags */}
                <div className="tags-container" style={{ textAlign: 'center' }}> 
                  {project.tag.map((tag) => (
                    <p className="tag" key={tag}>{tag}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <h4>Completed</h4>
      <div className="container">
        {completedProjectList.map((project) => (
          <div key={project.title}>
            <div className="project-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-description" style={{ textAlign: 'center' }}>
                {/* Project Title */}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <h3>{project.title}</h3>
                </a>
                {/* Project Date */}
                <p className="small">
                  Completed on {project.completedDate}
                </p>
                {/* Split description into paragraphs */}
                {project.description.split('\n').map((paragraph, index) => (
                  <p className="small" key={index} style={{ textAlign: 'left', paddingInline: '20px' }}>{paragraph}</p>
                ))}
                {/* Project Tags */}
                <div className="tags-container" style={{ textAlign: 'center' }}> 
                  {project.tag.map((tag) => (
                    <p className="tag" key={tag}>{tag}</p>
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
