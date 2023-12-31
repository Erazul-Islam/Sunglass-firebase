import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    // googleLog In

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authentication = {
        googleLogin
    }

    return (
        <AuthContext.Provider value={authentication}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;