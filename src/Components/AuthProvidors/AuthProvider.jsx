import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./FireBase/FirebaseConfig";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    
    // Dark Mode Implement 
    const toggleDarkMode =()=>{
        return setDarkMode(!darkMode);
    }

    // log In With Google 
    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // log In With Email And Password 
    const logInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out 
    const logOut = () => {
        signOut(auth)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error.message)
        })
      
    };
    // Create User 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // User State Change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        logInWithGoogle,
        logInWithEmailAndPassword,
        createUser,
        logOut,
        toggleDarkMode,
        darkMode,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;