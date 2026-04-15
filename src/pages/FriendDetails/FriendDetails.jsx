import React, { useContext } from 'react';
import { FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { MdMessage, MdOutlineArchive } from 'react-icons/md';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from "../../context/FriendContext";

const FriendDetails = () => {

    const { friendId } = useParams();


    const friends = useLoaderData();

    const value = useContext(FriendContext);

    const { handleCall, handleText, handleVideo } = value;

    console.log(handleCall, handleText, handleVideo);

    const expectedFriend = friends.find(friend => friend.id === Number(friendId));

    if (!expectedFriend) {
        return <p className="text-center mt-10">Friend not found</p>;
    }

    const {
        next_due_date,
        goal,
        tags,
        status,
        days_since_contact,
        email,
        picture,
        name
    } = expectedFriend;

    return (
        <div className="bg-[#f3f4f6] min-h-screen flex items-center justify-center p-4 sm:p-6">


            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* left-section */}
                <div className="lg:col-span-1">

                    {/* left-card*/}
                    <div className="bg-white rounded-xl shadow p-6 text-center space-y-4">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 rounded-full mx-auto"
                        />

                        <h2 className="text-lg font-semibold text-gray-800">
                            {name}
                        </h2>

                        <div className="mt-3 flex justify-center">
                            <span
                                className={`text-xs px-3 py-1 rounded-full font-medium ${status === "overdue"
                                        ? "bg-red-500 text-white"
                                        : status === "almost due"
                                            ? "bg-yellow-300 text-white"
                                            : "bg-green-800 text-white"
                                    }`}
                            >
                                {status}
                            </span>
                        </div>

                        <div className="mt-3 flex justify-center flex-wrap gap-2">
                            {tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 rounded-full bg-green-200 text-green-800 font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-xs text-gray-400">
                            Preferred: {email}
                        </p>
                    </div>


                    <div className="space-y-3 pt-4">

                        <button className="w-full font-semibold bg-white shadow cursor-pointer rounded-md py-3 text-sm hover:bg-gray-100 flex items-center justify-center gap-2">
                            <RiNotificationSnoozeLine className="text-lg" />
                            <span>Snooze 2 Weeks</span>
                        </button>

                        <button className="w-full font-semibold bg-white shadow cursor-pointer rounded-md py-3 text-sm hover:bg-gray-100 flex items-center justify-center gap-2">
                            <MdOutlineArchive className="text-lg" />
                            <span>Archive</span>
                        </button>

                        <button className="w-full font-semibold bg-white shadow cursor-pointer rounded-md py-3 text-sm text-red-500 hover:bg-red-50 flex items-center justify-center gap-2">
                            <RiDeleteBin6Line className="text-lg" />
                            <span>Delete</span>
                        </button>

                    </div>
                </div>

                {/* Right-section */}
                <div className="lg:col-span-2 space-y-6">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            <h2 className="text-2xl font-bold text-green-900">
                                {days_since_contact}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            <h2 className="text-2xl font-bold text-green-900">
                                {goal}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            <h2 className="text-lg font-semibold text-green-900">
                                {next_due_date}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Next Due
                            </p>
                        </div>

                    </div>


                    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-gray-700">
                                Relationship Goal
                            </h3>
                            <p className="text-sm text-gray-500">
                                Connect every <span className="font-bold">{goal} days</span>
                            </p>
                        </div>

                        <button className="bg-[#f3f4f6] font-semibold px-3 py-1 text-sm rounded-md hover:bg-gray-100">
                            Edit
                        </button>
                    </div>


                    <div className="bg-white rounded-xl shadow p-5">
                        <h3 className="font-semibold text-gray-700 mb-4">
                            Quick Check-In
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                            <button onClick={() => handleCall(expectedFriend)} className="bg-[#f3f4f6] font-semibold rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100">
                                <FaPhoneAlt />
                                <span className="text-sm">Call</span>
                            </button>

                            <button onClick={() => handleText(expectedFriend)} className="bg-[#f3f4f6] font-semibold rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100">
                                <MdMessage />
                                <span className="text-sm">Text</span>
                            </button>

                            <button onClick={() => handleVideo(expectedFriend)} className="bg-[#f3f4f6] font-semibold rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100">
                                <FaVideo />
                                <span className="text-sm">Video</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;