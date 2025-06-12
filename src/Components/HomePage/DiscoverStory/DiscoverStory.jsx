import React, { useRef, useEffect, useState } from "react";
import "./DiscoverStory.css";

const DiscoverStory = () => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="discover-story-section" ref={sectionRef}>
            <img
                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/DiscoverStory.png"
                alt="Discover Our Story Background"
                className="discover-story-bg-img"
            />
            <div className="discover-story-overlay">
                <div className={`discover-story-content${inView ? " animate-discover-story" : ""}`}>
                    <h2 className="hero-home-title discover-story-title">Discover Our Story</h2>
                    <p className="discover-story-description">
                        At the heart of our travel company is a passion for exploring the world and creating extraordinary experiences for our clients. Founded by a team of seasoned travelers, we are dedicated to redefining the way people experience travel.
                    </p>
                    <button className="hero-home-btn discover-story-btn">Explore Now</button>
                </div>
            </div>
        </section>
    );
}

export default DiscoverStory;