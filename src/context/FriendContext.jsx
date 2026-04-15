import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendContextProvider = ({ children }) => {


    const [storedFriends, setStoredFriends] = useState([]);

    const handleCall = (currentFriend) => {

        setStoredFriends([...storedFriends, currentFriend]);
        alert(`Call with ${currentFriend.name}!`);

    }

    const handleText = (currentFriend) => {

        setStoredFriends([...storedFriends, currentFriend]);
        alert(`Text with ${currentFriend.name}!`);

    }

    const handleVideo = (currentFriend) => {

        setStoredFriends([...storedFriends, currentFriend]);
        alert(`Video with ${currentFriend.name}!`);

    }

    const data = {
        storedFriends,
        setStoredFriends,
        handleCall,
        handleText,
        handleVideo
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendContextProvider;