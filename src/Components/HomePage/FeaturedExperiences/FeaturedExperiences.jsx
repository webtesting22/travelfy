import React from "react";
import "./FeaturedExperiences.css";

const features = [
    {
        icon: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Experiences1.png",
        title: "Tailored Itineraries",
        subtitle: "Expertly Crafted",
    },
    {
        icon: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Experiences2.png",
        title: "Personalized Packages",
        subtitle: "Exclusive Experiences",
    },
    {
        icon: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Experiences3.png",
        title: "Unique Discoveries",
        subtitle: "Unforgettable Moments",
    },
    {
        icon: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Experiences4.png",
        title: "Curated for You",
        subtitle: "Elevate Your Journey",
    },
];

const FeaturedExperiences = () => {
    return (
        <section className="featured-section" id="experiences">
            <h2 className="featured-title">Featured Experiences</h2>
            <p className="featured-subtitle">
                Immerse yourself in the heart of each destination, with handpicked local experiences that showcase the true essence of the culture
            </p>
            <div className="featured-cards">
                {features.map((feature, idx) => (
                    <div className="featured-card" key={idx}>
                        <div className="featured-icon">
                            <img src={feature.icon} alt={feature.title + ' icon'} className="featured-icon-img" />
                        </div>
                        <div className="featured-card-title">{feature.title}</div>
                        <div className="featured-card-subtitle">{feature.subtitle}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedExperiences;