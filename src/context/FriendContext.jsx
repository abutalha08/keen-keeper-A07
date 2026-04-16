import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

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

        toast.success(`Call with ${currentFriend.name}!`);
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

        toast.success(`Text with ${currentFriend.name}!`);
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

        toast.success(`Video with ${currentFriend.name}!`);
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