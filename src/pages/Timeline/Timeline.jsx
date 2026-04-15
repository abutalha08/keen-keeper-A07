import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Timeline = () => {

    const value = useContext(FriendContext);

    const { storedFriends } = value;

    console.log(storedFriends);
    return (
        <div>
            Timeline

        </div>
    );
};

export default Timeline;