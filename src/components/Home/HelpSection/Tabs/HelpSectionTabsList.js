import React from "react";

const HelpSectionTabsList =(props)=>{
    const { organisations, category } = props;

return (
        <>
            <li className="help__list">
                <div>
                    <h3 className="help__list-title">{organisations.name}</h3>
                    <h4 className="help__list-goals">{organisations.goals}</h4>
                </div>
                <p className="help__list-goals">{organisations.items}</p>
            </li>
        </>
    )
}

export default HelpSectionTabsList;