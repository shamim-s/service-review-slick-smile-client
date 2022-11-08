import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({children}) => {
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // creating new user with email and password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // login user with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //updating user name when rsgister
    const updateUser = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name});
    }

    // sign out user 
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // get the current user is by setting an observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe;
    },[user])

    const userInfo = {
        modal,
        setModal,
        user,
        setUser,
        loading,
        setLoading,
        createNewUser,
        loginUser,
        updateUser,
        logoutUser,
    }
    return (
            <AuthContext.Provider value={userInfo}>
                {
                    children
                }
            </AuthContext.Provider>
    );
};

export default Context;