import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     <p>{ title }</p>
   </li>
 );
};
export default TabNavItem;