import React, { PureComponent } from 'react';
import { PieChart, Pie } from "recharts";


const data = [
{ name: "Group A", value: 57 },
{ name: "Group B", value: 59 },
{ name: "Group C", value: 59 },
{ name: "Group D", value: 59 },
{ name: "Group E", value: 52 },
{ name: "Group F", value: 51 },
{ name: "Group G", value: 60 },
{ name: "Group h", value: 60 }
];

 

const Statistics = () => {
   
      
    return (

       <div className='text-center'>
         <h1 >Assignment Analysis</h1>

         <div className='w-1/2 mx-auto ' >
         <PieChart   width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
         </div>
         
    <p>Left side to Right side Assignment mark sequence</p>
       </div>
       
     
    )
};

export default Statistics;