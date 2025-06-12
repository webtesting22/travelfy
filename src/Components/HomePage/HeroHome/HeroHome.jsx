import React, { useRef, useState, useEffect } from "react";
import "./HeroHome.css";

const VIDEO_SRC = "Images/Final.mp4";

const HeroHome = () => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const [showFirst, setShowFirst] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const handleTimeUpdate = () => {
            const video = showFirst ? videoRef1.current : videoRef2.current;
            if (video && video.duration - video.currentTime < 0.5) {
                setFade(true);
            }
        };
        const handleFade = () => {
            setShowFirst((prev) => !prev);
            setFade(false);
            // Reset the just-faded-out video
            setTimeout(() => {
                const video = showFirst ? videoRef1.current : videoRef2.current;
                if (video) {
                    video.currentTime = 0;
                    video.play();
                }
            }, 400);
        };
        const video1 = videoRef1.current;
        const video2 = videoRef2.current;
        if (showFirst && video1) {
            video1.addEventListener("timeupdate", handleTimeUpdate);
        } else if (!showFirst && video2) {
            video2.addEventListener("timeupdate", handleTimeUpdate);
        }
        if (fade) {
            setTimeout(handleFade, 400);
        }
        return () => {
            if (video1) video1.removeEventListener("timeupdate", handleTimeUpdate);
            if (video2) video2.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [showFirst, fade]);

    return (
        <div className="hero-home-container" id="home">
            {/* Animated floating images */}
            {/* <img className="hero-home-img plane" src="https://cdn-icons-png.flaticon.com/512/69/69906.png" alt="plane" />
            <img className="hero-home-img globe" src="https://cdn-icons-png.flaticon.com/512/616/616490.png" alt="globe" />
            <img className="hero-home-img landmark" src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="landmark" /> */}
            <video
                ref={videoRef1}
                src={VIDEO_SRC}
                className={`hero-home-bg-video${showFirst ? " visible" : ""}${fade && showFirst ? " fade-out" : ""}`}
                autoPlay
                loop={false}
                muted
                playsInline
                style={{ display: showFirst || fade ? "block" : "none" }}
            />
            <video
                ref={videoRef2}
                src={VIDEO_SRC}
                className={`hero-home-bg-video${!showFirst ? " visible" : ""}${fade && !showFirst ? " fade-out" : ""}`}
                autoPlay
                loop={false}
                muted
                playsInline
                style={{ display: !showFirst || fade ? "block" : "none" }}
            />
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