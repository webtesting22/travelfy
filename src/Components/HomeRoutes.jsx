import React from "react";
import HeroHome from "./HomePage/HeroHome/HeroHome";
import About from "./HomePage/About/About";
import OurOfferings from "./HomePage/OurOfferings/OurOfferings";
import FeaturedExperiences from "./HomePage/FeaturedExperiences/FeaturedExperiences";
import YourJourney from "./HomePage/YourJourney/YourJourney";
import TrustedPartners from "./HomePage/TrustedPartners/TrustedPartners";
import MeetOurTraveler from "./HomePage/MeetOurTraveler/MeetOurTraveler";
import DiscoverStory from "./HomePage/DiscoverStory/DiscoverStory";
const HomeRoutes = () => {
    return (
        <div>
            <HeroHome />
            <About/>
            <OurOfferings/>
            <FeaturedExperiences/>
            <YourJourney/>
            <TrustedPartners/>
            <MeetOurTraveler/>
            <DiscoverStory/>
        </div>
    )
}

export default HomeRoutes;