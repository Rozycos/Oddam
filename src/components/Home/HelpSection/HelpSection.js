import React from "react";
import Tabs from "./Tabs/Tabs";

const HelpSection =()=>{

    return (
        <>
            <section className="help__container" name="help">
                <div className="help__title">
                    <h2>Komu pomagamy</h2>
                    <Tabs/>
                </div>
            </section>
        </>
    )
}

export default HelpSection;