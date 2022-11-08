import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({children}) => {
    const [modal, setModal] = useState(false);

    // creating new user with email and password
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // login user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //updating user name when rsgister
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {displayName: name});
    }

    const userInfo = {
        modal,
        setModal,
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