import React, { useState } from "react";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";
import HelpSectionTabs from "./HelpSectionTabs";

const Tabs = () => {
    const tabText = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    const [activeTab, setActiveTab] = useState("fundations");
   
    return (
      <div className="tabs">
        <ul className="tabs__nav">
          <TabNavItem title="Fundacjom" id="fundations" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Organizacjom pozarządowym" id="organisations" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Lokalnym zbiórkom" id="local" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>
   
        <div className="outlet help__category--outlet">
            <TabContent id="fundations" activeTab={activeTab}>
                <p className="tabs__info">{tabText}</p>
                <HelpSectionTabs category={"fundations"}/>
                <p>Fundacje</p>
            </TabContent>
            <TabContent id="organisations" activeTab={activeTab}>
                <p className="tabs__info">{tabText}</p>
                <HelpSectionTabs category={"organisations"}/>
                <p>Organizacje pozarządowe</p>
            </TabContent>
            <TabContent id="local" activeTab={activeTab}>
                <p className="tabs__info">{tabText}</p>
                <HelpSectionTabs category={"local"}/>
                <p>Lokalne zbiórki</p>
            </TabContent>
        </div>
      </div>
    );
  };
   
  export default Tabs;