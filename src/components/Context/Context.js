import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const Context = ({children}) => {
    const [modal, setModal] = useState(false);

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