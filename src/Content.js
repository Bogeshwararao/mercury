// Content.js
import React from 'react';
import './Content.css';
import img from "./inter.jpg";
const Content = () => (
  <div className="content-container">
    {/* Left part with big letters */}
    <div className="left-part">
      <h1>A simpler, smarter basic credit card</h1>
      <p>Your powerful companion on the road to financial success! Explore personal budget management, investment opportunities.</p>
    </div>

    {/* Right part with the image */}
    <div className="right-part">
      <img src={img} alt="Inter Image" />
    </div>
  </div>
);

export default Content;
