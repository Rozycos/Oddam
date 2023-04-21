import React from "react";
import HelpSectionTabsList from "./HelpSectionTabsList";

const HelpSectionTabs =(props)=>{
    const { category } = props

    return (
        <>
            <ul>
                <HelpSectionTabsList category={category}/>
            </ul>
        </>
    )
}

export default HelpSectionTabs;