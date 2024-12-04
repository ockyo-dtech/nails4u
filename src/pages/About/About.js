import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to MyReactApp! Our mission is to create awesome web applications using the latest technologies.
      </p>
      <p>
        This app is built with React, a powerful library for building user interfaces. Our team is passionate about delivering high-quality products that make a difference.
      </p>
      <h2>Our Team</h2>
      <ul>
        <li>Jane Doe - Frontend Developer</li>
        <li>John Smith - Backend Developer</li>
        <li>Alice Johnson - UX/UI Designer</li>
      </ul>
    </div>
  );
};

export default About;
