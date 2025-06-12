import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./MeetOurTraveler.css";

const MeetOurTraveler = () => {
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
        <section className={`meet-traveler-section${inView ? " animate-meet-traveler" : ""}`} ref={sectionRef}>
            <Row gutter={[48, 32]} align="middle" justify="center">
                <Col xs={24} md={12} className="meet-traveler-img-col">
                    <div className="meet-traveler-img-container">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MeetOurTraveller.png"
                            alt="Meet Our Travelers"
                            className="meet-traveler-img"
                        />
                    </div>
                </Col>
                <Col xs={24} md={12} className="meet-traveler-content-col">
                    <h2 className="hero-home-title">Meet Our Travelers</h2>
                    <div className="meet-traveler-subheading">Real Experiences</div>
                    <p className="meet-traveler-description">
                        Hear from our past travelers and discover how our tailored journeys have transformed their vacations into unforgettable adventures. Their stories will inspire you to embark on your own transformative travel experience.
                    </p>
                    <button className="hero-home-btn meet-traveler-btn">Share Your Story</button>
                </Col>
            </Row>
        </section>
    );
};

export default MeetOurTraveler;