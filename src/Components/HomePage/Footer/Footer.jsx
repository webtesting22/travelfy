import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section" id="contact">
            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/089d5ff82ef4727ac00124bede3e666be6739622.png" alt="footer background" className="footer-bg-img" />
            <div className="footer-overlay">
                <div className="footer-content">
                    <div className="footer-col footer-logo-col">
                        <img src="/Images/TravelfyLogo.png" alt="Travelfy Logo" className="footer-logo" />
                        <div className="footer-copyright">© 2025 Voyage, Inc.<br />All rights reserved.</div>
                    </div>
                    <div className="footer-col footer-links-col">
                        <div className="footer-heading">Quick Links</div>
                        <div className="footer-link">Home</div>
                        <div className="footer-link">About</div>
                        <div className="footer-link">Experiences</div>
                        <div className="footer-link">Contact</div>
                    </div>
                    <div className="footer-col footer-services-col">
                        <div className="footer-heading">Our Services</div>
                        <div className="footer-link">Vacation Packages</div>
                    </div>
                </div>
                {/* <div className="footer-bottom-text">O A M U I E D   W H I P L</div> */}
            </div>
        </footer>
    );
}

export default Footer;