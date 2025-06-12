import React, { useRef, useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./OurOfferings.css";

const offerings = [
    {
        img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OfferingCard1.png",
        name: "Place Name 1",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OfferingCard2.png",
        name: "Place Name 2",
    },
    {
        img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OfferingCard3.png",
        name: "Place Name 3",
    },
];

const OurOfferings = () => {
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
        <section className="offerings-section" id="offerings" ref={sectionRef}>
            <h2 className="offerings-title">Our Offerings</h2>
            <p className="offerings-subtitle">Discover the world's most captivating destinations</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Row gutter={[32, 32]} justify="center" className="offerings-row">
                    {offerings.map((offering, idx) => (
                        <Col xs={24} sm={12} md={8} lg={8} key={idx}>
                            <div className={`offering-card${inView ? " animate-card" : ""}`}>
                                <img
                                    src={offering.img}
                                    alt={offering.name}
                                    className={`offering-img${inView ? " animate-img" : ""}`}
                                />
                                {/* <div className={`offering-place${inView ? " animate-place" : ""}`}>
                                    {offering.name}
                                </div> */}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default OurOfferings;