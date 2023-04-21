import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./HomeHeader/AboutUs";

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
            </main>
        </>
    )
}

export default Home;