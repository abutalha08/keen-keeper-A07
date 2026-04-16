import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = () => {

    const value = useContext(FriendContext);

    const { storedFriends } = value;

    // console.log(storedFriends);

    const [sortingType, setSortingType] = useState("");

     const filteredFriends = sortingType
        ? storedFriends.filter(item => item.type === sortingType)
        : storedFriends;
    return (
        <div className="max-w-5xl mx-auto space-y-4 my-20">
            <h2 className='font-bold text-4xl'>Timeline</h2>

            <div className="dropdown dropdown-bottom w-60 ">

  <div tabIndex={0} role="button" className="btn m-1 w-full "> {sortingType ? sortingType.toUpperCase() : "Filter Timeline"} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-60 p-2 shadow-sm">
    <li onClick={() => setSortingType("")}><a>All</a></li>
    <li onClick={()=> setSortingType("call")}><a>Call</a></li>
    <li onClick={()=> setSortingType("text")}><a>Text</a></li>
    <li onClick={()=> setSortingType("video")}><a>Video</a></li>
  </ul>
</div>


            {
                filteredFriends.length === 0 ? (
                    <div className="flex items-center justify-center h-64 ">
                        <p className="text-gray-400 text-4xl font-bold text-center">
                            No activity yet in your timeline
                        </p>
                    </div>
                ) :

                    (

                        filteredFriends.map((item, index) => (

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