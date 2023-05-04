import React from "react";
import Contact from "../Home/Contact/Contact";
import GiveBackNav from "./GiveBackNav";

const GiveBack = ()=>{
    return (
        <>
            <header className="header container">
                <div>
                    <GiveBackNav/>
                </div>
            </header>
            <main>
                <Contact/>
            </main>
        </>
    )
}

export default GiveBack;