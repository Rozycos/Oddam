import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";

const Home = () =>{
    
    return (
        <>
            <header className="header container">
                <HomeHeader />
            </header>
            <main>
                <ThreeColumns/>
                <SimpleSteps/>
            </main>
        </>
    )
}

export default Home;