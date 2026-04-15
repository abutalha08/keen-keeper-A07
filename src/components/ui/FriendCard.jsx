import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <div className="bg-[#f3f4f6] rounded-xl shadow-md p-6 text-center w-full max-w-xs mx-auto hover:shadow-lg transition hover:-translate-y-1">

                            {/* Profile Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-gray-800">{friend.name}</h3>

                            {/* Days */}
                            <p className="text-sm text-gray-500 mt-1">{friend.days_since_contact}d ago</p>

                            {/* Category */}
                            <div className="mt-3 flex justify-center flex-wrap gap-2">
                                {friend.tags.map((tag,index) => <span key={index} className="text-xs px-3 py-1 rounded-full bg-green-200 text-green-800 font-medium">
                                    {tag}
                                </span>

                                )

                                }

                            </div>

                            {/* Status */}
                            <div className="mt-3  flex justify-center">
                                <span
                                    className={`text-xs px-3 py-1 rounded-full font-medium ${friend.status === "overdue"
                                            ? "bg-red-500 text-white"
                                            : friend.status === "almost due"
                                                ? "bg-yellow-300 text-white"
                                                : "bg-green-800 text-white"
                                        }`}
                                >
                                    {friend.status}
                                </span>
                            </div>
                        </div>
    );
};

export default FriendCard;