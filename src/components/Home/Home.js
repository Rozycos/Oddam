import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import HelpSection from "./HelpSection/HelpSection";
import Contact from "./Contact/Contact";

const Home = () =>{
    
    return (
        <>
            <header className="header container">
                <HomeHeader />
            </header>
            <main>
                <ThreeColumns/>
                <SimpleSteps/>
                <AboutUs/>
                <HelpSection/>
                <Contact/>
            </main>
        </>
    )
}

export default Home;