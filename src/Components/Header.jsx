/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div className="responsive-header">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Header;
