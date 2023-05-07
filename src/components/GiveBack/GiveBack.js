import React, { useContext, useEffect }  from "react";
import { AppContext } from "../../context/UserProvider";
//import { auth } from "../../firebase_setup/firebase";
import { useNavigate } from 'react-router-dom';
import Contact from "../Home/Contact/Contact";
import GiveBackNav from "./GiveBackNav";
import GiveHeader from "./GiveHeader";
import Steps from "./GiveStepper/Steps";
import Login from "../Login/Login";

const GiveBack = ()=>{
    const navigate = useNavigate();
    const {currentUser} = useContext(AppContext); 

    

    return (
        <>
            {currentUser === null ? (<Login/>) : (
            <>
            <header className="give__header container">
                <div>
                    <GiveBackNav/>
                </div>
                <GiveHeader/>
            </header>
            <main className="container">
                <Steps/>
                <Contact/>
            </main>
            </>)}
        </>
    )
}

export default GiveBack;