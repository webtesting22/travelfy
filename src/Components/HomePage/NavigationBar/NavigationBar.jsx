import React, { useState, useEffect } from "react";
import "./NavigationBar.css";

const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Our Offerings", to: "offerings" },
    { label: "Experiences", to: "experiences" },
    { label: "Contact", to: "contact" },
];

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="navbar">
            <div className={`navbar-inner${scrolled ? " navbar-scrolled" : ""}`}>
                <img
                    src={scrolled ? "/Images/BlackLogo.png" : "/Images/WhiteLogo.png"}
                    alt="Travelfy Logo"
                    className="navbar-logo"
                />
                <div className={`navbar-links${mobileOpen ? " open" : ""}`}>
                    {navLinks.map((link) => (
                        <span
                            key={link.to}
                            className="navbar-link"
                            onClick={() => handleNavClick(link.to)}
                        >
                            {link.label}
                        </span>
                    ))}
                    <button className="navbar-btn">Book</button>
                </div>
                <div
                    className={`navbar-hamburger${mobileOpen ? " open" : ""}`}
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {mobileOpen && <div className="navbar-mobile-backdrop" onClick={() => setMobileOpen(false)}></div>}
        </nav>
    );
};

export default NavigationBar;