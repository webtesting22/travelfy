import React from "react";
import "./TrustedPartners.css";

const TrustedPartners = () => {
    return (
        <section className="trusted-partners-section">
            <div className="trusted-partners-box">
                <h2 className="trusted-partners-heading">Trusted Partners</h2>
                <p className="trusted-partners-description">
                    We proudly partner with leading travel providers, airlines, and hospitality brands to offer our clients the best possible services and amenities.
                </p>
            </div>
            {/* The background image will be handled by CSS on the section */}
        </section>
    );
};

export default TrustedPartners;