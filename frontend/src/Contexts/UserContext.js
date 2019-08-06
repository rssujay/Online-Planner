import React, {createContext, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [id, setId] = useState("");

    return (
        <UserContext.Provider value={{id,setId}}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;