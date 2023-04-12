import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Charts = () => {
 const [chart,setChart]=useState([])
 useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setChart(data))
 },[])
    return (
        
        <div className="w-9/12 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
           
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="marks" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
};

export default Charts;