import React from "react";
import Contact from "../Home/Contact/Contact";
import GiveBackNav from "./GiveBackNav";
import GiveHeader from "./GiveHeader";
import Steps from "./GiveStepper/Steps";

const GiveBack = ()=>{
    return (
        <>
            <header className="give__header container">
                <div>
                    <GiveBackNav/>
                </div>
                <GiveHeader/>
            </header>
            <main>
                <Steps/>
                <Contact/>
            </main>
        </>
    )
}

export default GiveBack;