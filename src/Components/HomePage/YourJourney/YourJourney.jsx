import React, { useRef, useState, useEffect } from "react";
import "./YourJourney.css";

const VIDEO_SRC = "Images/BallonVideo.mp4";

const YourJourney = () => {
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
    <section className="your-journey-section">
      <video
        ref={videoRef1}
        src={VIDEO_SRC}
        className={`your-journey-bg-img${showFirst ? " visible" : ""}${fade && showFirst ? " fade-out" : ""}`}
        autoPlay
        loop={false}
        muted
        playsInline
        style={{ display: showFirst || fade ? "block" : "none", objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', userSelect: 'none', transition: 'opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1)' }}
      />
      <video
        ref={videoRef2}
        src={VIDEO_SRC}
        className={`your-journey-bg-img${!showFirst ? " visible" : ""}${fade && !showFirst ? " fade-out" : ""}`}
        autoPlay
        loop={false}
        muted
        playsInline
        style={{ display: !showFirst || fade ? "block" : "none", objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', userSelect: 'none', transition: 'opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1)' }}
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