import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = () => {

    const value = useContext(FriendContext);

    const { storedFriends } = value;

    console.log(storedFriends);
    return (
        <div className="max-w-5xl mx-auto space-y-4 my-20">
            <h2 className='font-bold text-4xl'>Timeline</h2>


            {
                storedFriends.length === 0 ? (
                    <div className="flex items-center justify-center h-64">
                        <p className="text-gray-400 text-4xl font-bold">
                            No activity yet in your timeline
                        </p>
                    </div>
                ) :

                    (

                        storedFriends.map((item, index) => (

                            <div key={index} className="bg-white p-4 rounded-xl shadow flex gap-3 items-center">

                                <span>
                                    {item.type === "call" && (
                                        <img src={callImg} alt="call" className="w-6 h-6" />
                                    )}

                                    {item.type === "text" && (
                                        <img src={textImg} alt="text" className="w-6 h-6" />
                                    )}

                                    {item.type === "video" && (
                                        <img src={videoImg} alt="video" className="w-6 h-6" />
                                    )}
                                </span>

                                <div>
                                    <p className="font-semibold">
                                        {item.type} with {item.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {new Date(item.date).toDateString()}
                                    </p>
                                </div>

                            </div>
                        ))

                    )
            }



        </div>
    );
};

export default Timeline;