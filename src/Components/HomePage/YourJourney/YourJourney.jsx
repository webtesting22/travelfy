import React from "react";
import "./YourJourney.css";

const YourJourney = () => {
  return (
    <section className="your-journey-section">
      <img
        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/YourJourney.jpg"
        alt="Elevate Your Journey"
        className="your-journey-bg-img"
      />
      <div className="your-journey-overlay">
        <div className="your-journey-content">
          <h1 className="your-journey-title">Elevate Your Journey</h1>
          <p className="your-journey-subtitle">
            Craft unforgettable moments in the world's most extraordinary places
          </p>
          <div className="your-journey-actions">
            <button className="your-journey-btn">Explore Packages</button>
            <button className="your-journey-btn">Find Deals</button>
            <button className="your-journey-btn your-journey-btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourJourney; 