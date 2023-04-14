 import React, { useEffect, useState } from 'react';
 
import Jobs from './Jobs';
import AppliedJobCart from './AppliedJobCart';
 
 const AppliedJob = () => {
     
    
        const [orders, setOrders] = useState([]);
        const [filterOrder, setFilterOrder] = useState([]);
      
        useEffect(() => {
          const storedData = JSON.parse(localStorage.getItem("orders"));
          if (storedData) {
            setOrders(storedData);
            setFilterOrder(storedData);
          }
        }, []);
        console.log(orders)
        console.log(filterOrder)


    return (
        <div className=''>
          <div className='text-center py-10'>
          <h1 className='text-5xl'> Applied Jobs</h1>
         <h1 className='my-3'>Number of Applied Job: {filterOrder.length}</h1>
          </div>
            
     <div className=''>

     {
        filterOrder?.map(product => <AppliedJobCart product={product}></AppliedJobCart>
      )} 

     </div>
        </div>
    );
 };
 
 export default AppliedJob;