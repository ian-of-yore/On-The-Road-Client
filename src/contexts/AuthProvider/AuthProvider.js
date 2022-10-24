import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])

    const signInProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInEmaiPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const authInfo = {
        user,
        signInProvider,
        logOut,
        createUser,
        logInEmaiPassword,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;