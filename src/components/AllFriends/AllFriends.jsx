import React, { useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';





// const friendsPromise = fetch("/friends.json").then(res => res.json());

const AllFriends = () => {

    const [friends, setFriends] = useState([]); 
    const [loading, setLoading] = useState(true);


    useEffect( ()=> {
        fetch("/friends.json")
        .then(res => res.json())
        .then(data => {
            setFriends(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
  return (
    <div className="flex justify-center items-center h-40">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}

    



    // const friends = use(friendsPromise);
    // console.log(friends);



    return (

        <div className='max-w-10/12 mx-auto my-10 space-y-6'>
            <h2 className='text-3xl font-bold'>Your Friends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    friends.map(friend =>
                        <FriendCard key={friend.id} friend ={friend} ></FriendCard>
                    )
                }
            </div>

        </div>
    );
};

export default AllFriends;