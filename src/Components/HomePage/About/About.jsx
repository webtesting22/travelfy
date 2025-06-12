import React from "react";
import "./About.css";
const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-description">
                    At our travel company, we believe that every journey should be a memorable one. Our team of seasoned travel experts is dedicated to crafting personalized experiences that exceed your expectations. From the moment you start planning your trip to the moment you return home, we'll be with you every step of the way, ensuring that your travel dreams become a reality.
                </p>
            </div>
            <div className="about-actions">
                <button className="about-btn about-btn-outline">Explore Packages</button>
                <button className="about-btn about-btn-primary">Contact Us</button>
            </div>
        </section>
    )
}

export default About;