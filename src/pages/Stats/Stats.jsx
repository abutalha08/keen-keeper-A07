import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendContext';

const Stats = () => {

    const value = useContext(FriendContext);

    const { storedFriends } = value;

    const callCount = storedFriends.filter(item => item.type === "call").length;
const textCount = storedFriends.filter(item => item.type === "text").length;
const videoCount = storedFriends.filter(item => item.type === "video").length;


    const data = [
  { name: 'Call', value: callCount, fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },
];



    return (
        <div className='my-16 shadow p-10 rounded-md max-w-6xl  mx-auto border border-slate-300'>
            <h2 className='font-bold text-4xl text-center mb-8'>Communication Activity Overview</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: 'auto', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        
       
       
      />

      <Tooltip />
      <Legend  />
      
    </PieChart>
     
        </div>
    );
};

export default Stats;