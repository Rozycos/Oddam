import React, {createContext, useState, useEffect} from "react";
import { auth } from "../firebase_setup/firebase";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AppContext = createContext(null);

const UserProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    
      useEffect(() => {
        const unsubscripe = auth.onAuthStateChanged(user => {
          if (user) {
            setCurrentUser(user);
            localStorage.setItem('currentUser', user.uid);
          } else {
            setCurrentUser(null);
            localStorage.removeItem('currentUser');
          }
        });
    
        return unsubscripe
      }, []);   

    return (
        <AppContext.Provider value={{currentUser, setCurrentUser}}>{children}</AppContext.Provider>
    )
}

export default UserProvider;