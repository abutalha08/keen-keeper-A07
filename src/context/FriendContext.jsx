import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendContextProvider = ({ children }) => {


    const [storedFriends, setStoredFriends] = useState([]);

    const handleCall = (currentFriend) => {
        setStoredFriends([
            {
                ...currentFriend,
                type: "call",
                date: new Date()
            },
            ...storedFriends
        ]);

        alert(`Call with ${currentFriend.name}!`);
    };

    const handleText = (currentFriend) => {
        setStoredFriends([
            {
                ...currentFriend,
                type: "text",
                date: new Date()
            },
            ...storedFriends
        ]);

        alert(`Text with ${currentFriend.name}!`);
    };

    const handleVideo = (currentFriend) => {
        setStoredFriends([
            {
                ...currentFriend,
                type: "video",
                date: new Date()
            },
            ...storedFriends
        ]);

        alert(`Video with ${currentFriend.name}!`);
    };

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