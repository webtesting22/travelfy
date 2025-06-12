import React from "react";
import "./HeroHome.css";

const HeroHome = () => {
    return (
        <div className="hero-home-container">
            {/* Animated floating images */}
            <img className="hero-home-img plane" src="https://cdn-icons-png.flaticon.com/512/69/69906.png" alt="plane" />
            <img className="hero-home-img globe" src="https://cdn-icons-png.flaticon.com/512/616/616490.png" alt="globe" />
            <img className="hero-home-img landmark" src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="landmark" />
            <div className="hero-home-overlay">
                <div className="hero-home-content">
                    <h1 className="hero-home-title animated-title">
                        <span>Discover the World's</span>
                        <span>Best Travel Experiences</span>
                    </h1>
                    <p className="hero-home-subtext animated-subtext">
                        Embark on a journey tailored to your preferences. Our experts curate<br />
                        the perfect travel itinerary, handling all the details from start to finish.
                    </p>
                    <button className="hero-home-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;