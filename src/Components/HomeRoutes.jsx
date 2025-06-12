import React from "react";
import HeroHome from "./HomePage/HeroHome/HeroHome";
import About from "./HomePage/About/About";
import OurOfferings from "./HomePage/OurOfferings/OurOfferings";
import FeaturedExperiences from "./HomePage/FeaturedExperiences/FeaturedExperiences";
import YourJourney from "./HomePage/YourJourney/YourJourney";
const HomeRoutes = () => {
    return (
        <div>
            <HeroHome />
            <About/>
            <OurOfferings/>
            <FeaturedExperiences/>
            <YourJourney/>
        </div>
    )
}

export default HomeRoutes;